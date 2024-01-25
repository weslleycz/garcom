import { Entypo } from "@expo/vector-icons";
import { Box, HStack, ScrollView, Text } from "native-base";
import { CardCategorie } from "../CardCategorie";

export const Categories = () => {
  return (
    <>
    <Box marginBottom={3}>
    <HStack space={3} justifyContent="space-between">
        <Text fontWeight={900} color={"#9D9797"} fontSize="xl">
          Categorias
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

    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false} 
    >
      <HStack space={3} justifyContent="center">
        <CardCategorie name="Carnes" />
        <CardCategorie name="Lanches" />
        <CardCategorie name="Massas" />
        <CardCategorie name="Pizzas" />
        <CardCategorie name="Sobremesas" />
      </HStack>
    </ScrollView>
    </>
  );
};
