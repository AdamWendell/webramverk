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
          year: '2016',
          edit: false
        },
        bil2: {
          license: 'bmw354',
          brand: 'BMW',
          model: 'M135 xdrive',
          year: '2014',
          edit: false
        }
      }
    }
    this.tabelRowRender = ::this.tabelRowRender
  }
  tabelRowRender (bil) {
    console.log(this.state.bilar[bil])
    return <TableRow key={bil} bil={this.state.bilar[bil]}/>
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
