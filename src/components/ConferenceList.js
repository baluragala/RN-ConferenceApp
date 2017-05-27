import React, { PropTypes, Component } from 'react';
import {
	ListView,
	StyleSheet,
	View,
	Modal,
	TouchableOpacity,
	WebView
} from 'react-native';
import ConferenceListItem from './ConferenceListItem';
import SmallText from './SmallText';
import * as sharedStyles from '../styles/shared';

export default class ConferenceList extends Component {

	constructor(props) {
		super(props);
		this.ds = new ListView.DataSource({
			rowHasChanged: (row1, row2) => row1.title !== row2.title
		});
		this.state = {
			dataSource: this.ds.cloneWithRows(props.conferences),
			modalVisible: false
		};

		this.renderRow = this.renderRow.bind(this);
		this.onModalClose = this.onModalClose.bind(this);
		this.onModalOpen = this.onModalOpen.bind(this);
	}

	onModalClose() {
		this.setState({
			modalVisible: false,
			modalUrl: undefined
		});
	}

	onModalOpen(url) {
		this.setState({
			modalVisible: true,
			modalUrl: url
		});
	}

	renderModal() {
		return (
			<Modal
				animationType="slide"
				visible={this.state.modalVisible}
				onRequestClose={this.onModalClose}
			>
				<View style={styles.modalContent}>
					<TouchableOpacity
						onPress={this.onModalClose}
						style={styles.closeButton}
					>
						<SmallText>Close</SmallText>
					</TouchableOpacity>
					<WebView
						scalesPageToFit
						source={{ uri: this.state.modalUrl }}
					/>
				</View>
			</Modal>
		);
	}

	renderRow(rowData, ...rest) {
		const index = parseInt(rest[1], 10);
		return (
			<ConferenceListItem
				onPress={() => this.onModalOpen(rowData.url)}
				style={styles.ConferenceListItem}
				index={index}
				{...rowData}
			/>
		);
	}

	render() {
		return (
			<View style={sharedStyles.COMMON_STYLES.pageContainer}>
				<ListView
					enableEmptySections
					dataSource={this.state.dataSource}
					renderRow={this.renderRow}
					style={this.props.listStyles}
				/>
				{this.renderModal()}
			</View>
		);
	}

}

ConferenceList.propTypes = {
	news: PropTypes.arrayOf(PropTypes.object),
	listStyles: View.propTypes.style
};

ConferenceList.defaultProps = {
	conferences: [
		{
			title: 'React London 2017',
			imageUrl: 'https://facebook.github.io/react/img/logo_og.png',
			description: 'React conference for london developers',
			date: new Date(),
			author: 'Facebook',
			location: 'QEII Centre, London',
			url: 'https://react.london/'
		},
		{
			title: 'REACT AMSTERDAM 2017',
			imageUrl: 'https://facebook.github.io/react/img/logo_og.png',
			description: 'React conference for london developers',
			date: new Date(),
			author: 'Facebook',
			location: 'The Netherlands',
			url: 'https://react.amsterdam/'
		},
		{
			title: 'NG CONF 2017',
			imageUrl: 'https://www.ng-conf.org/wp-content/uploads/2016/09/logo-white.png',
			description: 'The worlds original angular conference',
			date: new Date(),
			author: 'Google',
			location: 'Saltlake City, UT',
			url: 'https://www.ng-conf.org/'
		},

	]
};

const styles = StyleSheet.create({
	ConferenceListItem: {
		marginBottom: 20
	},
	modalContent: {
		flex: 1,
		justifyContent: 'center',
		paddingTop: 20,
		backgroundColor: sharedStyles.COLORS.background
	},
	closeButton: {
		paddingVertical: 5,
		paddingHorizontal: 10,
		flexDirection: 'row'
	}
});
