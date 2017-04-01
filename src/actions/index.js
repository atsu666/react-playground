import * as types from '../constants/ActionTypes';

export const fetchEntries = (url) => ({ type: types.FETCHENTRIES, url: url});

export const setEntries = (entries) => ( { type: types.SETENTRIES, entries: entries });