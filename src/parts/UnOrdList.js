import React, { Component } from 'react'
import PropTypes from "prop-types";
import Button from "../common/Button"

export class UnOrdList extends Component {
  state = {
    toggleInput: "",
  };

  handleToggleOnChange = event => {
    console.log(event.target.name, event.target.value);
    this.setState({
      toggleInput: event.target.value
    })
  };

  handleToggleButton = (id, itemWish) => {
    this.setState({
      toggleInput: itemWish,
    });
    this.props.handleEditToggle(id);

    this.props.handleEditUpdate(id, this.state.toggleInput);
  };

  render() {
    return (
      <ul>
        {this.props.wishList.map((i) => {
          let strikeThroughClass = `${
            i.doneWish ? "strike-through-done" : ""
          }`;

          return (
            <React.Fragment key={i.id}>
              <input
                type="checkbox"
                name="moveTop"
                // onChange={this.props.handleMoveOnChange}
                onClick={() => this.props.handle.handleMoveToggle(i.wish)}
              />
              {i.toggleEdit ? (
                <input
                  value={this.state.toggleInput}
                  style={{ marginRight: 10 }}
                  onChange={this.handleToggleOnChange}
                  name="toggleInput"
                />
              ) : (
                <li className={strikeThroughClass}>{i.wish}</li>
                )}
              
              <Button
                propsButtonToggle={i.toggleButton}
                propsClassName={"btn btn-success button-style"}
                propsName={i.toggleEdit ? "Submit" : "Edit"}
                propsOnClick={() => this.handleToggleButton(i.id, i.wish)}
              />
              <Button
                propsButtonToggle={i.toggleButton}
                propsClassName={"btn btn-warning button-style"}
                propsOnClick={() => this.props.handleDone(i.id)}
                propsName={"Done"}
              />
              <Button
                propsButtonToggle={i.toggleButton}
                propsClassName={"btn btn-danger button-style"}
                propsOnClick={() => this.props.handleDelete(i.id)}
                propsName={"Delete"}
              />
              <br />
            </React.Fragment>
          );
        })}
      </ul>
    );
  }
}

UnOrdList.propTypes = {
  wishList: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleDone: PropTypes.func.isRequired,
  handleEditToggle: PropTypes.func.isRequired,
  handleEditUpdate: PropTypes.func.isRequired,
  handleMoveOnChange: PropTypes.func,
  handleMoveToggle: PropTypes.func,
};

export default UnOrdList;
