import React, {useState} from "react";
import {Text, View, Button, StyleSheet} from "react-native";

//create a compont


const CounterScreen = () => {

  //  let counter =0;
    const [counter,setCounter]=useState(0);

    return (
        <View>
        <Button title="increment"
        onPress = {() => {
            setCounter(counter + 1);
          //console.log(counter++);     
        }}>

        </Button>
        <Button title="decrement" onPress = {() => {
               setCounter(counter - 1);
        //  console.log(counter--);     
        }}>


        </Button>
            <Text>Hi Counter:{counter} </Text>
            
        </View>
    );
};

const style2= StyleSheet.create({

});

export default CounterScreen;

