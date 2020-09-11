import React from "react";
import { DrawerActions } from '@react-navigation/native';
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class MenuButton extends React.Component {

    render() {

        let navigationDrawer = this.props.navigationDrawer;

        if(!this.props.canGoBack)
        {
            return ( 
                <TouchableOpacity>
                    <Icon 
                        name="menu" 
                        size={43} 
                        color="#999" 
                        onPress={ () => navigationDrawer.dispatch(DrawerActions.openDrawer()) } 
                    /> 
                </TouchableOpacity>
            )
        }
        else
        {
            return ( 
                <TouchableOpacity>
                    <Icon 
                        name="arrow-back" 
                        size={43} 
                        color="#999" 
                        onPress={ () => this.props.navigationDrawer.pop() } 
                    /> 
                </TouchableOpacity>
            )
        }
    }
}