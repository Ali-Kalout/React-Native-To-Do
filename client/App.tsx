import React from 'react';
import { View } from 'react-native';
import styles from './styles/index';
import { Route, NativeRouter } from 'react-router-native';

import NavBar from './components/layouts/NavBar';
import Home from './pages/Home';
import Auth from './pages/Auth';

const App = () => {
	return (
		<View style={styles.body}>
			<NavBar />

			<View style={styles.container}>
				<NativeRouter>
					<Route exact path="/" component={Auth} />
				</NativeRouter>
			</View>
		</View>
	);
};

export default App;