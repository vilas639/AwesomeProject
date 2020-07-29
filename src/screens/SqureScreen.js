import React , {useReducer}from "react";
import {Text, View, Button ,StyleSheet} from "react-native";
import ColorScreen from "../Components/ColorCounter";

//create componet 

const COLOR_INCREAMNET =15;

//create reducer function 

const reducer = (state , action) => {
    //state === {red : number , green : number , blue  : number}
    //action == {colorToChnage:  red || blue  || green, amount : 15 || -15}

    switch(action.colorToChnage)
    {
        case 'red':
          return  state.red + action.amount > 255 || state.red + action.amount  < 0 ? state :  {...state,red: state.red + action.amount};
          
        case 'blue':
            return  state.blue + action.amount > 255 || state.blue + action.amount  < 0 ? state :  {...state,blue: state.blue + action.amount};

        case 'green':
            return  state.green + action.amount > 255 || state.green + action.amount  < 0 ? state :  {...state,green: state.green+ action.amount};

        default:
            return state;            
    }

}
const SqureScreen  = () => {

    const[state, dispatch1] = useReducer(reducer,{red:0, green:0, blue : 0});
    const {red, green , blue} = state;

    console.log({red});
    console.log({green});
    console.log({blue});

    return (

        <View>
            <ColorScreen 
            onIncrease = {
                () => {
                dispatch1({colorToChnage:  'red', amount : COLOR_INCREAMNET })
                }
                
            }
            OnDecrease= {
                () => {
                    dispatch1({colorToChnage:  'red', amount : -1 * COLOR_INCREAMNET })
                }
            }
            colorname ='red'></ColorScreen>
            <ColorScreen 
            onIncrease = {
                () => {
                    dispatch1({colorToChnage:  'green', amount : COLOR_INCREAMNET })
                }
            }
            OnDecrease= {
                () => 
                dispatch1({colorToChnage:  'green',  amount : -1 * COLOR_INCREAMNET })
                
            }
            colorname ='green' ></ColorScreen>
            <ColorScreen 
            onIncrease = {
                () => {
                    dispatch1({colorToChnage:  'blue', amount : COLOR_INCREAMNET })
                }
            }
            OnDecrease= {
                () => {
                    dispatch1({colorToChnage:  'blue',  amount : -1 * COLOR_INCREAMNET })
                }
            }
            colorname ='blue'></ColorScreen>

            <View 
            style={{height: 150 , width: 150 , backgroundColor: `rgb(${red},${green},${blue})`}}>
            
            </View>
        </View>
       
    );
}


//create stylesheet

const style2 = StyleSheet.create({

    asdf : {
        height:200,
        width: 200,
    }

});


//expose
export default SqureScreen;