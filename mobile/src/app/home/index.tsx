import { ScrollView } from "react-native";
import { Categories } from "../../components/Categories";
import { Container } from "../../components/Container";
import { Product } from "../../components/Product";
import { Box, HStack, Text } from "native-base";
import { Entypo } from "@expo/vector-icons";

export default function Page() {
  return (
    <>
      <Container>
        <Categories />
        <ScrollView>
          <Box marginTop={3}>
            <HStack space={3} justifyContent="space-between">
              <Text fontWeight={900} color={"#9D9797"} fontSize="xl">
                Cardápio
              </Text>
              <Box>
                <HStack>
                  <Text color={"#9D9797"} fontSize="sm">
                    Ver mais
                  </Text>
                  <Entypo name="plus" size={30} color={"#9D9797"} />
                </HStack>
              </Box>
            </HStack>
          </Box>
          <Product />
          <Product />
          <Product />
          <Product />
        </ScrollView>
      </Container>
    </>
  );
}
