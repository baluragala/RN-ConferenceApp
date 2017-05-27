import {StyleSheet} from 'react-native';

export const COLORS = {
	background: '#343336',
	tabBarBackground: '#98FB98',
	text: '#e5dbda',
	headerText: '#fff',
	muted: '#8e8786',
	link: '#8B008B',
	accentGroup: ['#d31d65', '#751c53', '#c248c0', '#7d6e8b', '#bbc6f7']
}

export const COMMON_STYLES = StyleSheet.create({
	pageContainer: {
		backgroundColor: COLORS.background,
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
