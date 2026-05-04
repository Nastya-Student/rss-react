
import './App.css'
import { Results } from './components/results/Results'
import React from 'react'
import { TopControls } from './components/top-controls/TopControls'
import { ErrorButton } from './components/ErrorButton'

export class App extends React.Component {
  render(){
    return <main>
      <TopControls className='block'></TopControls>
      <Results className='block' items={["one", "two", "three"]}></Results>
      <ErrorButton>Error</ErrorButton>
    </main>
  }
}


