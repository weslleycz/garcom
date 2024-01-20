import { Link, router } from "expo-router";
import { Box } from "native-base";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";
import { Database } from "../services/db";
import { ScrollView, StyleSheet, Image } from "react-native";

export default function Page() {
  useFocusEffect(
    useCallback(() => {
      (async () => {
        const db = new Database();
        const token = await db.getItem("token");
        if (!token) {
          setTimeout(() => router.replace("/auth"), 1000);
        }
      })();
    }, [])
  );

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      style={styles.scrollView}
    >
      <Image source={require(`../assets/logo-full.png`)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#CE3246",
    flex: 1,
  },
  scrollViewContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
