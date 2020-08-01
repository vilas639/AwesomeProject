import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";


const HomeScreen = (props) => {

  console.log(props);

  return (
    <View>
      <Button title="Go TO component"
        onPress={
          () => {
            console.log("you go to componeet");
            props.navigation.navigate('Componentmy');
          }

        }></Button>

      <TouchableOpacity onPress={() => {
        console.log("you go to list");
        props.navigation.navigate('List');
      }}>
        <Text>Go TO List</Text>
      </TouchableOpacity>


      <Button title="Go TO ImageScreen"
        onPress={
          () => {
            console.log("you go to ImageScreen");
            props.navigation.navigate('image1');
          }

        }></Button>

      <Button styles={styles.asdf} title="Counter Screen"
        onPress={
          () => {
            console.log("you go to Coun terScreen");
            props.navigation.navigate('counter1');
          }

        }></Button>

<Button styles={styles.asdf} title="Color Screen"
        onPress={
          () => {
            console.log("you go to Color ");
            props.navigation.navigate('color1');
          }

        }></Button>


<Button styles={styles.asdf} title="Squre Screen"
        onPress={
          () => {
            console.log("you go to Squre ");
            props.navigation.navigate('squre');
          }

        }></Button>


<Button styles={styles.asdf} title="Text Screen"
        onPress={
          () => {
            console.log("you go to textscreen1 ");
            props.navigation.navigate('textscreen1');
          }

        }></Button>

<Button  title="boxman Screen"
        onPress={
          () => {
            console.log("you go to boxman ");
            props.navigation.navigate('boxman');
          }

        }></Button>


    </View>
  );


};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  asdf :
  {
    marginVertical:10
  }
});

export default HomeScreen;
