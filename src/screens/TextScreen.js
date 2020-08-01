import React , {useState}from "react";
import {Text, View, StyleSheet,TextInput} from "react-native";

//create a component
const Textscreen = () => {

    const [chnagevalue , setChangevalue] = useState("");
    return  (
    <View>
    <TextInput style={style.vimal}
        autoCapitalize='none'
        autoCorrect={false}
        value = {chnagevalue}
        onChangeText = {newVal =>  setChangevalue(newVal)}
        ></TextInput>
        {chnagevalue.length < 4 ? <Text>Mult be 4 Charchter</Text>: <Text>Your Nmae is  : {chnagevalue}</Text> }
        
        </View>
    );
}

//creat a stylesheet

const style =StyleSheet.create(
    {
      vimal : {
        margin: 15,
        borderColor: 'black',
        borderWidth : 1
      }
    }
);

//export 
export default Textscreen;