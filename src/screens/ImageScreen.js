import React from "react";
import {Text,View,StyleSheet} from "react-native";
import ImageDetails from "../Components/ImageDetails";

//create compoknet

const Imagescreen1 = () => {

    return (
        <View>
           <ImageDetails title="forest" imagesrc={require('../../assets/forest.jpg')} score={9}></ImageDetails>
           <ImageDetails title="beach" imagesrc={require('../../assets/beach.jpg')} score={10}></ImageDetails>
           <ImageDetails title="mountent" imagesrc={require('../../assets/mountain.jpg')} score={8}></ImageDetails>
          
        </View>
    );
};


//creatr stylshteet

const style1= () => {

};

//create defauly
export default Imagescreen1;