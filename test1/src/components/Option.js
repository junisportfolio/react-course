import React from 'react';
import { connect } from 'react-redux';
import { setDiff } from '../actions';

class Option extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			diff: '1'
		}
		// 옵션값의 기본값은 1


		this.onChangeDiff = this.onChangeDiff.bind(this);
		// onChangeDiff 의 this 를 현제 Option class 로 바인딩 한다
	}

	render() {
		return (
			<div>
				<input type="text" value={ this.state.diff } onChange={this.onChangeDiff}></input>
			</div>
		);
	}
	// 인풋의 값은 this.state.diff 변화가 일어나면 onChangeDiff 를 실행한다.

	onChangeDiff(e) {
		// console.log(`e.target.value : ${e.target}`);

		if(isNaN(e.target.value))
			return;
		// input 의 값이 숫자가 아니라면 아무것도 리턴하지 않는다.

		this.setState({ diff: e.target.value });
		//스테이트를 변경한다

		if(e.target.value=='') {
			this.setState({ diff: '0' });
		}
		// 값이 없을경우 0을 할당한다.

		this.props.onUpdateDiff(parseInt(e.target.value));

	}

}

let mapDispatchToProps = (dispatch) => {
	return {
		onUpdateDiff: (value) => dispatch(setDiff(value))
	};
}

Option = connect(undefined, mapDispatchToProps)(Option);
// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])

export default Option;