import React from 'react'

class solution extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      animals: [
        { animal: 'elefant', checked: false},
        {animal: 'gorilla', checked: false},
        {animal:'val', checked: false},
        {animal:'hund', checked: false},
        {animal:'skata', checked: false},
        {animal:'chimpans', checked: true}
      ]
    }
  }
  add () {
    this.setState({animals: this.state.animals.concat({animal: 'katt', checked: false})})
  }
  compare(a, b) {
  if ( a.animal < b.animal) {
    return -1;
  }
  if (a.animal > b.animal) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
toggleChange (i) {
    this.setState({
      animals[i].checked = !this.state.isChecked // flip boolean value
    })
}
  // toggle checked
  render () {
    const animals = this.state.animals
    return (
      <div>
        <ul>
          {animals
            .filter((obj) => !obj.checked)
            .sort(::this.compare)
            .map((animalObj, i) => <li key={i}><input type='checkbox' checked={animalObj.checked}/>{animalObj.animal}</li>)
          }
          {animals
            .filter((obj) => obj.checked)
            .sort(::this.compare)
            .map((animalObj, i) => <li key={i}>
            <input
              type='checkbox'
              checked={animalObj.checked}
              onChange={::this.toggleChange(i)}
              />{animalObj.animal}</li>)}
        </ul>
        <a onClick={::this.add}>Add</a>
      </div>
    )
  }
}

const code = () => (
  /*eslint-disable*/
  <pre><code className='language-jsx'>
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
              {this.state.animals.slice().sort().map((animal, i) => <li key={i}>{animal}</li>)}
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
