import { classNames } from './classNames';

describe('classNames', () => {
    it(' should add class names', () => {
        expect(classNames('cls1'))
            .toEqual('cls1');
    });
    it('should add additional classes to class names', () => {
        expect(classNames('cls1', {}, ['cls2']))
            .toEqual('cls1 cls2');
    });
    it('should add class names with one mods', () => {
        expect(
            classNames('cls1', { hovered: true, scrollable: false }, ['cls2']),
        )
            .toEqual('cls1 cls2 hovered');
    });
    it('should add class names only from additional', () => {
        expect(classNames('cls1', { scrollable: undefined }, ['cls2']))
            .toEqual('cls1 cls2');
    });
});
