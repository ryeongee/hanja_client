import React from 'react';
import { Table, Input, Modal, ModalBody, ModalHeader } from 'reactstrap';
import '../../style/BingoGame/BingoGameBoard.css';

class BingoGameBoard extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			rIndex: 4,
			cIndex: 4,
			modal: false,
			selected: '',
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle(selected) {
		this.setState({
			selected: selected
		})
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
	}

	render() {

		let items = [];
		let item = [];
		for (const [index, l] of this.props.hanjas.entries()) {
			if (index % 4 >= 0 && index % 4 <= 3) {
				item.push(<td key={"td"+index} onClick={() => this.toggle(l.shape)}>{l.shape}</td>);
			}
			if (index % 4 === 3) {
				items.push(item);
				item = [];
			}
		}

		return (
			<div>
				<Table bordered>
					<tbody>
						{items.map((l,index) => {
							return (<tr key={"tr"+index}>{l}</tr>);
						})}
					</tbody>
				</Table>
				<Modal isOpen={this.state.modal} centered={true} size={'sm'} fade={false} autoFocus={false}
					toggle={() => this.toggle(this.state.selected)} className={this.props.className}>
					<ModalHeader toggle={() => this.toggle(this.state.selected)}>
						{this.state.selected} 의 음훈을 입력하세요.
					</ModalHeader>
					<ModalBody>
						<Input type="text" autoFocus={true}>
						</Input>
					</ModalBody>
				</Modal>
			</div>
		);
	}

}

export default BingoGameBoard;