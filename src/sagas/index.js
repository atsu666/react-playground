import { call, put, takeEvery, select } from 'redux-saga/effects'
import * as types from '../constants/ActionTypes';
import { setEntries } from "../actions";

function fetchJSON(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                setTimeout(() => {
                    resolve(JSON.parse(xhr.response));
                }, 3000);
            } else {
                reject(new Error(xhr.statusText));
            } 
        };
        xhr.onerror = () => {
            reject(new Error(xhr.statusText));
        };
        xhr.send(null);
    });
}

function* fetchEntries(action) {
  const entries = yield fetchJSON(action.url);
    setTimeout(function(){

    }, 1000)
  yield put(setEntries(entries));   
}

export default function* rootSaga() {
    yield takeEvery(types.FETCHENTRIES, fetchEntries);
}