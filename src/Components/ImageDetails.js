import React from "react";
import {Text,View,StyleSheet,Image} from "react-native";

//create compoknet

const ImageDetails = (props) => {
    console.log(props)

    return (
        <View>
        <Image source={props.imagesrc}></Image>
            <Text> {props.title} </Text>
            <Text >Score :{props.score}</Text>
        </View>
    );
};


//creatr stylshteet

const style1= () => {

};

//create defauly
export default ImageDetails;