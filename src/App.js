import React from "react";
import Filter from "./components/Filter";
import RecordTable from "./components/RecordTable";
import "./styles/App.css";

let people = [
  
  {
    name: "Veronica Mize",
    dob: "11/29/2011",
  },
  {
    name: "Cecilia Olsson",
    dob: "09/16/1992",
  },
  {
    name: "Peter Parker",
    dob: "01/16/1992",
  },
  {
    name: "Jimmy Shergil",
    dob: "12/12/2001",
  },
  {
    name: "Alexander Alfred",
    dob: "02/09/1891",
  },
  {
    name: "Janice Shroyer",
    dob: "12/01/1982",
  },
  {
    name: "Ralph White",
    dob: "11/30/2011",
  },
  {
    name: "Deborah T. Decker",
    dob: "10/31/1999",
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = { data: people };
  }

  handleSort = (value) => {
    this.setState({ data: value });
  };

  sortName = (e) => {
    if (e.target.checked) {
      let sortedByName = this.state.data.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      this.handleSort(sortedByName);
    }
  };

  sortAge = (e) => {
    if (e.target.checked) {
      let sortedByAge = this.state.data.sort((a, b) => {
        if (Date.parse(a.dob) < Date.parse(b.dob)) {
          return -1;
        }
        if (Date.parse(a.dob) > Date.parse(b.dob)) {
          return 1;
        }
        return 0;
      });
      this.handleSort(sortedByAge);
    }
  };

  componentDidMount = () => {
    let sortedByName = this.state.data.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    this.handleSort(sortedByName);
  };

  render() {
    return (
      <>
        <div id="wrapper">
          <div id="title-box">Birthday Records</div>
          <div id="filter-box">
            <Filter sortName={this.sortName} sortAge={this.sortAge} />
          </div>
          <div id="table-box">
            <RecordTable data={this.state.data} />
          </div>
        </div>
      </>
    );
  }
}

export default App;