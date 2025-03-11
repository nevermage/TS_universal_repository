import {EntityAlreadyExistsError, EntityNotExistsError} from "../errors";

export class Repository<T> {
    #data: Record<number, T> = {};

    create(id: number, data: T): void {
        if (this.#data[id] !== undefined) {
            throw new EntityAlreadyExistsError(`Entity #${id} already exists`);
        }

        this.#data[id] = data;
    }

    read(): T[];
    read(id: number): T;
    read(ids: number[]): T[];
    read(idOrIds?: number[] | number): T[] | T | undefined {
        if (Array.isArray(idOrIds)) {
            return this.#getByIds(idOrIds);
        }

        if (idOrIds) {
            return this.#getById(idOrIds);
        }

        return this.#getAll()
    }

    #getByIds(ids: number[]): T[] {
        return ids.map((id: number): T => this.#getById(id)).filter(id => id !== undefined);
    }

    #getById(id: number): T {
        return this.#data[id];
    }

    #getAll(): T[] {
        return Object.values(this.#data);
    }

    update(id: number, updates: Partial<T>): void {
        if (this.#data[id] === undefined) {
            throw new EntityNotExistsError(`Entity #${id} not exists`);
        }

        Object.entries(updates).forEach(([key, value]) => {
            this.#data[id][key as keyof T] = value as T[keyof T];
        });
    }

    delete(id: number): void {
        delete this.#data[id];
    }
}