jest.dontMock('../components/todo.jsx');

describe('todo', () => {
    it('display todo item', () => {
        const React = require('react/addons');
        const TestUtils = React.addons.TestUtils;
        const Todo = require('../components/todo.jsx');
        
        let todo = TestUtils.renderIntoDocument(<Todo onClick={()=>{}} text='test' completed={false}/>);        
        expect(React.findDOMNode(todo).style.textDecoration).toEqual('none');
        
        todo = TestUtils.renderIntoDocument(<Todo onClick={()=>{}} text='test' completed={true}/>);
        expect(React.findDOMNode(todo).style.textDecoration).toEqual('line-through');
    });
});