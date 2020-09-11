import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomePage from "../pages/home/home-page";
import AboutPage from '../pages/about/about-page';
import ContactPage from '../pages/contact/contact-page';
import MenuButton from "./menu-drawer-button";
        
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default class InitRouter extends React.Component {

    render() {        
        return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="HomeRoot">
                    <Drawer.Screen
                        name="HomeRoot"
                        component={eachStackNavigator}
                        initialParams={{initialRoute: 'HomeScreen'}}
                    />
                    <Drawer.Screen
                        name="AboutRoot"
                        component={eachStackNavigator}
                        initialParams={{initialRoute: 'AboutScreen'}}
                    />
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }
}

class eachStackNavigator extends React.Component {

    render() {

        let initialRoute = this.props.route.params.initialRoute;

        return (
            <Stack.Navigator
                screenOptions={ ({navigation}) => ({
                    headerLeft: props => ( <MenuButton navigationDrawer={navigation} {...props} /> )
                })} 
                initialRouteName={initialRoute}
            >
                <Stack.Screen name="HomeScreen" component={HomePage} />
                <Stack.Screen name="AboutScreen" component={AboutPage} />
                <Stack.Screen name="ContactScreen" component={ContactPage} />

            </Stack.Navigator>
        )
    }
}