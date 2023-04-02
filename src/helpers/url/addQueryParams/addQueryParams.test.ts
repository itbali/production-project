import { getQueryParams } from './addQueryParams';

describe('getQueryParams', () => {
    it('should return empty string', () => {
        expect(getQueryParams({})).toBe('');
    });
    it('should return query params', () => {
        expect(getQueryParams({ a: '1', b: '2' })).toBe('a=1&b=2');
    });
    it('should return query params with undefined value', () => {
        expect(getQueryParams({ a: '1', b: undefined })).toBe('a=1');
    });
});
