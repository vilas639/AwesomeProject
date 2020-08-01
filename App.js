import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";
import Imagescreen1 from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import  ColorScreen from "./src/screens/ColorScreen";
import  SqureScreen from "./src/screens/SqureScreen";
import Textscreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Componentmy: ComponentScreen,
    List : ListScreen,
    image1 : Imagescreen1,
    counter1 : CounterScreen,
    color1 : ColorScreen,
    squre : SqureScreen,
    textscreen1 : Textscreen,
    boxman: BoxScreen
    
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);