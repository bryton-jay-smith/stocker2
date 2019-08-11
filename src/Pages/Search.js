import React from 'react'
import firebase from "../firebase";
import Module from "./Components/Module";

const database = firebase.database();

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      stores: [],
      storeItems: [],
      storeName: "",
      allOptions: true,
      oneOption: false
    };
    this.openStore = this.openStore.bind(this);
  }


  loadData = () => {
    database.ref('stores').once('value')
      .then(res => this.setState({ stores: res.val() }))
      .catch(err => console.log(err));

    database.ref('items').once('value')
      .then(res => this.setState({ items: res.val() }))
      .catch(err => console.log(err));

  }


  openStore = props => {
    this.setState({ allOptions: false });
    this.setState({ oneOption: true });

    let item = this.state.items;
    let Name = this.state.stores;
    let newName = "";
    let newItem = [];

    for (let i = 0; i < item.length; i++) {
      if (item[i].strid === props) {
        newItem.push(item[i]);
      }
    };

    for (let j = 0; j < Name.length; j++) {
      if (Name[j].id === props) {
        newName = Name[j].name;
      }
    }

    this.setState({ storeItems: newItem });
    this.setState({ storeName: newName });
  }

  backButton = () => {
    window.location.reload(false);
  }

  componentDidMount() {
    this.loadData();
  };

  render() {
    return (
      <div className="container">
        <div>
          {this.state.allOptions &&
            <div>
              <div className="jumbotron bg-dark mb-0 mt-5 text-white pb-3 pt-4">
                <h1 className="d-inline mt-5">Avalible Stores</h1><a className="float-right d-inline btn btn-secondary" href="/all" >All Items</a>
              </div>
              {this.state.stores.length ? (
                <div>
                  {this.state.stores.map(store => (
                    <div>
                      <button
                        className="p-0 m-2 rounded float-left"
                        onClick={() => this.openStore(store.id)}
                        storeid={store.id}
                      >
                        <img
                          className="p-0 m-0 img-thumbnail"
                          alt="store name"
                          src={store.img}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                  <h3>No results</h3>
                )}

            </div>
          }
        </div>
        <div>
          {this.state.oneOption &&
            <div>
              <div className="jumbotron bg-dark mb-0 mt-5 text-white pb-3 pt-4">
                <h1 className="d-inline">{this.state.storeName}</h1> <button className="float-right d-inline btn btn-secondary" onClick={() => this.backButton()} >Back</button>
              </div>

              {this.state.storeItems.length ? (
                <div>
                  {this.state.storeItems.map(item => (
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
                  ))}
                </div>
              ) : (<h1>No results</h1>)
              }
            </div>
          }
        </div>


      </div>


    )
  }
}
export default Search;