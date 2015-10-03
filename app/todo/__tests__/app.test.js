jest.dontMock('../containers/app.jsx');
jest.dontMock('../reducers');
jest.dontMock('../actions');
jest.dontMock('../components/addTodo.jsx');
jest.dontMock('../components/todo.jsx');
jest.dontMock('../components/todoList.jsx');

describe('todo app', () => {
  it('display todo items', () => {
    const React = require('react/addons');
    const TestUtils = React.addons.TestUtils;
    const createStore = require('redux').createStore;
    const Provider = require('react-redux').Provider;
    const App = require('../containers/app.jsx');
    const AddTodo = require('../components/addTodo.jsx');
    const Todo = require('../components/todo.jsx');
    const todoApp = require('../reducers').default;
    const store = createStore(todoApp);

    let app = TestUtils.renderIntoDocument(<Provider store={ store } >
      {() => <App />}
      < /Provider>);

    let addTodo = TestUtils.findRenderedComponentWithType(app, AddTodo);
    let inputNode = React.findDOMNode(addTodo.refs.input);
    let buttonNode = React.findDOMNode(addTodo.refs.button);

    inputNode.value = 'item';
    TestUtils.Simulate.change(inputNode);
    TestUtils.Simulate.click(buttonNode);

    let todoItem = TestUtils.findRenderedComponentWithType(app, Todo);
    let todoNode = React.findDOMNode(todoItem);

    expect(todoItem.props.completed).toEqual(false);
    expect(todoNode.style.textDecoration).toEqual('none');

    TestUtils.Simulate.click(todoNode);

    expect(todoItem.props.completed).toEqual(true);
    expect(todoNode.style.textDecoration).toEqual('line-through');
  });
});

