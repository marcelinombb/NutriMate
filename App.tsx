import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import  React  from "react";
import Routes from './src/routes';

export default function App() {
  return (
   <NavigationContainer>
      <StatusBar backgroundColor="#7265E3" barStyle="light-content"/>
      <Routes/>
   </NavigationContainer>
  );
}
