import React from 'react';
import './Score.scss';

class Score extends React.Component {

  render() {
    return(
      <div className="score col-sm-4 col-md-2 col-4">
        <h2 className="score__title">Score</h2>
        <button 
          onClick={this.props.handleScore}
          className="btn btn-outline-warning"
        >{this.props.score}</button>
      </div>
    )
  }
}

export default Score;