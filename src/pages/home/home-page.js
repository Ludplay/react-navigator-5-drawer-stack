import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import myColors from "../../style/colors";

export default class HomePage extends Component {
    constructor() {
        super();
    }

    render() {        
        return (
            <View style={styles.body}>
                <View style={styles.verticalMarged}>
                    <Text style={styles.introductionText}>Check our Home Page out!</Text>                
                    <Text style={styles.smallText}>You are on Home Page.</Text>
                </View>

                <View style={{alignItems: 'center'}}>
                    <View style={{width: 200}}>
                        <Button 
                            title="About us"
                            onPress={() => this.props.navigation.navigate('AboutScreen')}
                            color={myColors.black}
                        />
                    </View>
                    <View style={[styles.verticalMarged, {width: 200}]}>
                        <Button
                            title="Contact"
                            onPress={() => this.props.navigation.navigate('ContactScreen')}
                            color={myColors.black}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: myColors.darkTurquoise,
        padding: 5,
    },
    introductionText: {        
        fontSize: 29,
        color: myColors.generalText,
    },
    smallText: {        
        fontSize: 20,
        color: myColors.generalText,
    },
    verticalMarged: {
        marginTop: 20,
        marginBottom: 20,
    }
});
