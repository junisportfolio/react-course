/*
 * Action
 */
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_DIFF = 'SET_DIFF';
// INCREMENT 는 'INCREMENT' 라고 정의하고 내보낸다

export function increment() {
	return {
		type: INCREMENT
	};
}
// 노출한다 함수를 인크리멘트 를 반환한다 타입 : 인크리멘트

export function decrement() {
	return {
		type: DECREMENT
	};
}

export function setDiff(value) {
	return {
		type: SET_DIFF,
		diff: value
	};
}

// INCREMENT = INCREMENT 이며, increment 의 리턴 타입은 INCREMENT이다.
