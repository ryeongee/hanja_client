import React from 'react';
import axios from 'axios';
import BingoGameTemplate from '../component/BingoGame/BingoGameTemplate';
import BingoGameSelect from '../component/BingoGame/BingoGameSelect';
import BingoGameBoard from '../component/BingoGame/BingoGameBoard';
import info from '../info';

class Game extends React.Component {
  state = {
    level: '',
    limit: 16,
    hanjas: [],
    gaming: false,
  };

  fetchGetInfo = async (data) => {
    let order = "random()";

    const get = await axios.get(`http://${info.ip()}:${info.port()}/get?level=${data.level}&order=${order}&limit=${this.state.limit}`);
    await this.setState({
      index: 0,
      level: data.level,
      hanjas: get.data,
      gaming: true,
    });
  }

  handleStart = async (data) => {
    await this.fetchGetInfo(data);
  }

  handleStop = async () => {
    this.setState({
      gaming: false
    });
  }

  render() {
    let { gaming, hanjas } = this.state;

    return (
      <BingoGameTemplate
        select={<BingoGameSelect gaming={gaming} onStart={this.handleStart} onStop={this.handleStop}/>}
        board={<BingoGameBoard hanjas={hanjas} />}>
      </BingoGameTemplate>
    );
  }
}

export default Game;