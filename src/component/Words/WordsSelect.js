import React from 'react';
import { ButtonGroup, Button } from 'reactstrap';
import '../../style/Words/WordsSelect.css';

class WordsSelect extends React.Component {
  constructor (props) {
    super(props);

    this.state = { type: -1, learning: false };
    
    this.onTypeBtnClick = this.onTypeBtnClick.bind(this);    
    this.onStartBtnClick = this.onStartBtnClick.bind(this);    
    this.onStopBtnClick = this.onStopBtnClick.bind(this);
  }
  
  onTypeBtnClick(selected) {
    this.setState({ type: selected });
  }
  onStartBtnClick() {    
    if(this.state.type !== -1) {
      this.setState({learning: true});
      this.props.onStart(this.state);      
    } else {  
      alert("항목을 선택하세요.");
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
            <Button onClick={() => this.onTypeBtnClick(1)} active={this.state.type === 1} disabled={learning}>가나다 순으로</Button>                      
            <Button onClick={() => this.onTypeBtnClick(2)} active={this.state.type === 2} disabled={learning}>낮은 정답률순</Button>                      
            <Button onClick={() => this.onTypeBtnClick(3)} active={this.state.type === 3} disabled={learning}>낮은 시도율순</Button>                      
            <Button onClick={() => this.onTypeBtnClick(4)} active={this.state.type === 4} disabled={learning}>무작위 순으로</Button>                                  
          </ButtonGroup>
        </div>
        <div className="right"> 
          <ButtonGroup className="selectBtn" vertical>
            <Button className="startBtn" onClick={() => this.onStartBtnClick()} disabled={learning}>학습 시작</Button>                
            <Button className="stopBtn" onClick={() => this.onStopBtnClick()} disabled={!learning}>학습 종료</Button>                
          </ButtonGroup>         
        </div>
      </div>
    
    );
  }
}

export default WordsSelect;