class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      TodoStyle: style.notCheckedTodo
    };
    this.handleChange = this.handleChange.bind(this);
    this._onDelete = this._onDelete.bind(this);
  }
  handleChange(e) {
    // Omitted
  }
  _onDelete() {
    this.props.onDelete(this.props.title);
  }
  render() {
    return (
      <tr style={this.state.TodoStyle}>
        <td style={style.tableContent}><button onClick={this._onDelete}>X</button></td>
        <td style={style.tableContent}><input type="checkbox" checked={this.state.checked} onChange={this.handleChange} /></td>
        <td style={style.tableContent}>{this.props.title}</td>
        <td style={style.tableContent}>{this.props.children}</td>
      </tr>
    );
  }
}
