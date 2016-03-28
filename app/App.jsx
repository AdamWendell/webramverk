import React from 'react'
import ReactDom from 'react-dom'
import * as e1 from './e1.jsx'
import * as e2 from './e2.jsx'
import * as e3 from './e3.jsx'

const App = () => {
  const exercises = [e1, e2, e3]
  const style = {
    border: '2px solid black',
    'paddingBottom': '15px'
  }
  console.log(e1.solution)
  return (
    <div className='container'>
      {exercises.map((exercise, i) => (
        <div key={i} style={style}>
          <h1>Exercise {i+1}</h1>
          <exercise.solution/>
          <hr />
          <exercise.code />
        </div>
      )
    )}
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('app'))
