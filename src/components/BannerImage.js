import React, { PropTypes } from 'react';
import {
	StyleSheet,
	Image,
	View
} from 'react-native';
import Title from './Title';

const BannerImage = ({ style, titleText, accentColor, url }) => {
	const imageStyle = {
		backgroundColor: `${accentColor}77` // adds some transparency to the color
	};
	const TitleComponent = <Title style={styles.title}>{titleText}</Title>;

	return (
		<View style={[styles.container, { borderColor: accentColor, marginTop:5 }, style]}>
			{url.length > 0 ? (
					<Image
						style={[styles.image, imageStyle]}
						source={{
            uri: url
          }}
						resizeMode='contain'
					>
						{TitleComponent}
					</Image>
				) : (
					<View
						style={[styles.image, imageStyle]}
					>
						{TitleComponent}
					</View>
				)}
		</View>
	);
};

BannerImage.propTypes = {
	style: View.propTypes.style,
	url: PropTypes.string.isRequired,
	accentColor: PropTypes.string.isRequired,
	titleText: PropTypes.string
};

const styles = StyleSheet.create({
	container: {
		borderBottomWidth: 3,
		borderStyle: 'solid'
	},
	image: {
		height: 100,
		justifyContent: 'flex-end'
	},
	title: {
		padding: 5
	}
});

export default BannerImage;
