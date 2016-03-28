import React from 'react'

class solution extends React.Component {
  clickMe(event) {
    event.preventDefault()
    console.log('You clicked the link!')
  }
  render () {
    return (
      <a onClick={this.clickMe} href='/'>Click me</a>
    )
  }
}

const code = () => (
  /*eslint-disable*/
  <pre><code className='language-jsx'>
    class solution extends React.Component {
      clickMe(event) {
        event.preventDefault()
        console.log('You clicked the link!')
      }
      render () {
        return (
          <a onClick={this.clickMe} href='/'>Click me</a>
        )
      }
    }
  </code></pre>
  /*eslint-enable*/
)

export {solution, code}