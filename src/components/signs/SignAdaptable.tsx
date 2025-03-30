import { Flex, Text } from "@chakra-ui/react";

interface signProps {
    msg : string,
    icon : React.ReactElement,
    width?: string,
    height? : string
}

const SignAdaptable = ({msg, icon, width ="100%", height="100%" } : signProps) => {
    return (
        <Flex align="center" h={height} direction="column" justifyContent="center"  w={width}>
           {icon}
            <Text fontSize={{base:"3xl" ,md:"4xl"}} textAlign="center">{msg}</Text>
        </Flex>
    )
}

export default SignAdaptable;