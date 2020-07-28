import React ,{useState}from "react";
import { Text, View, StyleSheet, Button ,FlatList} from "react-native";

//create a compont

const ColorScreen = () => {

    const [colorthing,setcolorthing]=useState([]);
    console.log(colorthing);

    return (
        <View>
            <Text>Color Screen</Text>
            <Button title="Add COlor"
            onPress={
                () => {
             setcolorthing([...colorthing,randomcolor()]);
                }
            }></Button>
           
         


          <FlatList
          keyExtractor={item => item}
          data={colorthing}
          renderItem=  {
              ({item}) => {
            return (
                <View style={{ height:100, width:100 ,backgroundColor:item }}></View>
            )
              }
          }
          >

          </FlatList>
        </View>
    );

};

//create style sheet

const Style1 = StyleSheet.create(
    {
    }
);

const randomcolor = () => {

    const min = 1;
    const max = 900000;
    var random = Math.floor(min + (Math.random() * (max - min)));

    

  
    var ColorCode = '#' + (Math.floor(100000 + Math.random() * 900000)) +'';

    console.log({ColorCode});
  

     return  ColorCode;
}


//export data

export default ColorScreen;