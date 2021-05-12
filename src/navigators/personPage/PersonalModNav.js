import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import rankScreen from '../../screens/rank/Rank';
import PersonPageScreen from '../../screens/profile/Profile';
import History from '../../screens/history/History';

const ModalNavigator = createStackNavigator();

const PersonalModNav = () => {
    const globalHeaderStyle = {
        headerStyle: {backgroundColor: 'white'},
        headerTitleStyle: {color: '#707070'},
        headerTintColor: '#707070',
    };

    return (
        <ModalNavigator.Navigator
            screenOptions={globalHeaderStyle}
            transparent={true}
        >
            <ModalNavigator.Screen
                name='Profile'
                component={PersonPageScreen}
            >
            </ModalNavigator.Screen>
            <ModalNavigator.Screen
                name='RankView'
                component={rankScreen}
            >
            </ModalNavigator.Screen>
            <ModalNavigator.Screen
                name='History'
                component={History}
            >
            </ModalNavigator.Screen>
        </ModalNavigator.Navigator>
    );
};

export default PersonalModNav;
