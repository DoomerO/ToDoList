import { Flex, Text } from "@chakra-ui/react";

interface TitleSectionProps {
    title?: string,
    flexDir?: string,
    justifyCont?: string,
    bg?: string,
    textColor?: string,
    h?: string | number,
    w?: string | number,
    fontSize?: string,
    alignItems? : string
}

const TitleSection = ({title, flexDir, justifyCont, bg, textColor, w, h, fontSize, alignItems} : TitleSectionProps) => {
    return (
        <Flex w={w ? w : "100%"} h={h ? h : "30vh"} background={bg} flexDirection={{base: "column",  md: flexDir == "column" ? "column" : "row" }} justifyContent={justifyCont ? justifyCont : "center"} alignItems={alignItems ? alignItems : "center"}>
            <Text fontSize={fontSize ? fontSize : "2xl"} fontWeight="bold" color={textColor}>{title ? title : "Not provided a title"}</Text>
        </Flex>
    )
}

export default TitleSection;