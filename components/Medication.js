import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import colors from '../assets/colors/colors';
import fontStyles from '../assets/font_styles/fontStyles';
import Add from '../assets/images/Add';

const Medication = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Medication</Text>
                    <TouchableOpacity style={styles.addButtonWrapper}>
                        <Add height={18} width={18} fill={colors.light_900}/>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.medicationListWrapper}>
                <View style={styles.medicationList}>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary_900
    },
    headerWrapper: {
        marginTop: 40
    },
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center'
    },
    headerText: {
        ...fontStyles.Heading4,
        color: colors.light_900
    },
    addButtonWrapper: {
        height: 48,
        width: 48,
        backgroundColor: colors.light_300,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    medicationListWrapper: {
        backgroundColor: colors.light_900,
        flex: 1,
        marginTop: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    }
})

export default Medication
