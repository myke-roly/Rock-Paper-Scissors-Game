import React from "react";

//Components
import Header from "./components/Header/Header";
import SelectOption from "./components/SelectOption/SelectOption";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      options: ["icon-rock.svg", "icon-paper.svg", "icon-scissors.svg"]
    };
  }

  handleScore = status => {
    let { score } = this.state;
    if (status) this.setState({ score: score + 1 });
  };

  render() {
    return (
      <div className="app">
        <Header handleScore={this.handleScore} score={this.state.score} />
        <SelectOption options={this.state.options} score={this.handleScore} />
      </div>
    );
  }
}

export default App;
