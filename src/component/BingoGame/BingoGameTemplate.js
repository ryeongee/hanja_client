import React from 'react';
import '../../style/BingoGame/BingoGameTemplate.css';

class BingoGameTemplate extends React.Component {
  render() {
    return (
      <main className="bingogame-template">
        <div className="title">
          빙고 게임
        </div>
        <section className="select-wrapper">
          {this.props.select}
        </section>
        <section className="board">
          {this.props.board}
        </section>
      </main>
    );
  }
}

export default BingoGameTemplate;