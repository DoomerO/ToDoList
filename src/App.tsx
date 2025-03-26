import { useState } from 'react'
import Page from './components/pageComponents/Page'
import TitleSection from './components/sections/TitleSection'
import TaskItem from './components/sections/TaskItem'

function App() {

  return (
    <Page>
        <TitleSection title='To Do List' flexDir='row' h="20vh"/>
        <TaskItem status='done' title='xex' date='02/02/2043'/>
    </Page>
  )
}

export default App
