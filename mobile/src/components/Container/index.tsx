import { Box } from "native-base";
import { ReactNode } from "react";

type Pros = {
    children: ReactNode;
  };
  

export const Container = ({children}:Pros) => {
    return(<>
    <Box bg={"#FFFDFD"} p={2}>
    {children}
    </Box>
    </>)
}