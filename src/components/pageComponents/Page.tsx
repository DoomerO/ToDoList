import { Box, Text } from "@chakra-ui/react";

interface PageInterface {
    children? : React.ReactNode;
}

const Page = ({children} : PageInterface) => {
    return (
        <Box w="100%" h="100%">
            {(children) ? children : <Text>Element Not Found!</Text>}
        </Box>
    )
}

export default Page;