import * as Notifications from "expo-notifications";
import { router, useFocusEffect } from "expo-router";
import { useCallback } from "react";
import { Image, ScrollView, StyleSheet } from "react-native";
import { Database } from "../services/db";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function Page() {
  useFocusEffect(
    useCallback(() => {
      (async () => {
        const db = new Database();
        const token = await db.getItem("token");
        if (!token) {
          setTimeout(() => router.replace("/auth"), 1000);
        } else {
          setTimeout(() => router.replace("/home"), 1000);
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
