import { Slot } from "expo-router";
import { ScrollView,StyleSheet } from "react-native";
import { HeaderAuth } from "../../components/HeaderAuth";

export default function Layout() {
  return <>
  <HeaderAuth />
  <ScrollView style={styles.scrollView}>
  <Slot />
  </ScrollView>
  </>;
}

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: "#ffffff", // Defina a cor de fundo desejada
    },
  });