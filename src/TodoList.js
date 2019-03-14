import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// connect do react-redux tem o papel de conectar o componente com algum reducer

import { connect } from 'react-redux';

// o bindActionCreators vai aplicar a cada action, um dispatch
import { bindActionCreators } from 'redux';
import * as TodoActions from './store/actions/todo';

const TodoList = ({ todos, addTodo, removeTodo }) => (
  <Fragment>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {' '}
          {todo.text}
          {' '}
          <button type="submit" onClick={() => removeTodo(todo.id)}>
            X
          </button>
        </li>
      ))}
    </ul>
    <button type="submit" onClick={() => addTodo('Olha só')}>
      Adicionar
    </button>
  </Fragment>
);

TodoList.propTypes = {
  removeTodo: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    }),
  ).isRequired,
};

// mapStateToProps transformará o state do reducer em uma prop para consumir no componente
// o state do mapStateToProps representa todas as informações contidas no reducer
// o state.todos é o reducer de function todos

const mapStateToProps = state => ({
  todos: state.todos,
});

// transforma as actions em props
// tudo o que tem no => dispatch é o que os reducers irão ouvir
// o bindActionCreators vai aplicar um dispatch a cada action. O TodoActions são as actions
const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
