import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

//create a compont

const ColorScreen = () => {
    return (
        <View>
            <Text>Color Screen</Text>
            <Button title="Add COlor"></Button>
            <View style={{ height:100, width:100 ,backgroundColor:'#254789' }}></View>
        </View>
    );

};

//create style sheet

const Style1 = StyleSheet.create(
    {
    }
);

//export data

export default ColorScreen;