import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
	render() {
		return (
			<h1>VALUE: { this.props.value }</h1>
		);
	}
}
// 컴포넌트를 통해 받지 않았지만 this.props.value 로 접근


let mapStateToProps = (state) => {
	return {
		value: state.counter.test
	};
}
// redux 에 설정한 값과 매칭을 시켜준다

Counter = connect(mapStateToProps)(Counter);
// Counter 에 할당한다 = 연결한다 mapStateToProps 를 카운터와

export default Counter;