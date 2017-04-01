import { call, put, takeEvery, select } from 'redux-saga/effects'
import * as types from '../constants/ActionTypes';
import { setEntries } from "../actions";
import agent from "superagent";

function fetchJSON(url) {
    return new Promise ((resolve,reject) => {
        agent.get(url).end((err, res) => {
            if(err){
                reject(err)
            }else{
                resolve(res.body)
            }
        }
    )});
}

function* fetchEntries(action) {
  const entries = fetchJSON(action.url);
  yield put(setEntries(entries));   
}

export default function* rootSaga() {
    yield takeEvery(types.FETCHENTRIES, fetchEntries);
}