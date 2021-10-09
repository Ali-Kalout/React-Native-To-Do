import React, { useEffect } from 'react';
import { View } from 'react-native';
import styles from './styles/index';
import { Route, NativeRouter, Redirect, useHistory } from 'react-router-native';

import { Provider } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store';
import configStore from './redux/store';
import { getUser } from './redux/actions/auth';

import NavBar from './components/layouts/NavBar';
import Home from './pages/Home';
import Auth from './pages/Auth';
import BottomNav from './components/layouts/BottomNav';

const store = configStore();

const App = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { isAuthenticated } = useSelector((state: RootState) => state.auth);

	useEffect(() => dispatch(getUser() as any), []);

	return (
		<View style={styles.body}>
			<NavBar />

			<View style={styles.container}>
				<NativeRouter>
					<Route exact path="/" component={() => !isAuthenticated ? <Auth /> : <Redirect to="/home" />} />
					<Route exact path="/home" component={() => isAuthenticated ? <Home /> : <Redirect to="/" />} />
				</NativeRouter>
			</View>

			{isAuthenticated && <BottomNav />}
		</View>
	);
};

// just to get access to store in the App component
const MainApp = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

export default MainApp;