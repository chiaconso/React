import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import useFetch from './hook/useFetch'


class HelloWorld extends Component {
  render () {
    return (
      <h1>Hello World!</h1>
    ) 
  }
}

function App() {
  const [count, setCount] = useState(0)
  const {data, loading, error} = useFetch()
if (loading) {
  return <p> Caricamento </p>
}
if (error) {
  return <p> Errore </p>
} 

  return (
    <>
    <HelloWorld />
    <Counter />
    data: {data}
    loading: {loading}
    error: {error}
    </>
  )
}

export default App
