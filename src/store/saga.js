import {all} from 'redux-saga/effects'
import startGameSaga from './saga/gameInit';

export default function*() {
    yield all([startGameSaga()]);
}