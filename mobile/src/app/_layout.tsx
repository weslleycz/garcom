import { Slot, useFocusEffect, usePathname } from "expo-router";
import { Box, NativeBaseProvider } from "native-base";
import { LogBox } from "react-native";
import { theme } from "../theme";

export default function Layout() {
  LogBox.ignoreLogs(["Warning: ..."]);
  // const pathname = usePathname();
  // useFocusEffect(() => {
  //   console.log(pathname)
  // })
  return (
    <>
      <NativeBaseProvider theme={theme}>
        <Box bg={"primary.100"} safeAreaTop />
        <Slot />
      </NativeBaseProvider>
    </>
  );
}
