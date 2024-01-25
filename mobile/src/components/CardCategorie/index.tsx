import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Box, Text } from "native-base";
import React from "react";

type Props = {
  name: "Massas" | "Pizzas" | "Carnes" | "Lanches" | "Sobremesas";
};

export const CardCategorie = ({ name }: Props) => {
  let IconComponent;
  switch (name) {
    case "Massas":
      IconComponent = (
        <MaterialCommunityIcons name="noodles" size={40} color="#CE3246" />
      );
      break;
    case "Pizzas":
      IconComponent = (
        <FontAwesome5 name="pizza-slice" size={40} color="#CE3246" />
      );
      break;
    case "Carnes":
      IconComponent = (
        <MaterialCommunityIcons
          name="food-drumstick"
          size={40}
          color="#CE3246"
        />
      );
      break;
    case "Lanches":
      IconComponent = (
        <MaterialIcons name="fastfood" size={40} color="#CE3246" />
      );
      break;
    case "Sobremesas":
      IconComponent = <MaterialCommunityIcons name="cupcake" size={40} color="#CE3246" />;
      break;
    default:
      IconComponent = <FontAwesome5 name="cupcake" size={40} color="#CE3246" />;
  }
  return (
    <Box
      background={"white"}
      alignItems="center"
      justifyContent="center"
      p={6}
      borderWidth={1.5}
      borderRadius={8}
      borderColor={"#dadada"}
    >
      <Box marginBottom={1}>{IconComponent}</Box>
      <Text fontSize="lg" color="#9D9797">
        {name}
      </Text>
    </Box>
  );
};
