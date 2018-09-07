import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import MyButton from './button.jsx';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import AutoComplete from 'material-ui/AutoComplete';
import DatePicker from 'material-ui/DatePicker';
import axios from 'axios';
import _ from 'lodash';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';




import RaisedButton from 'material-ui/RaisedButton';

export default class MyTable extends Component {

  constructor() {
    super();
    this.state = {
      height: '1000px',
      dialogOpen: false,
      manageOpen: false,
      editOpen: false,
      showCheckboxes: false,
      data: [],
      dialogInput: "",
      newID: "",
      newGroups: [],
      newUsers: [],
      newGroup: "",
      newUser: 0,
      selectedRow: {},
      columnHeaders: ['id', 'status', 'battery'],
      selectedColumn: 0,
      tempData: [],
      newLock: {
        ID: "",
        permittedGroups: [],
        permittedUsers: [],
        exp_date: ""
      },
      viewActions: []
    };


  }

  componentWillMount() {
    axios.get(`https://cmpe123b.appspot.com/${this.props.data}/`)
    .then(response => this.setState({data: response.data, tempData: response.data}, () =>
    console.log("Locks --->", this.state.data)))
  }

  handleManageLock(index) {
    console.log("Managing Lock! value--->", index);
    this.setState({manageOpen: true, selectedRow: index});
  };

  handleManageClose() {
    this.setState({manageOpen: false});
  }

  handleDialogOpen(){
    this.setState({dialogOpen: true})
  }

  handleDialogClose(){
    this.setState({
      dialogOpen: false,
      manageOpen: false,
      newID: "",
      newGroups: [],
      newUsers: [],
      newLock: {
        ID: "",
        permittedGroups: [],
        permittedUsers: []
      }
    })
  }

  handleEditOpen(){
    this.setState({dialogOpen: false, manageOpen: false, editOpen: true})
  }

  handleEditClose(){
    this.setState({dialogOpen: false, manageOpen: false, editOpen: false})
  }

  handleEditUsers(event, value){
    console.log("New USERS", value);
    this.setState({newUser: value})
  }

  handleEditGroups(event, value){
    console.log("New Groups", value);
    this.setState({newGroup: value})
  }

  handleEditSubmit(){
    console.log("New Groups", this.state.newGroup);
    console.log("New Users", this.state.newUser);
    var updatedLock = this.state.selectedRow
    console.log("---> ", updatedLock);
    if (this.state.newUser !== 0){
      updatedLock.permittedUsers.push(this.state.newUser);
    }
    if (this.state.newGroup !== ""){
      updatedLock.permittedGroups.push(this.state.newGroup);
    }
    axios.post(`https://cmpe123b.appspot.com/locks/update`, updatedLock)
    .then(response => {
      console.log(response);
      this.setState({editOpen:false, manageOpen:true})
    });
  }

  handleCreateNewLock(){
    console.log("Creating new lock!");
    const newLock = this.state.newLock
    newLock.battery = 100
    newLock.status = "connected"
    console.log("newLock: ", newLock);
    this.setState({dialogOpen: false})
    axios.post(`https://cmpe123b.appspot.com/locks`, newLock)
    .then(response => {
      console.log(response);
      axios.get(`https://cmpe123b.appspot.com/${this.props.data}/`)
      .then(response => this.setState({data: response.data, tempData: response.data, dialogOpen: false}, () =>
      console.log("Locks --->", this.state.data)
    ));
  });
}

handleTextInput(event, value){
  this.setState({dialogInput: value}, () => {
    console.log("Input Value --->", this.state.dialogInput);
  })
}

handleColumnHeaderClick(event, row, column){
  console.log("Previous column ", this.state.selectedColumn);
  console.log("New Column ", column);
  if (column === this.state.selectedColumn){
    this.setState({tempData: _.reverse(this.state.tempData), selectedColumn: column});
  } else {
    this.setState({tempData: _.sortBy(this.state.tempData, this.state.columnHeaders[column - 1]), selectedColumn: column});
  }
}

handleSearch(chosenRequest, index){
  console.log("Searching! ", index);
  const results = []
  results[0] = _.find(this.state.data, {ID: chosenRequest});
  this.setState({tempData: results})
}

handleUpdateSearchInput(input){
}

handleAddID(){
  if(this.state.dialogInput !== ""){
    const newLock = this.state.newLock;
    newLock.ID = this.state.dialogInput
    this.setState({newLock: newLock, dialogInput: ""}, () => {
      console.log("New ID: ", this.state.newID);
    });
  } else {
    return
  }
}

handleAddGroups(){
  if(this.state.dialogInput !== ""){
    const newLock = this.state.newLock;
    const newGroups = newLock.permittedGroups;
    newGroups.push(this.state.dialogInput)
    newLock.permittedGroups = newGroups;
    this.setState({newLock: newLock, dialogInput: ""}, () => {
      console.log("New Groups: ", this.state.newLock);
    });
  } else {
    return
  }
}

handleAddUsers(){
  if(this.state.dialogInput !== ""){
    const newLock = this.state.newLock;
    const newUsers = newLock.permittedUsers;
    newUsers.push(this.state.dialogInput)
    newLock.permittedUsers = newUsers;
    this.setState({newLock: newLock, dialogInput: ""}, () => {
      console.log("New Groups: ", this.state.newLock);
    });
  } else {
    return
  }
}

handleAddExpDate(event, date){
  console.log("expDate: ", date, event);
  var newLock = this.state.newLock;
  newLock.exp_date = date;
  this.setState({newLock: newLock})
}

handleDeleteLock(){
  axios.delete(`https://cmpe123b.appspot.com/locks/${this.state.selectedRow.ID}`)
  .then((response) => {
    console.log(response);
    this.setState({manageOpen: false})
    this.componentWillMount()
  })
}

resetData(){
  this.setState({tempData: this.state.data});
}

seperateList(list){
  var result = ""
  if(list){
    for (var i = 0; i < list.length; i++){
      result = result + list[i] + ", "
    }
    return result.slice(0,-2)
  }
}


render() {
  return (
    <MuiThemeProvider>
      <div>
        {this.state.gifs.map( (row, index) => (
          <TableRow key={index}>
            <TableRowColumn>{row.ID}</TableRowColumn>
              <TableRowColumn>{row.status}</TableRowColumn>
                <TableRowColumn>{row.battery}</TableRowColumn>
                  <TableRowColumn>
                    <RaisedButton
                      label={"VIEW"}
                      onClick={() => this.handleManageLock(row)}
                      secondary={true}
                      />
                    </TableRowColumn>
                  </TableRow>
                ))}
      </div>
    </MuiThemeProvider>
  );
}
}
