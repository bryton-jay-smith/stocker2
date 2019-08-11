import React from 'react'
import firebase from "../firebase";
import Module from "./Components/Module";

const database = firebase.database();

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      stocking: []
    };
  }


  loadData = () => {
    database.ref('items').once('value')
      .then(res => this.setState({ items: res.val() }))
      .catch(err => console.log(err));
  }


  componentDidMount() {
    this.loadData();
    
  };

  render() {
    return (
      <div>
        <div>
          {this.state.allOptions &&
            <div>

              {this.state.stores.length ? (
                <div>
                  {this.state.stores.map(store => (
                    <div>
                      <button
                        onClick={() => this.openStore(store.id)}
                        storeid={store.id}
                      >
                        <img
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
              {this.state.storeItems ? (
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
export default Home;