import { Feather, Foundation, Ionicons } from "@expo/vector-icons";
import { router, usePathname } from "expo-router";
import { Box, Button, HStack, Text } from "native-base";
import { Audio } from "expo-av";
import React, { useEffect, useState } from "react";
import * as Haptics from "expo-haptics";

export const Footer = () => {
  const [sound, setSound] = useState<any>();
  const playSound = async () => {
    Haptics.selectionAsync();
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/Sino.mp3")
    );
    setSound(sound);
    await sound.playAsync();
  };
  const pathname = usePathname();
  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  return (
    <>
      <Box
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 2,
        }}
      >
        <Box>
          <HStack space={3} justifyContent="space-evenly">
            <Box>
              <Button
                leftIcon={
                  <Foundation
                    name="clipboard-notes"
                    size={24}
                    color={pathname === "/home" ? "#CE3246" : "#B1AFAF"}
                  />
                }
                variant="unstyled"
                onPress={() => router.replace("/home")}
                size={"lg"}
              >
                <Text
                  color={pathname === "/home" ? "#CE3246" : "#B1AFAF"}
                  fontSize="md"
                >
                  Cardápio
                </Text>
              </Button>
            </Box>
            <Button
              style={{
                width: 70,
                height: 70,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 50,
                position: "relative",
                top: -25,
              }}
              onPress={playSound}
            >
              <Ionicons
                name="ios-notifications-outline"
                size={30}
                color="white"
              />
            </Button>
            <Box>
              <Button
                variant="unstyled"
                leftIcon={
                  <Feather
                    name="shopping-cart"
                    size={24}
                    color={pathname === "/cart" ? "#CE3246" : "#B1AFAF"}
                  />
                }
                onPress={() => router.replace("/cart")}
                size={"lg"}
              >
                <Text
                  color={pathname === "/cart" ? "#CE3246" : "#B1AFAF"}
                  fontSize="md"
                >
                  Carrinho
                </Text>
              </Button>
            </Box>
          </HStack>
        </Box>
      </Box>
    </>
  );
};
