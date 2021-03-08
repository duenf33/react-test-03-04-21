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
				wish: "1) go to movies",
				doneWish: false,
				toggleEdit: false,
				toggleButton: false,
				moveTop: false,
			},
			{
				id: uuidv4(),
				wish: "2) eat ice cream",
				doneWish: false,
				toggleEdit: false,
				toggleButton: false,
				moveTop: false,
			},
			{
				id: uuidv4(),
				wish: "3) go to beach",
				doneWish: false,
				toggleEdit: false,
				toggleButton: false,
				moveTop: false,
			},
		],
		wishInput: "",
	};

	handleSubmit = (e) => {
		e.preventDefault();

		let newWishList = [
			...this.state.wishList,
			{
				id: uuidv4(),
				wish: this.state.wishInput,
				doneWish: false,
				toggleEdit: false,
				toggleButton: false,
				moveTop: false,
			},
		];
		this.setState({
			wishList: newWishList,
			wishInput: "",
		});
	};

	handleOnChange = (e) => {
		if (e.target.type === "checkbox")
			this.setState({
				[e.target.name]: e.target.checked,
			});
		else
			this.setState({
				[e.target.name]: e.target.value,
			});
	};

	handleDelete = (id) => {
		let fwl = this.state.wishList.filter((i) => {
			if (i.id !== id) {
				i.toggleButton = false;
				return i;
			}
		});
		this.setState({
			wishList: fwl,
		});
	};

	handleMoveToggle = (id) => {
		let thisWish = this.state.wishList;
		let thisMoveTop = this.state.wishList.moveTop;
		let result = thisWish.findIndex((i) => i.id === id);
		let unShift = thisWish.unshift(thisWish[result]);
		let spLice = thisWish.splice(result + 1, 1);
		if (result && thisMoveTop !== false)
			this.setState({
				spLice,
			});
		else
			this.setState({
				result,
			});
	};

	handleDone = (id) => {
		let mf = this.state.wishList.map((i) => {
			if (i.id === id) {
				i.doneWish = !i.doneWish;
			}
			return i;
		});
		this.setState({
			wishList: mf,
		});
	};

	handleEditToggle = (id) => {
		// console.log(96, id)
		let n = this.state.wishList.map((i) => {
			if (i.id === id) {
				i.toggleEdit = !i.toggleEdit;
			}

			if (i.id !== id) {
				i.toggleButton = !i.toggleButton;
			}

			return i;
		});
		this.setState({
			wishList: n,
		});
	};

	handleEditUpdate = (id, newWishItem) => {
		let u = this.state.wishList.map((i) => {
			if (i.id === id) {
				i.wish = newWishItem;
			}
			return i;
		});
		this.setState({
			wishList: u,
		});
	};

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
					moveTop={this.state.wishList.moveTop}
					handleOnChange={this.handleOnChange}
				/>
			</div>
		);
	}
}

export default Mains;
