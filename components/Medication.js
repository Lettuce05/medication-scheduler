import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Switch } from 'react-native';
import colors from '../assets/colors/colors';
import fontStyles from '../assets/font_styles/fontStyles';
import Add from '../assets/images/Add';
import medicationData from '../assets/data/medication_data';
import Tablet from '../assets/images/Tablet';
import Capsule from '../assets/images/Capsule';
import Liquid from '../assets/images/Liquid';
import ChevronRight from '../assets/images/ChevronRight';


const Medication = ({navigation}) => {
    const renderItem = ({item}) => {
        const getTypeIcon = (type) => {
            if(type === 'Tablet'){
                return (
                    <Tablet fill={colors.primary_900} height={24} width={24}/>
                )
            } else if(type === 'Liquid'){
                return (
                    <Liquid fill={colors.primary_900} height={24} width={24}/>
                )
            } else {
                return (
                    <Capsule fill={colors.primary_900} height={24} width={24}/>
                ) 
            }
        }

        const getRemainingSupplyColor = (supply_remaining) => {
            if(supply_remaining <= 7){
                return colors.danger_900
            } else if(supply_remaining > 7 && supply_remaining < 14){
                return colors.warning_900
            } else if(supply_remaining >= 14) {
                return colors.success_900
            }
        }

        return (
            <TouchableOpacity style={styles.medicationWrapper} onPress={()=> navigation.navigate('MedicationDetail')}>
                <View style={styles.typeIconContainer}>
                    <View style={styles.typeIconWrapper}>
                        {getTypeIcon(item.type)}
                    </View>
                </View>

                <View style={styles.medicationRightSide}>
                    <View>
                        <Text style={styles.medicationName}>{item.name}</Text>
                        <Text style={styles.medicationDosage}>1 x {item.dosage}{item.units}</Text>
                        <Text style={styles.medicationFrequency}>{item.frequency} at {item.event ? item.event : item.time}</Text>
                        <Text style={[styles.medicationSupply,{color: getRemainingSupplyColor(item.supply_remaining)}]}>{item.supply_remaining} days supply remaining</Text>
                    </View>
                    <View style={styles.medicationButtonWrapper}>
                        <View>
                            <ChevronRight fill={colors.dark_800} height={12} width={12}/>
                        </View>
                    </View>
                </View>

            </TouchableOpacity>
        )
    }

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
                    <FlatList data={medicationData} renderItem={renderItem} keyExtractor={item => item.id} />
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
    },
    medicationList: {
        marginTop: 20
    },
    medicationWrapper: {
        marginHorizontal: 20,
        flexDirection: 'row',
        marginBottom: 20
    },
    typeIconContainer: {
        marginRight: 20
    },
    typeIconWrapper: {
        height: 48,
        width: 48,
        backgroundColor: colors.primary_300,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    medicationRightSide: {
        flexDirection: 'row',
        flex: 1,
        borderBottomColor: colors.dark_300,
        borderBottomWidth: 1
    },
    medicationName: {
        ...fontStyles.Regular,
        color: colors.dark_900
    },
    medicationDosage: {
        ...fontStyles.Small,
        color: colors.dark_700
    },
    medicationFrequency: {
        ...fontStyles.Small,
        color: colors.dark_700
    },
    medicationSupply: {
        ...fontStyles.Small,
        marginBottom: 20
    },
    medicationButtonWrapper: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
})

export default Medication
