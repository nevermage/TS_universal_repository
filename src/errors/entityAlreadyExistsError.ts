export class EntityAlreadyExistsError extends Error {
    constructor(id: number) {
        super(`Entity #${id} already exists`);
        this.name = 'EntityAlreadyExistsError';
    }
}