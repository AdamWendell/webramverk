import React from 'react'
import ReactDom from 'react-dom'
import * as e1 from './e1.jsx'
import * as e2 from './e2.jsx'
import * as e3 from './e3.jsx'
import * as e4 from './e4.jsx'
import * as e5 from './e5.jsx'
import * as e6 from './e6.jsx'
import * as e7 from './e7.jsx'

const App = () => {
  const exercises = [e1, e2, e3, e4, e5, e6, e7]
  const style = {
    border: '2px solid black',
    'paddingBottom': '15px'
  }
  return (
    <div className='container'>
      {exercises.map((exercise, i) => (
        <div key={i} style={style}>
          <h1>Exercise {i + 1}</h1>
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
