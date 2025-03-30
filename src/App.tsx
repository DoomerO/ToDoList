import Page from './components/pageComponents/Page'
import TitleSection from './components/sections/TitleSection'
import TaskItem from './components/sections/TaskItem'
import VerticalScroll from './components/scrolls/VerticalScroll'
import { Button, Flex, Text, Select, Stack, useDisclosure } from '@chakra-ui/react';
import BaseModal from './components/modal/BaseModal';
import { useEffect, useState } from 'react';
import { taskData } from './components/code/interfaces';
import dateDisplayer from './components/code/dateDisplayer';
import SignAdaptable from './components/signs/SignAdaptable';
import { WarningIcon } from '@chakra-ui/icons';

function App() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selected, setSelected] = useState<taskData>({
    id: 0,
    title: "",
    description: "",
    date: "",
    status: false,
  });

  const [filter, setFilter] = useState({
    date: "",
    status: ""
  });

  const [isSelected, setIsSelected] = useState<boolean>(false);

  const [taskArray, setTaskArray] = useState<taskData[]>([]);
  const [filterArray, setFilterArray] = useState<taskData[]>([]);

  useEffect(() => {
    setTaskArray(JSON.parse(localStorage.getItem("tasks") || "[]"));
  }, [])

  useEffect(() => {
    if (taskArray.length) localStorage.setItem("tasks", JSON.stringify(taskArray));
  }, [taskArray]);

  useEffect(() => {
    
    if (filter.date == "" && filter.status == "") {
      setFilterArray([]);
    }

    if(filter.status != "") {
      setFilterArray(taskArray.filter(task => (filter.status == "complete") ? task.status : !task.status));
    }

    if(filter.date != "") {
      setFilterArray(taskArray.filter(task => filter.date == task.date));
    }

    if(filter.date != "" && filter.status != ""){
      setFilterArray(() => {
        const filtered = taskArray.filter(task => (filter.status == "complete") ? task.status : !task.status)
        const final = filtered.filter(task => filter.date == task.date);
        console.log(final);
        return final;
      })
    } 
  }, [filter])

  return (
    <Page display='flex' flexDir='column' alignItems='center' justifyContent='center'>
      <TitleSection title='To Do List' flexDir='row' h="20vh" />

      <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" w={{ base: "95%", md: "80%" }}>
        <Text fontSize="1xl" fontWeight="semibold">{"Filters:"}</Text>

        <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
          <Text fontSize="1xl" fontWeight="semibold">{"Date:"}</Text>
          <Select onChange={(e) => { setFilter(prev => ({ ...prev, date: e.target.value })) }}>
            <option value={""}></option>
            {taskArray.map((task) => {
              return <option value={task.date} key={taskArray.indexOf(task)}>{dateDisplayer(task.date)}</option>})}
          </Select>
        </Stack>

        <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
          <Text fontSize="1xl" fontWeight="semibold">{"Status:"}</Text>
          <Select onChange={(e) => { setFilter(prev => ({ ...prev, status: e.target.value })) }}>
            <option value={""}></option>
            <option value={"complete"}>{"complete"}</option>
            <option value={"incomplete"}>{"incomplete"}</option>
          </Select>
        </Stack>
      </Stack>

      {(filterArray.length == 0 && filter.status != "" || filter.date != "") ? <Text fontSize="5xs" color="#d4462b" position="absolute"  fontWeight="semibold">{"It was not possible to find any task in this conditions"}</Text>: null}

      {(taskArray.length) ?   
      <VerticalScroll children={(filterArray.length) ? filterArray.map((task) => {
        return <TaskItem title={task.title} status={task.status} date={task.date} key={filterArray.indexOf(task).toString()} click={() => {
          setSelected(task); setIsSelected(true); onOpen();
        }} />
      }) : taskArray.map((task) => {
        return <TaskItem title={task.title} status={task.status} date={task.date} key={taskArray.indexOf(task).toString()} click={() => {
          setSelected(task); setIsSelected(true); onOpen();
        }} />
      })} /> : <SignAdaptable msg="You have not created any task yet! Click on  the button new task to create one." icon={<WarningIcon boxSize="20%"/>} height="60vh" width="60%"/>}        
      
      <BaseModal isUpdating={isSelected} task={(isSelected) ? selected : undefined} isOpen={isOpen} setClose={onClose} updtArray={setTaskArray} array={taskArray} />

      <Flex direction="column" justifyContent="center" alignItems="center" h="10vh" id="Footer">
        <Button colorScheme='linkedin' onClick={() => { setIsSelected(false); onOpen() }}>{"New Task"}</Button>
      </Flex>
    </Page>
  )
}

export default App
