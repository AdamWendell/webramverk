import React from 'react'

class solution extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      animals: ['elefant', 'gorilla', 'val', 'hund', 'skata', 'chimpans']
    }
  }
  add () {
    this.setState({animals: this.state.animals.concat('katt')})
  }
  render () {
    return (
      <div>
        <ul>
          {this.state.animals.map((animal, i) => <li key={i}>{animal}</li>)}
        </ul>
        <a onClick={::this.add}>Add</a>
      </div>
    )
  }
}

const code = () => (
  /*eslint-disable*/
  <pre><code className='language-jsx'>
    class solution extends React.Component {
      constructor (props) {
        super(props)

        this.state = {
          animals: ['elefant', 'gorilla', 'val', 'hund', 'skata', 'chimpans']
        }
      }
      add () {
        this.setState({animals: this.state.animals.concat('katt')})
      }
      render () {
        return (
          <div>
            <ul>
              {this.state.animals.map((animal, i) => <li key={i}>{animal}</li>)}
            </ul>
            <a onClick={::this.add}>Add</a>
          </div>
        )
      }
    }

  </code></pre>
  /*eslint-enable*/
)

export {solution, code}
