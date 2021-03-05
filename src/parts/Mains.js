import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Forms from "./Forms";
import UnOrdList from "./UnOrdList";
import "./Mains.css";

export class Mains extends Component {
  state = {
    wishList: [
      {
        id: uuidv4(),
        wish: "go to movies",
        doneWish: false,
        toggleEdit: false,
        toggleButton: false,
        moveTop: "",
      },
      {
        id: uuidv4(),
        wish: "eat ice cream",
        doneWish: false,
        toggleEdit: false,
        toggleButton: false,
        moveTop: "",
      },
      {
        id: uuidv4(),
        wish: "go to beach",
        doneWish: false,
        toggleEdit: false,
        toggleButton: false,
        moveTop: "",
      },
    ],
    wishInput: "",
  };

  handleSubmit = e => {
    e.preventDefault()

    let newWishList = [
      ...this.state.wishList,
      {
        id: uuidv4(),
        wish: this.state.wishInput,
        doneWish: false,
        toggleEdit: false,
      },
    ];
    this.setState({
      wishList: newWishList,
      wishInput: "",
    })
  };

  handleOnChange = e => {
    this.setState({
      wishInput: e.target.value
    });
  };

  handleDelete = id => {
    let fwl = this.state.wishList.filter(i => {
      if (i.id !== id) {
        i.toggleButton = false;
      }
      return i;
    });
    this.setState({
      wishList: fwl,
    })
  };

  handleMoveOnChange = e => {
    console.log(e.target.name, e.target.value);
    this.setState({
      moveTop: e.target.value
    })
  }

  handleMoveToggle = e => {
    let result = this.state.wishList.unshift(e)
    this.setState({
      wishList: result,
    })
  }

  handleDone = id => {
    let mf = this.state.wishList.map(i => {
      if (i.id === id) {
        i.doneWish = !i.doneWish;
      }
      return i;
    });
    this.setState({
      wishList: mf,
    })
  };

  handleEditToggle = id => {
    // console.log(96, id)
    let n = this.state.wishList.map(i => {
      if (i.id === id) {
        i.toggleEdit = !i.toggleEdit;
      }

      if (i.id !== id) {
        i.toggleButton = !i.toggleButton;
      }

      return i;
    })
    this.setState({
      wishList: n,
    })
  }

  handleEditUpdate = (id, newWishItem) => {
    let u = this.state.wishList.map(i => {
      if (i.id === id) {
        i.wish = newWishItem;
      }
      return i;
    });
    this.setState({
      wishList: u,
    })
  }

  render() {
    return (
      <div>
        <Forms
          wishList={this.state.wishList}
          handleSubmit={this.handleSubmit}
          handleOnChange={this.handleOnChange}
          wishInput={this.state.wishInput}
        />
        <UnOrdList
          wishList={this.state.wishList}
          handleDelete={this.handleDelete}
          handleDone={this.handleDone}
          handleEditToggle={this.handleEditToggle}
          handleEditUpdate={this.handleEditUpdate}
          handleMoveOnChange={this.handleMoveOnChange}
          handleMoveToggle={this.handleMoveToggle}
        />
      </div>
    )
  }
}

export default Mains;
