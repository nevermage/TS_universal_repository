export class EntityNotExistsError extends Error {
    constructor(id: number) {
        super(`Entity #${id} not exists`);
        this.name = 'EntityNotExistsError';
    }
}