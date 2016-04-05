import React from 'react'



export default class TableCell extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      editable: false
    }
    this.editHandler = ::this.editHandler
    this.elementHandler = ::this.elementHandler
  }
  editHandler () {
    this.setState({editable: !this.state.editable})
  }
  elementHandler (editable) {
    if(editable) {
      return <input
      type='text'
      value={this.props.bilObj[this.props.fieldKey]}
      autoFocus
      onFocus={(e) => e.target.select()}
      onChange={(e) => {
        return this.props.updateField(e, this.props.bil, this.props.fieldKey)
      }}
      onBlur={this.editHandler}
      onKeyPress={(e) => {
        if (e.charCode == 13) {
          this.editHandler()
        }}
      }
      />
    } else {
      console.log(this.props.bilObj[this.props.fieldKey]);
      return <div onClick={this.editHandler}>{this.props.bilObj[this.props.fieldKey] || 'Saknas'}</div>
    }
  }

  render () {
    return (
      <td>
        {this.elementHandler(this.state.editable)}
      </td>
    )
  }
}
