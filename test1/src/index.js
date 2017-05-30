import React from 'react';
import ReactDOM from 'react-dom';
import { Provider  } from 'react-redux'; // react-redux = Provider

import store from './store'; // store 설정
import App from './components/App'; // App Component
import registerServiceWorker from './registerServiceWorker';

const appElement = document.getElementById('root');

ReactDOM.render(
	<Provider store = {store}>
		<App />
	</Provider>,
	appElement
);
//App 을 Provider 를 통하여 store 로 연결하도록 만들어준다.


registerServiceWorker();
//아직 모르지만 서비스워커라고 해서 추후 스터디 예정