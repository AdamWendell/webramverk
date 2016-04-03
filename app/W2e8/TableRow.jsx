import React from 'react'
// License, Brand, Model och Year

const TableRow = (props) => (
  <tr>
    {Object.keys(props.bil)
      .map((key) => {
        return(
          <td>
            <div>{props.bil[key]}</div>
            <input type='text' value={props.bil[key]} style={{display:'none'}}/>
          </td>
        )
      })
    }
  </tr>
)

export default TableRow
