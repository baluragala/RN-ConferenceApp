import React, {Component, PropTypes} from 'react';
import {
	View,
	TouchableOpacity,
	StyleSheet,
	ActionSheetIOS
} from 'react-native';
import Overview from './Overview';
import NormalText from './NormalText';
import BannerImage from './BannerImage';
import * as sharedStyles from '../styles/shared';

export default class ConferenceListItem extends Component {

	constructor(props) {
		super(props);

		this.onLongPress = this.onLongPress.bind(this);
	}

	onLongPress() {
		ActionSheetIOS.showActionSheetWithOptions({
			options: ['Bookmark', 'Cancel'],
			cancelButtonIndex: 1,
			title: this.props.title
		}, buttonIndex => console.log('Button selected', buttonIndex));
	}

	render() {
		const {
			style,
			imageUrl,
			title,
			author,
			date,
			location,
			description,
			onPress
		} = this.props;
		const accentColor = sharedStyles.COLORS.link;
		return (
			<View style={styles.container}>
				<TouchableOpacity
					style={style}
					onLongPress={this.onLongPress}
					onPress={onPress}
				>
					<View>
						<BannerImage
							url={imageUrl}
							titleText={title}
							accentColor={sharedStyles.COLORS.tabBarBackground}
							style={styles.thumbnail}
						/>
						<View style={styles.content}>
							<Overview
								author={author}
								date={date}
								location={location}
							/>
							<NormalText>
								{description}
							</NormalText>
						</View>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}

ConferenceListItem.propTypes = {
	imageUrl: PropTypes.string,
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	date: PropTypes.instanceOf(Date).isRequired,
	author: PropTypes.string.isRequired,
	location: PropTypes.string,
	index: PropTypes.number.isRequired,
	onPress: PropTypes.func.isRequired,
	style: View.propTypes.style
};

const styles = StyleSheet.create({
	thumbnail: {
		marginBottom: 5
	},
	content: {
		paddingHorizontal: 5
	},
	container: {
		borderWidth: 1,
		backgroundColor: sharedStyles.COLORS.background,
		marginBottom: 4
	}
});
