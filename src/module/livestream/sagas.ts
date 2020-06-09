import { call, put, takeLatest } from "redux-saga/effects";
import { fetchLivestreamsEndpoint } from "@/service/endpoints.js";
import { fetchLivestreams } from "./actions";
import { liveStreamsBackToFrontMapper } from "./mappers";
import data from "./data.json";
import "@babel/polyfill";

export function* fetchLivestreamsSaga() {
  try {
    const rawLivestreams = yield call(fetchLivestreamsEndpoint);
    // const rawLivestreams = data;
    const livestreams = liveStreamsBackToFrontMapper(rawLivestreams);
    yield put(fetchLivestreams.success({ livestreams }));
  } catch (error) {
    yield put(fetchLivestreams.failure({ error }));
  }
}

export default function* livestreamSaga() {
  yield takeLatest(fetchLivestreams.request, fetchLivestreamsSaga);
}
