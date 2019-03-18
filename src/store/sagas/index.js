// O redux-saga é um middleware que vai entre a action e o reducer
// Action, saga e reducer
// É no sagas que fazer requisições a api
// Dentro do array all ficarão os listeners, que são funções do saga para ouvir as actions
// Além disso o array envia algumas informações para os reducers
// o All é como se fosse o combineReducers, só que pra sagas

import { all, takeLatest } from 'redux-saga/effects';
import { addFavorite } from './favorites';

export default function* rootSaga() {
  yield all([takeLatest('ADD_FAVORITE_REQUEST', addFavorite)]);
}
