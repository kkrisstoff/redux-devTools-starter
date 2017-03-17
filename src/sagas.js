import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'

// worker Saga
function* fetchUser(action) {
  console.log("action --> ", action);
  try {
    const user = yield call(fetch(`https://www.reddit.com/r/${action.payload.post}.json`).then((data) => {
      console.log(">>>", data);
    }), action.payload.post);
    yield put({type: "USER_FETCH_SUCCEEDED", user: user});
  } catch (e) {
    yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga;