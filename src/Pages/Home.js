import React from 'react'
import firebase from "../firebase";
import Module from "./Components/Module";

const database = firebase.database();

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }


  loadData = () => {
    database.ref('items').once('value')
      .then(res => this.setState({ items: res.val() }))
      .catch(err => console.log(err));
  };



  componentDidMount() {
    this.loadData();

  };

  render() {
    return (
      <div className="container">
        <div className="jumbotron bg-dark mb-0 mt-5 text-white pb-3 pt-4">
          <h1>Stocking</h1>
        </div>
      <div>
        {this.state.items.map(item => (
          <div>
            {item.stocked ? (
              <div>
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
              </div>
            ) : (null)}
          </div>
        ))}
      </div>
      </div>

    )
  }
}
export default Home;

/*

    database.ref('items').once('value')
      .then(res => this.setState({ items: res.val() }))
      .catch(err => console.log(err));
      */