import { call, put, takeEvery, select } from 'redux-saga/effects'
import * as types from '../constants/ActionTypes';
import { setEntries } from "../actions";

function fetchJSON(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(JSON.parse(xhr.response));
            } else {
                reject(new Error(xhr.statusText));
            } };
        xhr.onerror = () => {
            reject(new Error(xhr.statusText));
        };
        xhr.send(null);
    });
}

function* fetchEntries(action) {
  const entries = yield fetchJSON(action.url);
  yield put(setEntries(entries));   
}

export default function* rootSaga() {
    yield takeEvery(types.FETCHENTRIES, fetchEntries);
}