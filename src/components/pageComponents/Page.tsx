import { Box, Text } from "@chakra-ui/react";

interface PageInterface {
    children? : React.ReactNode;
    display? : string,
    flexDir? :  string,
    alignItems? : string,
    justifyContent? : string
}

const Page = ({children, display, flexDir, alignItems, justifyContent} : PageInterface) => {
    return (
        <Box w="100%" h="100%" display={display ?? "initial"} flexDir={flexDir == "column" ? "column" : "row"} alignItems={alignItems ?? "initial"} justifyContent={justifyContent ?? "initial"}>
            {(children) ? children : <Text>Element Not Found!</Text>}
        </Box>
    )
}

export default Page;