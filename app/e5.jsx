import React from 'react'

const TestingTesting = () =>  <p>TESTING TESTING!</p>

const solution = () => <div><TestingTesting /></div>


const code = () => (
  /*eslint-disable*/
  <pre><code className='language-jsx'>

    const Testing = () =>  <p>TESTING TESTING!</p>

    const solution = () => <div><Testing /></div>

  </code></pre>
  /*eslint-enable*/
)

export {solution, code}