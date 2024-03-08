import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import Routes from "./src/routes";
import { myTheme } from "./src/styles";
import { ThemeProvider } from "styled-components/native";
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ThemeProvider theme={myTheme}>
        <Routes />
      </ThemeProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
