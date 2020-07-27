import React from "react";
import { Text,StyleSheet,Button } from "react-native";


const  ComponentScreen= () =>
{
    return <Text style={styles.text}>Hi Three</Text>
};

const styles = StyleSheet.create({
    text: {
      fontSize: 15
    }
  });
  

export default ComponentScreen;

