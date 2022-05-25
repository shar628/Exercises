// import axios from "axios"
import React, { Component } from 'react'
import PeopleApi from "./api";
import Person from "./person";

export default class App extends Component {
  state = { peopleArr: [], inputName: "", inputImg: " " };
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value })
    // console.log(event.target);
  }

  async componentDidMount() {

    const { data } = await PeopleApi.get('/')
    console.log(data.data);
    this.setState({ peopleArr: data })
  }

  insertData = () => {
    const peopleToRender = this.state.peopleArr.map((person) => {
      return <Person
        name={person.name}
        key={person.id}
        id={person.id}
        img={person.avatar}
        handleUpdate={this.handleUpdate}
      />
    })
    return peopleToRender
  }

  handleCreate = async () => {
    try {
      const newPersonObj = { name: this.state.inputName, avatar: this.state.inputImg }
      const objToAdd = await PeopleApi.post('/', newPersonObj)
      this.setState((prev) => {
        return { peopleArr: [...prev.peopleArr, objToAdd.data], inputName: "", inputImg: "" }
      })
    } catch (e) {
      console.log(e);
    }
  }

  handleUpdate = async (personID, personUpdatedName) => {
    try {
      const newPersonObj = this.state.peopleArr.find(
        (person) => person.id === personID
      );
      const updatedPerson = { ...newPersonObj, name: personUpdatedName };
      const updatedPersonInServer = await PeopleApi.put(
        "/" + personID,
        updatedPerson
      );
      const newPeopleArr = this.state.peopleArr.map((person) => {
        if (person.id === personID) {
          return updatedPersonInServer.data;
        } else {
          return person;
        }
      });
      this.setState({ peopleArr: newPeopleArr });
    } catch (e) {
      console.log(e.message);
    }
  };

  render() {
    return (
      <div>
        <input
          id={"inputName"}
          onChange={this.handleChange}
          value={this.state.inputName}
        />
        <input
          id={"inputImg"}
          onChange={this.handleChange}
          value={this.state.inputImg}
        />
        <button onClick={this.handleCreate} >add</button>
        {this.insertData()}
      </div>
    )
  }
}


