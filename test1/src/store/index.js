import { createStore } from 'redux';  // redux = store creater
import counterApp from '../reducers'; // reducer = store로 생성 할 리듀서
const store = createStore(counterApp); // counter를 스토어로 생성

export default store;