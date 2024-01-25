import { ScrollView, StyleSheet } from "react-native";
import { Footer } from "../../components/Footer";
import { Slot } from "expo-router";
import { Header } from "../../components/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <ScrollView style={styles.scrollView}>
        <Slot />
      </ScrollView>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#e9e9e9",
  },
});
