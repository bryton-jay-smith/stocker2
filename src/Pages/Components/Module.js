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
      }  

    Remove = () => {
        console.log(this.props)
    }

    Add = () => {
        console.log(this.props)
    }

    componentDidMount() {
        console.log(this.props);
    }
    


    render() {
        return (
           <div>
        <button type="button" instock={this.props.instock} data-toggle="modal" data-target={"#module" + this.props.id} className="list-group-item list-group-item-action dashNote">
        {this.props.name}
        {this.props.stocking ? (<span className="badge badge-danger">Stocking!</span>):(null)}
        {this.props.instock ? (<span className="badge badge-success">In Stock!</span>):(<span className="badge badge-info">Out Of Stock</span>)}
        </button>

        <div id={"module" + this.props.id} className="modal fade" role="dialog">
            <div className="modal-dialog">

                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title"> {this.props.name} </h4>
                    </div>
                    <img className="itemImg" src={this.props.imgurl} alt="Not avalible"/>
                    <div className="modal-body">
                        <p> {this.props.detail} </p>
                    </div>
                    <div className="modal-footer">
                        {this.props.stocking ? (
                            <button id="remove" onClick={() => this.Remove()} type="button" className="btn btn-danger">Stop Stocking</button>
                        ):(
                            <button id="add"  onClick={() => this.Add()} type="button" className="btn btn-success">Stock this!</button>
                        )}
                        <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                    </div>
                </div>

            </div>
        </div>
        </div>
        )
    }

}

export default Module;