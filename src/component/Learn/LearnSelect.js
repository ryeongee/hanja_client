import React from 'react';
import { ButtonGroup, Button } from 'reactstrap';
import '../../style/Learn/LearnSelect.css';

class LearnSelect extends React.Component {
  constructor (props) {
    super(props);

    this.state = { level: -1, type: -1, learning: false };

    this.onLevelBtnClick = this.onLevelBtnClick.bind(this);    
    this.onTypeBtnClick = this.onTypeBtnClick.bind(this);    
    this.onStartBtnClick = this.onStartBtnClick.bind(this);    
    this.onStopBtnClick = this.onStopBtnClick.bind(this);
  }

  onLevelBtnClick(selected) {
    this.setState({ level: selected });
  }
  onTypeBtnClick(selected) {
    this.setState({ type: selected });
  }
  onStartBtnClick() {    
    if(this.state.level !== -1 && this.state.type !== -1) {
      this.setState({learning: true});
      this.props.onStart(this.state);      
    } else {  
      alert("항목을 모두 선택하세요.");
    }
  }
  onStopBtnClick() {        
    this.props.onStop(this.state);          
  }

  render() { 
    let learning = this.props.learning;
    return (
      <div className="main">
        <div className="left"> 
          <ButtonGroup vertical>
            <ButtonGroup>
              <Button onClick={() => this.onLevelBtnClick(30)} active={this.state.level === 30} disabled={learning}>3급</Button>
              <Button onClick={() => this.onLevelBtnClick(32)} active={this.state.level === 32} disabled={learning}>3급2</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button onClick={() => this.onLevelBtnClick(40)} active={this.state.level === 40} disabled={learning}>4급</Button>
              <Button onClick={() => this.onLevelBtnClick(42)} active={this.state.level === 42} disabled={learning}>4급2</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button onClick={() => this.onLevelBtnClick(50)} active={this.state.level === 50} disabled={learning}>5급</Button>
              <Button onClick={() => this.onLevelBtnClick(52)} active={this.state.level === 52} disabled={learning}>5급2</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button onClick={() => this.onLevelBtnClick(60)} active={this.state.level === 60} disabled={learning}>6급</Button>
              <Button onClick={() => this.onLevelBtnClick(62)} active={this.state.level === 62} disabled={learning}>6급2</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button onClick={() => this.onLevelBtnClick(70)} active={this.state.level === 70} disabled={learning}>7급</Button>
              <Button onClick={() => this.onLevelBtnClick(80)} active={this.state.level === 80} disabled={learning}>8급</Button>
            </ButtonGroup>
          </ButtonGroup>
        </div>
        <div className="center">
          <ButtonGroup vertical>
            <Button onClick={() => this.onTypeBtnClick(1)} active={this.state.type === 1} disabled={learning}>가나다 순으로</Button>                      
            <Button onClick={() => this.onTypeBtnClick(2)} active={this.state.type === 2} disabled={learning}>낮은 정답률순</Button>                      
            <Button onClick={() => this.onTypeBtnClick(3)} active={this.state.type === 3} disabled={learning}>낮은 시도율순</Button>                      
            <Button onClick={() => this.onTypeBtnClick(4)} active={this.state.type === 4} disabled={learning}>무작위 순으로</Button> 
            <br/>                                 
            <Button className="startBtn" onClick={() => this.onStartBtnClick()} disabled={learning}>학습 시작</Button>                
            <Button className="stopBtn" onClick={() => this.onStopBtnClick()} disabled={!learning}>학습 종료</Button>                
          </ButtonGroup>
        </div>
      </div>
    
    );
  }
}

export default LearnSelect;