import React, { useRef } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import PhoneInput from "react-native-phone-number-input";

const PhoneInputComponent = (props) => {
	const { phoneInputFormValue } = props

	return(
		<View style={styles.wrapper}>
			<PhoneInput
				value={phoneInputFormValue.value}
				defaultCode="CA"
				layout="first"
				onChangeText={phoneInputFormValue.onChange}
				withDarkTheme
				withShadow
				countryPickerProps={{withAlphaFilter:true}}
				autoFocus
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}
})

export default PhoneInputComponent
