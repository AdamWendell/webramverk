import React from 'react'

class solution extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      myFirstVariable: 'First!'
    }
  }
  render () {
    return (
      <div>{this.state.myFirstVariable}</div>
    )
  }
}

const code = () => (
  /*eslint-disable*/
  <pre><code className='language-jsx'>
    class solution extends React.Component {
      constructor(props) {
        super(props)

        this.state = {
          myFirstVariable: 'First!'
        }
      }
      render () {
        return (
          <div>{this.state.myFirstVariable}</div>
        )
      }
    }
  </code></pre>
  /*eslint-enable*/
)

export {solution, code}
