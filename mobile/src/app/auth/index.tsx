import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import JWT from "expo-jwt";
import * as Notifications from "expo-notifications";
import { router } from "expo-router";
import {
  Box,
  Button,
  FormControl,
  HStack,
  Icon,
  Input,
  VStack,
  WarningOutlineIcon,
} from "native-base";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Database } from "../../services/db";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [errors, setErrors] = useState({
    nameError: false,
    emailError: false,
    telefoneError: false,
  });

  const validateFields = () => {
    let isValid = true;
    const newErrors = {
      nameError: false,
      emailError: false,
      telefoneError: false,
    };

    if (name.trim() === "") {
      newErrors.nameError = true;
      isValid = false;
    }

    if (email.trim() === "") {
      newErrors.emailError = true;
      isValid = false;
    }

    if (telefone.trim() === "") {
      newErrors.telefoneError = true;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const submit = async () => {
    if (validateFields()) {
      const db = new Database();
      // await db.setItem("user", { name, email, telefone });
      const jwt = JWT.encode({ email }, "token");
      await db.setItem("token", { jwt });

      const token = await db.getItem("token");
      
      const { status } = await Notifications.getPermissionsAsync();
      
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Seja bem vindo 👋",
        },
        trigger: {
          seconds: 1,
          channelId: 'bem-vindo',
        },
      });

      router.replace("/home");
     // await db.clear();
    }
  };

  return (
    <VStack space={3} mt={5}>
      <Box p={4}>
        <FormControl isInvalid={errors.nameError} marginBottom={2}>
          <FormControl.Label>Nome</FormControl.Label>
          <Input
            size="2xl"
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder="Informe o seu nome completo"
            InputLeftElement={
              <Icon
                as={<FontAwesome name="user" size={24} color="black" />}
                size={5}
                ml="2"
              />
            }
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Por favor, informe seu nome para continuar.
          </FormControl.ErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.emailError} marginBottom={2}>
          <FormControl.Label>E-mail</FormControl.Label>
          <Input
            placeholder="Informe o seu e-mail"
            size="2xl"
            value={email}
            onChangeText={(text) => setEmail(text)}
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="email" size={24} color="black" />}
                size={5}
                ml="2"
              />
            }
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Por favor, informe seu e-mail para continuar.
          </FormControl.ErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.telefoneError} marginBottom={2}>
          <FormControl.Label>Telefone</FormControl.Label>
          <Input
            size="2xl"
            placeholder="Informe o telefone"
            keyboardType="numeric"
            value={telefone}
            onChangeText={(text) => setTelefone(text)}
            InputLeftElement={
              <Icon
                as={<FontAwesome name="phone" size={24} color="black" />}
                size={5}
                ml="2"
              />
            }
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Por favor, informe seu Telefone para continuar.
          </FormControl.ErrorMessage>
        </FormControl>

        <Box marginTop={5}>
          <TouchableOpacity onPress={submit}>
            <Box borderRadius={4} bg={"#CC1028"}>
              <HStack alignItems={"center"} space={3}>
                <Box p={1} justifyContent={"center"}>
                  <Ionicons name="enter-outline" size={30} color="#ffffff" />
                </Box>
                <Button
                  onPress={submit}
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
  );
}
