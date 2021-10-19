import React, { useEffect } from 'react';
import { View } from 'react-native';
import styles from './styles/index';

import { Provider } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store';
import configStore from './redux/store';
import { getUser } from './redux/actions/auth';

import NavBar from './components/layouts/NavBar';
import Auth from './screens/Auth';
import BottomNav from './components/layouts/BottomNav';

const store = configStore();

const App = () => {
	const dispatch = useDispatch();
	const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

	useEffect(() => { dispatch(getUser() as any) }, []);

	return (
		<View style={styles.body}>
			<NavBar />

			{(isAuthenticated && user) ? (
				<BottomNav />
			) : (
				<View style={styles.container}>
					<Auth />
				</View>
			)}
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