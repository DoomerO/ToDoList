import { Flex, Text } from "@chakra-ui/react";

interface TaskItemProps {
    title : string,
    date : string,
    status : string,
    bg? : string

}

 const TaskItem = ({title, date, status, bg} : TaskItemProps) => {
    return (
        <Flex background={bg ?? "#fff"} flexDirection={{base : "column", md : "row"}} alignItems="center" justifyContent="center" w="100%" h={{base: "20h", md: "10%"}} borderBottom="1px solid #000" _hover={{bg : `${(bg) ? bg + "40": "#f3f3f3"}`}} transition="all 0.5s ease-in-out">
            <Flex direction="column" h="100%" w="80%" justifyContent="center" paddingLeft="2%" bg="">
                <Text fontWeight="bold">{title}</Text>
                <Text>{date}</Text>
            </Flex>
            <Flex direction="column" h="100%" w="20%" justifyContent="center" alignItems="center">
                <Text bg="#aaa" fontWeight="bold" color="#fff" borderRadius="10px" padding="3px">{status}</Text>
            </Flex>
        </Flex>
    )
 }

export default TaskItem;