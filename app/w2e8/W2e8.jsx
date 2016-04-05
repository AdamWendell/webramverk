import React from 'react'
import TableRow from './TableRow'

class solution extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      bilar: {
        // License, Brand, Model och Year
        bil1: {
          license: 'abc123',
          brand: 'Volvo',
          model: 'v40',
          year: '2016'
        },
        bil2: {
          license: 'bmw354',
          brand: 'BMW',
          model: 'M135 xdrive',
          year: '2014'
        }
      }
    }
    this.tabelRowRender = ::this.tabelRowRender
    this.updateField = ::this.updateField
  }
  tabelRowRender (bil) {
    console.log(this.state.bilar[bil])
    return <TableRow key={bil} bil={bil} bilObj={this.state.bilar[bil]} updateField={this.updateField}/>
  }
  updateField (e, bilKey, fieldKey) {
    console.log(e);
    console.log(bilKey);
    console.log(fieldKey);
    var newState = this.state.bilar
    newState[bilKey][fieldKey] = e.target.value
    this.setState({bilar: newState})
  }
  render () {
    return (
      <table>
        <thead>
          <tr>
            <th>License</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
        {Object
          .keys(this.state.bilar)
          .map(this.tabelRowRender)
        }
        </tbody>
      </table>
    )
  }
}

const code = () => (
  <div> Katt </div>
)

export {solution, code}
