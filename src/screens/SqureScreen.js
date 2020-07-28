import React , {useState}from "react";
import {Text, View, Button ,StyleSheet} from "react-native";
import ColorScreen from "../Components/ColorCounter";

//create componet 

const SqureScreen  = () => {

    //pass varible from parent to child
    const [red, setRed]=useState(0);
    const [green , setgree] = useState(0);
    const [blue , setblue] = useState(0);

    console.log(red);
    return (

        <View>
            <ColorScreen 
            onIncrease = {
                () => {
                    setRed(red + 1);
                }
            }
            OnDecrease= {
                () => {
                    setRed(red - 1);
                }
            }
            colorname ='red'></ColorScreen>
            <ColorScreen colorname ='green' ></ColorScreen>
            <ColorScreen colorname ='blue'></ColorScreen>
        </View>
    );
}


//create stylesheet

const style2 = StyleSheet.create({

});


//expose
export default SqureScreen;