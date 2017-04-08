import React from 'react';

export default class StartGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
    };
  }

  handleStartGame() {
    // console.log('started the game');
    this.setState({
      started: true,
    });
  }

  render() {
    // console.log(this.props, 'startGame component Is getting CRAY');
    return (
      <div>{!this.state.started && <button onClick={() => { this.props.startGame(); this.handleStartGame(); }}>Start Game</button>}
        {/* <div>Who's going? {this.props.game}</div>*/}
      </div>
    );
  }
}

