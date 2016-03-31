import React from 'react'
import ReactDom from 'react-dom'
import W1 from './w1'
import W2 from './W2'

const App = () => {

  return (
    <div className='container'>
      <h1>Week 1</h1>
      <W1 />
      <h1>Week 2</h1>
      <W2 />
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('app'))
