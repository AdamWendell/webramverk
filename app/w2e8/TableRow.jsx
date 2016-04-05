import React from 'react'
import TableCell from './TableCell'

// License, Brand, Model och Year

const TableRow = (props) => {
  console.log(props);
return (
  <tr>
    {Object.keys(props.bilObj)
      .map((key) => <TableCell key={key} fieldKey={key} bil={props.bil} bilObj={props.bilObj} updateField={props.updateField}/>)
    }
    <td><button>Ta bort</button></td>
  </tr>
)}

export default TableRow
