import { Box, Heading } from "native-base";

export const HeaderAuth = () => {
  return (
    <>
      <Box p={3} bg={"primary.100"}>
        <Heading color={"white"} marginTop={12} size="lg" fontSize={30} bold>
          Para continuar precisaremos de alguns dados
        </Heading>
      </Box>
    </>
  );
};
