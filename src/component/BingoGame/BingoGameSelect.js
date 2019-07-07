import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
// import css

class BingoGameSelect extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			level: -1, levelLabel: "급수선택", levelDdOpen: false,
			gameBtnLabel: "게임시작", gameBtnColor: "primary",
			levels: [
				{ level: 30, levelLabel: "3급" }, { level: 32, levelLabel: "3급2" },
				{ level: 40, levelLabel: "4급" }, { level: 42, levelLabel: "4급2" },
				{ level: 50, levelLabel: "5급" }, { level: 52, levelLabel: "5급2" },
				{ level: 60, levelLabel: "6급" }, { level: 62, levelLabel: "6급2" },
				{ level: 70, levelLabel: "7급" }, { level: 80, levelLabel: "8급" },
			],
		};

		this.onLevelBtnClick = this.onLevelBtnClick.bind(this);
		this.onGameBtnClick = this.onGameBtnClick.bind(this);
		this.levelToggle = this.levelToggle.bind(this);
	}
	
	onLevelBtnClick(level, levelLabel) {
    this.setState({ level: level, levelLabel: levelLabel });
  }
  
	onGameBtnClick() {
    if(!this.props.gaming) {
      if(this.state.level !== -1) {      
        this.setState({gameBtnLabel: "게임종료", gameBtnColor: "danger"});
        this.props.onStart(this.state);      
      } else {  
        alert("항목을 모두 선택하세요.");
      }
    } else {
      this.setState({gameBtnLabel: "게임시작", gameBtnColor: "primary"});
      this.props.onStop(this.state);
    }    
  }  

  levelToggle() {
    this.setState(prevState => ({
      levelDdOpen: !prevState.levelDdOpen
    }));
  }

	render() {
		let gaming = this.props.gaming;
		return (
			<div className="main">
				<div className="left">
					<Dropdown isOpen={this.state.levelDdOpen} toggle={this.levelToggle}>
						<DropdownToggle caret disabled={gaming} outline>{this.state.levelLabel}</DropdownToggle>
						<DropdownMenu>
							{this.state.levels.map((l,index) => {
								return (<DropdownItem key={"Dd"+index} onClick={() => this.onLevelBtnClick(l.level, l.levelLabel)}>
									{l.levelLabel}</DropdownItem>);
							})}
						</DropdownMenu>
					</Dropdown>
				</div>
				<div className="right">
					<Button className="gameBtn" color={this.state.gameBtnColor} onClick={() => this.onGameBtnClick()}>
						{this.state.gameBtnLabel}</Button>
				</div>
			</div>
		);
	}
}

export default BingoGameSelect;