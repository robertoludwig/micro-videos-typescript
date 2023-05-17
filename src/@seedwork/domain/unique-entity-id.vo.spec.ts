import InvalidUuidError from "../errors/invalid-uuid.error";
import UniqueEntityId from "./unique-entity-id.vo";

describe('UniqueEntityId Unit Testes', () => {
    it('should throw error when uuid is invalid', () => {
        const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate');
        expect( () => new UniqueEntityId('fake id')).toThrow( new InvalidUuidError());
        expect(validateSpy).toHaveBeenCalled();
    });
});