import React, {PropTypes} from 'react';
import {
	StyleSheet,
	View
} from 'react-native';
import SmallText from './SmallText';
import * as sharedStyles from '../styles/shared';

const Overview = ({date, author, location}) => (
	<View>
		<View style={styles.row}>
			<SmallText>
				{date.toLocaleDateString()}
			</SmallText>
			<SmallText>
				{author}
			</SmallText>
		</View>

		{location ? (
				<View style={styles.row}>
					<SmallText style={styles.location}>
						{location}
					</SmallText>
				</View>
			) : null}
	</View>
);

Overview.propTypes = {
	date: PropTypes.instanceOf(Date).isRequired,
	author: PropTypes.string.isRequired,
	location: PropTypes.string
};

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 5
	},
	location: {
		color: sharedStyles.COLORS.tabBarBackground
	}
});

export default Overview;
