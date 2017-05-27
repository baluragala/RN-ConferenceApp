import React, {PropTypes} from 'react';
import {Text} from 'react-native';
import * as sharedStyles from '../styles/shared';

const NormalText = ({children, style, ...rest}) => (
	<Text style={[sharedStyles.COMMON_STYLES.text, style]} {...rest}>
		{children}
	</Text>
);

NormalText.propTypes = {
	style: Text.propTypes.style,
	children: PropTypes.node
};

export default NormalText;
