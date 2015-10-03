import React, { findDOMNode, Component, PropTypes } from 'react';

export default class AddTodo extends Component {
  render() {
    return (
      <div>
        <div className='mdl-textfield mdl-js-textfield'>
          <input className='mdl-textfield__input' type='text' ref='input' id='todo_input' />
          <label className='mdl-textfield__label' htmlFor='todo_input'>Todo</label>
        </div>
        <div style={{display:'inline', marginLeft:'10px'}}>
          <button 
            className='mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-button--colored'
            onClick={(e) => this.handleClick(e)}
            ref='button'
            >
            <i className='material-icons'>add</i>
          </button>
        </div>
       </div> 
    );
  }

  handleClick(e) {
    const node = findDOMNode(this.refs.input);
    const text = node.value.trim();
    this.props.onAddClick(text);
    node.value = '';
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
};
