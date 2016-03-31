import React from 'react'
import * as e1 from './W2e1.jsx'
import * as e2 from './W2e2.jsx'
// import * as e3 from './W2e3.jsx'
// import * as e4 from './W2e4.jsx'
// import * as e5 from './W2e5.jsx'
// import * as e6 from './W2e6.jsx'
// import * as e7 from './W2e7.jsx'

const W2 = () => {
  const exercises = [e1, e2]
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

export default W2