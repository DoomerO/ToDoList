import Page from './components/pageComponents/Page'
import TitleSection from './components/sections/TitleSection'
import TaskItem from './components/sections/TaskItem'
import VerticalScroll from './components/scrolls/VerticalScroll'

function App() {

  const TaskItens = [
    <TaskItem status='done' title='xex' date='02/02/2043'/>,
    <TaskItem status='done' title='xex' date='02/02/2043'/>,
    <TaskItem status='done' title='xex' date='02/02/2043'/>,
    <TaskItem status='done' title='xex' date='02/02/2043'/>,
    <TaskItem status='done' title='xex' date='02/02/2043'/>,
    <TaskItem status='done' title='xex' date='02/02/2043'/>,
    <TaskItem status='done' title='xex' date='02/02/2043'/>,
    <TaskItem status='done' title='xex' date='02/02/2043'/>,
    <TaskItem status='done' title='xex' date='02/02/2043'/>,
    <TaskItem status='done' title='xex' date='02/02/2043'/>,
    <TaskItem status='done' title='xex' date='02/02/2043'/>,
    <TaskItem status='done' title='xex' date='02/02/2043'/>];

  return (
    <Page display='flex' flexDir='column' alignItems='center' justifyContent='center'>
        <TitleSection title='To Do List' flexDir='row' h="20vh"/>
        <VerticalScroll children={TaskItens}/>
    </Page>
  )
}

export default App
