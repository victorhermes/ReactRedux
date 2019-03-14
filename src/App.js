import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import TodoList from './TodoList';

const App = () => (
  // O provider vai passar para todos os componentes dentro dele as informações do redux

  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
