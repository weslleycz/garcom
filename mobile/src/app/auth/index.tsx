import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  Box,
  Button,
  FormControl,
  HStack,
  Icon,
  Input,
  VStack
} from "native-base";
import { TouchableOpacity } from "react-native";

export default function Page() {
  return (
    <>
      <VStack space={3} mt="5">
        <Box p={4}>
          <FormControl marginBottom={2}>
            <FormControl.Label>Nome</FormControl.Label>
            <Input
              _disabled={{}}
              size="2xl"
              placeholder="Informe o seu nome completo"
              InputLeftElement={
                <Icon
                  as={<FontAwesome name="user" size={24} color="black" />}
                  size={5}
                  ml="2"
                />
              }
            />
          </FormControl>

          <FormControl marginBottom={2}>
            <FormControl.Label>E-mail</FormControl.Label>
            <Input
              placeholder="Informe o seu e-mail"
              size="2xl"
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="email" size={24} color="black" />}
                  size={5}
                  ml="2"
                />
              }
            />
          </FormControl>

          <FormControl marginBottom={2}>
            <FormControl.Label>Telefone</FormControl.Label>
            <Input
              size="2xl"
              placeholder="Informe o telefone"
              keyboardType="numeric"
              InputLeftElement={
                <Icon
                  as={<FontAwesome name="phone" size={24} color="black" />}
                  size={5}
                  ml="2"
                />
              }
            />
          </FormControl>

          <FormControl marginBottom={2}>
            <FormControl.Label>Codigo da mesa</FormControl.Label>
            <Input
              size="2xl"
              placeholder="Informe o codigo da mesa"
              keyboardType="numeric"
              InputLeftElement={
                <Icon
                  as={<AntDesign name="qrcode" size={24} color="black" />}
                  size={5}
                  ml="2"
                />
              }
            />
          </FormControl>

          <Box marginTop={5}>
            <TouchableOpacity onPress={() => console.log(123)}>
              <Box borderRadius={4} bg={"#CC1028"}>
                <HStack alignItems={"center"} space={3}>
                  <Box p={1} justifyContent={"center"}>
                    <Ionicons name="enter-outline" size={30} color="#ffffff" />
                  </Box>
                  <Button
                    onPress={() => console.log(123)}
                    size={"lg"}
                    fontWeight={800}
                    width={"xs"}
                  >
                    Continuar
                  </Button>
                </HStack>
              </Box>
            </TouchableOpacity>
          </Box>
        </Box>
      </VStack>
    </>
  );
}
