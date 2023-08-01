import * as React from 'react';
import {View, Text} from 'react-native';

import { NavigationContainer, NavigationContainerRefContext } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

const RootStack = createStackNavigator();

//screens
import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';
import BookmarkScreen from './screens/BookmarkScreen';
import MetadataScreen from './screens/MetadataScreen';
import SearchScreen from './screens/SearchScreen';

//Screen names
const homeName = 'Home';
const categoryName = 'Category';
const bookmarkName = 'Bookmark';
const metadataName = 'Metadata';
const searchName = 'Search';

const Tab = createBottomTabNavigator();

const TabBar = () => {
    return (
        <Tab.Navigator
                initialRouteName={homeName}
                activeColor="white"
                inactiveColor="white"
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
    )
}

export default function MainContainer(){
    
    return(
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen name={homeName} component={TabBar} />
                <RootStack.Screen name={categoryName} component={CategoryScreen} />
                <RootStack.Screen name={bookmarkName} component={BookmarkScreen} />
                <RootStack.Screen name={metadataName} component={MetadataScreen} />
                <RootStack.Screen name={searchName} component={SearchScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}