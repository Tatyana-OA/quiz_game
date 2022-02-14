import {take, fork} from 'redux-saga/effects';
import {startGame} from '../slices/gameInit';


function* fetchQuestionsSaga() {
    console.log('Fetching Questions')
}

export default function* startGameSaga() {
    while(true) {
        // wait for a specific action, then fork and fetch specific data 
        yield take (startGame.type)
        yield fork(fetchQuestionsSaga)
    }
}