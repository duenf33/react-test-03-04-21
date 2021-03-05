import React, { Component } from 'react'
import PropTypes from "prop-types"
import "./Forms.css";

export class Forms extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Enter Wish
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Your Wish"
              name="wishInput"
              onChange={this.props.handleOnChange}
              value={this.props.wishInput}
            />
          </div>
          <button className="btn btn-primary mb-3" type="submit">
            Wish
          </button>
        </form>
      </div>
    )
  }
}

Forms.propTypes = {
  wishList: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  wishInput: PropTypes.string.isRequired,
}

export default Forms;
