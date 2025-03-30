import { Button, ButtonGroup, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Tag, TagLabel, TagRightIcon} from "@chakra-ui/react";
import TextInput from "../inputs/TextInput";
import { useEffect, useState } from "react";
import { handleChange, handleChangeTextArea } from "../code/events";
import TextAreaInput from "../inputs/TextAreaInput";
import DateInput from "../inputs/DateInput";
import { taskData } from "../code/interfaces";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

interface BaseModalProps {
    setClose: () => void;
    isOpen: boolean;
    task?: taskData;
    isUpdating: boolean;
    updtArray: React.Dispatch<React.SetStateAction<taskData[]>>;
    array: taskData[]
}

const BaseModal = ({ setClose, isOpen, task, isUpdating, updtArray, array }: BaseModalProps) => {

    const [taskUpt, setTask] = useState<taskData>({
        id: (task) ? task.id : 0,
        title: (task) ? task.title : "",
        description: (task) ? task.description : "",
        date: (task) ? task.date : "",
        status: false
    })

    function createNewItem() {
        setTask(prev => ({...prev, status : false}));
        updtArray(prev => ([...prev, {id : taskUpt.id, title : taskUpt.title, description: taskUpt.description, date: taskUpt.date, status : false}]));
        localStorage.setItem("tasks", JSON.stringify(array));
    }

    function updateItem() {
        updtArray(prevState => {
            const updatedArray = prevState.map((task) =>
                task.title == taskUpt.title ? { ...task, ...taskUpt } : task
            )
            return updatedArray;
        });
    }

    function deleteItem() {
        updtArray(prevState => {
            const updatedArray = prevState.filter(task => task.title !== taskUpt.title)
            return updatedArray;
        });
    }

    useEffect(() => {
        if (task) setTask(task);
    }, [task])

    return (
        <Modal onClose={setClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader w="100%" display="flex" flexDir="row" paddingTop="7vh">
                    {(isUpdating) ? "Update Task" : "Create Task"}
                    <Spacer />
                    {(isUpdating) ?
                        <Tag size="lg" variant="solid" colorScheme={(taskUpt.status) ? "green" : "gray"} borderRadius="full" transition="all 0.5s ease-in-out" onClick={
                            () => {
                                setTask(prev => ({ ...prev, status: (taskUpt.status) ? false : true }));
                                console.log(taskUpt)
                            }
                        }>
                            <TagLabel>
                                {(taskUpt.status) ? "complete" : "incomplete"}
                            </TagLabel>
                            <TagRightIcon as={(taskUpt.status) ? ArrowBackIcon : ArrowForwardIcon} />
                        </Tag> : null}
                </ModalHeader>

                <ModalCloseButton onClick={() => { setClose(); setTask(prev => ({ ...prev, status: false })) }} />
                <ModalBody justifyContent="center" display="flex" flexDirection="column" alignItems="center">
                    <Flex flexDir={"row"} w="100%">
                        <TextInput label="Title" name="title" placeholder={(isUpdating) ? task?.title : ""} changeEvent={(e) => handleChange({ changeHandler: e, updateObject: setTask })} />
                    </Flex>
                    <DateInput label="Date" name="date" changeEvent={(e) => handleChange({ changeHandler: e, updateObject: setTask })} placeholder={(isUpdating) ? task?.date?.toString() : ""} />
                    <TextAreaInput label="Description" placeholder={(isUpdating) ? task?.description : ""} name="description" changeEvent={(e) => handleChangeTextArea({ changeHandler: e, updateObject: setTask })} />
                </ModalBody>

                <ModalFooter>
                    <ButtonGroup>
                        <Button colorScheme="linkedin" variant="solid" onClick={() => { (isUpdating) ? updateItem() : createNewItem(); setClose() }}>{(isUpdating) ? "Update" : "Create"}</Button>
                        <Button colorScheme="linkdin" variant="ghost" onClick={() => { setClose(); (isUpdating) ? deleteItem() : setTask(prev => ({ ...prev, status: false })) }}>{(isUpdating) ? "Delete" : "Cancel"}</Button>
                    </ButtonGroup>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default BaseModal;