import React from 'react'

class solution extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      myVariable: 1
    }
  }
  clicker () {
    this.setState({myVariable: this.state.myVariable + 1})
  }
  render () {
    return (
      <div>
        <p>{this.state.myVariable}</p>
        <a onClick={::this.clicker} >Click me</a>
      </div>
    )
  }
}

const code = () => (
  /*eslint-disable*/
  <pre><code className='language-jsx'>
    import React from 'react'

    class solution extends React.Component {
      constructor(props) {
        super(props)

        this.state = {
          myVariable: 1
        }
      }
      clicker () {
        this.setState({myVariable: this.state.myVariable + 1})
      }
      render () {
        return (
          <div>
            <p>{this.state.myVariable}</p>
            <a onClick={::this.clicker} >Click me</a>
          </div>
        )
      }
    }
  </code></pre>
  /*eslint-enable*/
)

export {solution, code}