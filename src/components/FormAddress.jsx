import * as C from "@chakra-ui/react";

const FormAddress = () => {
  return (
    <C.VStack spacing={5}>
      <C.Input type="number" borderColor="yellow.700" placeholder="CEP" />
      <C.Input type="text" borderColor="yellow.700" placeholder="Endereço" />
    </C.VStack>
  );
};

export default FormAddress;
