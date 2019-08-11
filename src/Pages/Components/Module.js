import React from "react";
import firebase from "../../firebase";


/*
    id={item.id}
    name={item.name}
    detail={item.detail}
    instock={item.instock}
    date={item.date}
    stocked={item.stocked}
    imgurl={item.imgurl}
    strid={item.strid}
*/

class Module extends React.Component {

    constructor() {
        super();
        this.Remove = this.Remove.bind(this);
        this.Add = this.Add.bind(this);
        this.state = {
            key: 0
        }
      }  


    Remove = () => {
        firebase.database().ref('items/' + this.props.id ).set({
            id: this.props.id,
            name: this.props.name ,
            detail:this.props.detail,
            instock:this.props.instock,
            date:this.props.date,
            stocked: false,
            imgurl: this.props.imgurl,
            strid: this.props.strid
          });
          window.location.reload(false);
    }

    Add = () => {
        firebase.database().ref('items/' + this.props.id ).set({
            id: this.props.id,
            name: this.props.name ,
            detail:this.props.detail,
            instock:this.props.instock,
            date:this.props.date,
            stocked: true,
            imgurl: this.props.imgurl,
            strid: this.props.strid
          });
          window.location.reload(false);
    }

    componentDidMount() {
        console.log(this.props);

    }
    


    render() {
        return (
           <div>
        <button type="button" instock={this.props.instock} data-toggle="modal" data-target={"#module" + this.props.id} className="list-group-item list-group-item-action dashNote">
        {this.props.name}
        {this.props.instock ? (<span className="badge badge-success float-right">In Stock!</span>):(<span className="badge badge-danger float-right">Out Of Stock</span>)}
        {this.props.stocking ? (<span className="badge badge-info float-right mr-2">Stocking!</span>):(null)}

        </button>

        <div id={"module" + this.props.id} className="modal fade" role="dialog">
            <div className="modal-dialog">

                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title"> {this.props.name} </h4>
                    </div>
                    <img className="customImg" src={this.props.imgurl} alt="Not avalible"/>
                    <div className="modal-body">
                        <p> {this.props.detail} </p>
                    </div>
                    <div className="modal-footer">
                        {this.props.stocking ? (
                            <button id="remove" onClick={() => this.Remove()} type="button" className="btn btn-dark">Stop Stocking</button>
                        ):(
                            <button id="add"  onClick={() => this.Add()} type="button" className="btn btn-info">Stock this!</button>
                        )}
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>

            </div>
        </div>
        </div>
        )
    }

}

export default Module;