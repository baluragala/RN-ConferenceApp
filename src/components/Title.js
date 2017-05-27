import React, { PropTypes } from 'react';
import {
	StyleSheet,
	Text
} from 'react-native';
import NormalText from './NormalText';
import * as sharedStyles from '../styles/shared';

const Title = ({ style, children }) => (
	<NormalText style={[styles.title, style]}>
		{children}
	</NormalText>
);

Title.propTypes = {
	style: Text.propTypes.style,
	children: PropTypes.node
};

const styles = StyleSheet.create({
	title: {
		fontFamily: 'HelveticaNeue-CondensedBold',
		fontSize: 18,
		color: sharedStyles.COLORS.headerText,
		backgroundColor: `${sharedStyles.COLORS.muted}55`
	}
});

export default Title;
