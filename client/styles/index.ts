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
	caption: {
		marginTop: -1,
		marginLeft: 'auto'
	},
	container: {
		flex: 1,
		marginTop: 20,
		marginLeft: 20,
		marginRight: 20
	},
	dateBtnContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	listItem: {
		backgroundColor: '#e5e5e5',
		padding: 10,
		borderRadius: 10,
		marginBottom: 10
	},
	listItemCompleted: {
		backgroundColor: '#c8c8c8',
		padding: 10,
		borderRadius: 10,
		marginBottom: 10
	},
	listTextCompleted: {
		textDecorationLine: 'line-through',
		textDecorationStyle: 'solid',
		textDecorationColor: '#fff'
	}
});

export default styles;