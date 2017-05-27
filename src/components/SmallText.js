import React, {PropTypes} from 'react';
import {
	StyleSheet,
	Text
} from 'react-native';
import NormalText from './NormalText';

const SmallText = ({children, style, ...rest}) => (
	<NormalText style={[styles.small, style]} {...rest}>
		{children}
	</NormalText>
);

SmallText.propTypes = {
	children: PropTypes.node,
	style: Text.propTypes.style
};

const styles = StyleSheet.create({
	small: {
		fontSize: 11
	}
});

export default SmallText;
