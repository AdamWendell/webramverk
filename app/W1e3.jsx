import React from 'react'

class solution extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }
  textStateChange (event) {
    this.setState({text: event.target.value})
  }

  render () {
    return (
      <div>
        <input type='text' placeholder='type here!' onChange={::this.textStateChange} />
        <p>{this.state.text}</p>
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
          text: ''
        }
      }
      textStateChange (event) {
        this.setState({text: event.target.value})
      }

      render () {
        return (
          <div>
            <input type='text' placeholder='type here!' onChange={::this.textStateChange} />
            <p>{this.state.text}</p>
          </div>
        )
      }
    }
  </code></pre>
  /*eslint-enable*/
)

export {solution, code}