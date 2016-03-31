import React from 'react'
import * as e1 from './W1e1.jsx'
import * as e2 from './W1e2.jsx'
import * as e3 from './W1e3.jsx'
import * as e4 from './W1e4.jsx'
import * as e5 from './W1e5.jsx'
import * as e6 from './W1e6.jsx'
import * as e7 from './W1e7.jsx'

const W1 = () => {
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

export default W1