import React from 'react';
import {View, StyleSheet,Text} from 'react-native';

const SecondScreen = ({route}) => {
    return (
        <View style={{flexDirection:'column'}}>
            <Text>{route.params.paramKey.gender}</Text>
            <Text>{route.params.paramKey.age}</Text>
            <Text>{route.params.paramKey.description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default SecondScreen;
