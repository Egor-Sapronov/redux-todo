jest.dontMock('../reducers');
jest.dontMock('../actions');

describe('add', () => {
    it('return todos array with new item', () => {
        const todos = require('../reducers').todos;
        const actions = require('../actions');

        const firstState = todos([], { type: actions.ADD_TODO, text: 'first' });
        expect(firstState.length).toEqual(1);

        const secondState = todos(firstState, { type: actions.ADD_TODO, text: 'second' });
        expect(firstState.length).toEqual(1); // исходный массив не изменился
        expect(secondState.length).toEqual(2);
    });
});

describe('complete', () => {
    it('return todos array with completed item by index', () => {
        const todos = require('../reducers').todos;
        const actions = require('../actions');

        const firstState = todos([], { type: actions.ADD_TODO, text: 'first' });
        expect(firstState.length).toEqual(1);

        const secondState = todos(firstState, { type: actions.COMPLETE_TODO, index: 0 });
        expect(firstState[0].completed).not.toEqual(secondState[0].completed); // исходный массив не изменился
        expect(secondState[0].completed).toBeTruthy();
    });
});