import { Flex, Tag, TagLabel, Text } from "@chakra-ui/react";
import dateDisplayer from "../code/dateDisplayer";

interface TaskItemProps {
    title: string,
    date: string,
    status: boolean,
    bg?: string
    click? : () => void,
}

const TaskItem = ({ title, date, status, bg, click}: TaskItemProps) => {
    return (
        <Flex background={bg ?? "#fff"} flexDirection={{ base: "column", md: "row" }} alignItems="center" justifyContent="center" w="100%" h={{ base: "20h", md: "10%" }} borderBottom="1px solid #000" _hover={{ bg: `${(bg) ? bg + "40" : "#f3f3f3"}` }} transition="all 0.5s ease-in-out" onClick={click ?? undefined}>
            <Flex direction="column" h="100%" w={{base:"95%", md:"80%"}} justifyContent="center" paddingLeft="2%" bg="">
                <Text fontWeight="bold">{title}</Text>
                <Text>{dateDisplayer(date)}</Text>
            </Flex>
            <Flex direction="column" h="100%" w="20%" justifyContent="center" alignItems="center">
                <Tag size="lg" variant="solid" colorScheme={(status) ? "green" : "gray"} borderRadius="full">
                    <TagLabel>
                        {(status) ? "complete" : "incomplete"}
                    </TagLabel>
                </Tag>
            </Flex>
        </Flex>
    )
}

export default TaskItem;