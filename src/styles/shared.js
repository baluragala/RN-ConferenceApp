import {StyleSheet} from 'react-native';

export const COLORS = {
	background: '#343336',
	tabBarBackground: '#98FB98',
	text: '#e5dbda',
	headerText: '#fff',
	muted: '#8e8786',
	link: '#8B008B',
	primary: '#FFFFF0',
	secondary: '#98FB98',
	territory: '',
};

export const COMMON_STYLES = StyleSheet.create({
	pageContainer: {
		backgroundColor: COLORS.primary,
		flex: 1,
		marginTop: 0,
		paddingTop: 20,
		marginBottom: 48,
		marginHorizontal: 0,
		paddingHorizontal: 10
	},
	text: {
		color: COLORS.text,
		fontFamily: 'Helvetica Neue'
	},
	titleContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		color: COLORS.link,
		fontSize: 32
	}
});
