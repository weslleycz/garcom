import { AntDesign } from "@expo/vector-icons";
import { usePathname } from "expo-router";
import { Box, Heading, HStack } from "native-base";

export const Header = () => {
  const pathname = usePathname();
  return (
    <>
      <Box p={3} background={"#CE3246"}>
        <HStack
          space={3}
          justifyContent={pathname === "/home" ? "center" : "space-between"}
        >
          {pathname === "/home" ? null : (
            <AntDesign name="left" size={24} color="#ffff" />
          )}

          <Heading color={"white"}>Olá, Seja Bem-vindo(a)</Heading>
        </HStack>
      </Box>
    </>
  );
};
