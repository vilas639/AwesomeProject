import React, {useState,useReducer} from "react";
import {Text, View, Button, StyleSheet} from "react-native";

//create a compont

const reducer = (state , action) => {
// state  === {count : number }
//action === {type : 'increment' || 'decremnt', payload: 1}

switch(action.type)
{
  case 'increase':
    return {...state,count: state.count + action.payload};
  case 'decrease':
    return {...state,count: state.count - action.payload};
   default:
     return state;   
}

}

const CounterScreen = () => {

  //  let counter =0;
   
    
    const [counter,dispatcher]=useReducer(reducer,{count: 0});

    console.log(counter.count);
    return (
        <View>
        <Button title="increment"
        onPress = {() => {
          dispatcher({type : 'increase', payload: 1});
          //console.log(counter++);     
        }}>

        </Button>
        <Button title="decrement" onPress = {() => {
               dispatcher({type : 'decrease', payload: 1});
        //  console.log(counter--);     
        }}>


        </Button>
            <Text>Hi Counter:{counter.count} </Text>
            
        </View>
    );
};

const style2= StyleSheet.create({

});

export default CounterScreen;

