import React from "react";
import firebase from "../firebase";
import Module from "./Components/Module";

const database = firebase.database();

class AllItems extends React.Component {

  constructor() {
    super();
    this.state = {
      items: []
    };
  }


  loadData = () => {
    database.ref('items').once('value')
      .then(res => this.setState({ items: res.val() }))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
            <div className="container">
        <div className="jumbotron bg-dark mb-0 mt-5 text-white pb-3 pt-4">
          <h1>All Items</h1>
        </div>
        {this.state.items.map(item =>
          <Module
            id={item.id}
            name={item.name}
            detail={item.detail}
            instock={item.instock}
            date={item.date}
            stocking={item.stocked}
            imgurl={item.imgurl}
            strid={item.strid}
          />
        )}
      </div>
    )
  }
}

export default AllItems;