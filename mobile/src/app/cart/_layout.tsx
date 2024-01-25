import { Slot } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";
import { Footer } from "../../components/Footer";

export default function Layout() {
  return (
    <>
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
