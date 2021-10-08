import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	body: {
		backgroundColor: '#F6F6F6',
		width: '100%',
		height: '100%',
		overflow: 'hidden'
	},
	title: {
		fontWeight: 'bold',
		fontSize: 25
	},
	input: {
		marginTop: 7
	},
	button: {
		marginTop: 20
	},
	error: {
		marginTop: 15,
		color: 'red',
		fontWeight: '500'
	},
	container: {
		flex: 1,
		marginTop: 40,
		marginLeft: 20,
		marginRight: 20
	}
});

export default styles;