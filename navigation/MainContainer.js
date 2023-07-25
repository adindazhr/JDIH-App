import * as React from 'react';
import {View, Text} from 'react-native';

import { NavigationContainer, NavigationContainerRefContext } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

//screens
import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';
import BookmarkScreen from './screens/BookmarkScreen';

//Screen names
const homeName = 'Home';
const categoryName = 'Category';
const bookmarkName = 'Bookmark';

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                activeColor="#fff"
                inactiveColor="#fff"
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline';
                        }
                        else if (rn === categoryName) {
                            iconName = focused ? 'grid' : 'grid-outline';
                        }
                        else if (rn === bookmarkName) {
                            iconName = focused ? 'bookmark' : 'bookmark-outline';
                        }

                        return <Icon name={iconName} size={size} color={color} />
                    },
                    headerShown: false,
                    tabBarStyle: {
                        height: 60,
                        backgroundColor: '#3F1871',
                        borderTopLeftRadius : 20,
                        borderTopRightRadius: 20,
                                            
                    },
                    tabBarShowLabel: false,
                })}>

                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={categoryName} component={CategoryScreen} />
                <Tab.Screen name={bookmarkName} component={BookmarkScreen} />
                
            </Tab.Navigator>
        </NavigationContainer>
    )
}