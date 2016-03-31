import React from 'react'
import {TestingTesting} from './Directive'

const solution = () => <div><TestingTesting /></div>

const code = () => (
  /*eslint-disable*/
  <div>
    Fil 1
  <pre><code className='language-jsx'>
    import React from 'react'
    import {TestingTesting} from './Directive'

    const solution = () => <div><TestingTesting /></div>
  </code></pre>
fil 2
  <pre><code className='language-jsx'>
    import React from 'react'

    export const TestingTesting = () => <p>TESTING TESTING!</p>
  </code></pre>
  </div>
  /*eslint-enable*/
)

export {solution, code}
