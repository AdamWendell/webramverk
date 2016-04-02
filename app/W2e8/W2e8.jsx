import React from 'react'
import TableRow from './TableRow';

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
  }
  tabelRowRender (bil) {
    return <TableRow key={bil} bil={this.state.bilar[bil]}/>
  }
  render () {
    return (
      <table>
        <tr>
          <th>License</th>
          <th>Brand</th>
          <th>Model</th>
          <th>Year</th>
        </tr>
        {Object
          .keys(this.state.bilar)
          .map(this.tabelRowRender)}
      </table>
    )
  }
}

const code = () => (
  /*eslint-disable*/
  <pre><code className='language-jsx'>

  </code></pre>
  /*eslint-enable*/
)

export {solution, code}
