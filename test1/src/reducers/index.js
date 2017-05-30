/*
 * Reducer
 */
import { INCREMENT, DECREMENT, SET_DIFF } from '../actions'; // actions 를 불러온다
import { combineReducers } from 'redux'; // redux 의 combineReducers 를 불러온다

const counterInitialState = {
	value: 0,
	diff: 1,
};
// 기본값을 설정한다.

const counter = (state = counterInitialState, action) => {
	// state 와 action 을 인자로 받는다
	// 초기값으로 { value: 0, diff: 1 } 을 설정한다.

	switch(action.type) {
		// action 의 type 에 따라 분기 처리를 해준다
		case INCREMENT:
			// 증가타입의 경우
			return Object.assign({}, state, {
				value: state.value + state.diff
			});
			// 오브젝트를 리턴한다, 타입을 오브젝트로 할당한다, 초기값을 할당한다, 변경 될 값을 설정해준다.
		case DECREMENT:
			return Object.assign({}, state, {
				value: state.value - state.diff
			});
		case SET_DIFF:
			return Object.assign({}, state, {
				diff: action.diff
			});
		default:
			return state; //초기값을 반환한다
	}
};


const extra = (state = { value: 'this_is_extra_reducer' }, action) => {
	// 초기 값으로 { value: 'this_is_extra_reducer' }
	switch(action.type) {
		default:
			return state;
	}
}

const counterApp = combineReducers({
	counter,
	extra
});

export default counterApp;
// counterApp 의 이름으로 에 관련된 Reducer 를 결합 후 반환한다.