import { isValidUsernameRepository, getUsernameRepository } from '../repository';

describe('isValidUsernameRepository', () => {
    it('should return false for empty string', () => {
        expect(isValidUsernameRepository('')).toBe(false);
    });

    it('should return false for username only', () => {
        expect(isValidUsernameRepository('john')).toBe(false);
    });

    it('should return false for special charachters', () => {
        expect(isValidUsernameRepository('#$#$')).toBe(false);
    });

    it('should return true for username/repository pair', () => {
        const validPairs = [
            'facebook/reactjs',
            'gooddata/gooddata-js'
        ];

        const validate = name =>
            expect(isValidUsernameRepository(name)).toBe(true);

        validPairs.forEach(validate);
    });
});

describe('getUsernameRepository', () => {
    it('should return array with username and repository', () => {
        expect(getUsernameRepository('facebook/reactjs')).toEqual(['facebook', 'reactjs']);
    });
});
