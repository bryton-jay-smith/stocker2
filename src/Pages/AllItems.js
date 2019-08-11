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
      <div>
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