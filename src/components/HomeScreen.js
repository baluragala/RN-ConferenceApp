import React, {Component} from 'react';
import {
	TabBarIOS,
	Text,
	Alert,
	Vibration,
	StatusBar,
	View
} from 'react-native';

import * as sharedStyles from '../styles/shared';

// Set the status bar for iOS to light
StatusBar.setBarStyle('light-content');

export default class HomeScreen extends Component {

	constructor(props) {
		super(props);
		this.state = {
			tab: 'conferenceList'
		};
	}

	showBookmarkAlert() {
		Vibration.vibrate();
		Alert.alert(
			'Coming Soon!',
			'We\'re hard at work on this feature, check back in the near future.',
			[
				{text: 'OK', onPress: () => console.log('User pressed OK')}
			]
		);
	}

	render() {

		const conferenceListIconBase64 = "data:image/png;base64,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";
		const sponsorListIconBase64 = "data:image/png;base64,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";
		return (
			<TabBarIOS
				barTintColor={sharedStyles.COLORS.tabBarBackground}
				tintColor={sharedStyles.COLORS.link}
				translucent={true}
			>
				<TabBarIOS.Item
					title="Conferences"
					icon={{uri: conferenceListIconBase64, scale: 4}}
					selected={this.state.tab === 'conferenceList'}
					onPress={() => this.setState({ tab: 'conferenceList' })}
				>
					<View style={sharedStyles.COMMON_STYLES.titleContainer}>
						<Text style={[sharedStyles.COMMON_STYLES.title]}>Conference List</Text>
					</View>
				</TabBarIOS.Item>
				<TabBarIOS.Item
					title="Sponsors"
					icon={{uri: sponsorListIconBase64, scale: 4}}
					selected={this.state.tab === 'sponsorList'}
					onPress={() => this.setState({ tab: 'sponsorList' })}
				>
					<View style={sharedStyles.COMMON_STYLES.titleContainer}>
						<Text style={[sharedStyles.COMMON_STYLES.title]}>Sponsor List</Text>
					</View>
				</TabBarIOS.Item>
			</TabBarIOS>
		);
	}
}
