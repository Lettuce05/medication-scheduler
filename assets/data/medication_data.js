export default medicationData = [
    {
        id: '1',
        name: 'Atenolol',
        dosage: 50,
        units: 'mg',
        frequency: 'Every 2 days',
        event: 'Breakfast',
        supply_remaining: 8,
        type: 'Tablet'
    },
    {
        id: '2',
        name: 'Prednisolone',
        dosage: 7.5,
        units: 'mg',
        frequency: 'Daily',
        event: 'Breakfast',
        supply_remaining: 3,
        type: 'Tablet'
    },
    {
        id: '3',
        name: 'Tacrolimus',
        dosage: 5,
        units: 'mg',
        frequency: 'Daily',
        time: '10:00am',
        supply_remaining: 14,
        type: 'Capsule'
    },
    {
        id: '4',
        name: 'Tacrolimus',
        dosage: 5,
        units: 'mg',
        frequency: 'Daily',
        time: '10:00am',
        supply_remaining: 14,
        type: 'Capsule'
    },
    {
        id: '5',
        name: 'Tacrolimus',
        dosage: 1,
        units: 'mg',
        frequency: 'Daily',
        time: '10:00pm',
        supply_remaining: 14,
        type: 'Capsule'
    },
    {
        id: '6',
        name: 'Peptec',
        dosage: 10,
        units: 'mg',
        frequency: 'Every 2 days',
        time: '12:00pm',
        supply_remaining: 6,
        type: 'Liquid'
    },
]

const supplyUnits = ['Capsule', 'Tablet', 'Liquid']
const dosageUnits = ['mg', 'ml']
const events = ['Waking up', 'Breakfast', 'Morning', 'Midday', 'Lunch', 'Afternoon', 'Dinner']
const frequencyScale = ['Daily', ]
