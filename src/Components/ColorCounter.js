import React ,{ useReducer}from "react";
import {Text, View, Button ,StyleSheet} from "react-native";

//create componet 

const ColorScreen  = ({colorname, onIncrease ,OnDecrease}) => {

    //console.log(colorname);



//console.log(commonHtml); 
    return (

        <View>
            <Text> {colorname} </Text>
            <Button 
            onPress = {
                () => {
                    onIncrease()
                }
            }
            title={`Increate ${colorname}`}>

            </Button>
            <Button 
            onPress = {
                () => {
                    OnDecrease()
                }
            }
            title={`Decrease ${colorname}`}>

            </Button>
        </View>
    );
}


//create stylesheet

const style2 = StyleSheet.create({

});


//expose
export default ColorScreen;