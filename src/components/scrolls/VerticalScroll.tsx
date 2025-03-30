import { Flex, Stack } from "@chakra-ui/react";

interface verticalScrollProps {
    children? : React.ReactElement[],

}

const VerticalScroll = ({children} : verticalScrollProps) => {
    return (
        <Flex flexDirection="column" alignItems="center" overflowY="scroll" minHeight="60vh" maxHeight="60vh" w={{base:"100%", md:"80%"}} css={{
            '&::-webkit-scrollbar' : {
                width: '3px',
            },
            '&::-webkit-scrollbar ::hover &::-webkit-scrollbar-thumb' : {
                background: '#00000060',
                borderRadius: '50px',
            },
            '&::-webkit-scrollbar-track': {
                background: '#0000',
            },
            '&::-webkit-scrollbar-thumb': {
                background: '#00000000',
                borderRadius: '50px',
            },
        }}>
            <Stack direction="column" spacing={0} h="fit-content" w="100%" justifyContent="center" align="center">
                {children}
            </Stack>
        </Flex>
    )
}

export default VerticalScroll;