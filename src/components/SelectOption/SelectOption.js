import React from "react";

import "./SelectOption.scss";
import Option from "./Option";
import Vs from "./Vs";

class SelectOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
      tuImg: "",
      display: true,
      status: ""
    };
  }

  //Comenzar Juego
  clickSelect = e => {
    const random = Math.floor(Math.random() * 3);
    const { options } = this.props;
    this.setState(
      {
        img: e.target.alt,
        tuImg: options[random],
        display: false
      },
      () => {
        this.resultadoGame(this.state.img, this.state.tuImg);
      }
    );
  };

  //Definir Gandor
  resultadoGame = (me, you) => {
    let result = "draw";
    if (me === "icon-rock.svg") {
      if (you === "icon-paper.svg") result = "losser";
      else if (you === "icon-scissors.svg") result = "winner";
    } else if (me === "icon-paper.svg") {
      if (you === "icon-rock.svg") result = "winner";
      else if (you === "icon-scissors.svg") result = "losser";
    } else if (me === "icon-scissors.svg") {
      if (you === "icon-paper.svg") result = "winner";
      else if (you === "icon-rock.svg") result = "losser";
    } else result = "Error!";

    this.setState({
      status: result
    });
  };

  //Asignando el color para cada imagen
  colorImg = img => {
    if (img === "icon-rock.svg") return { borderColor: "#07b101" };
    else if (img === "icon-paper.svg") return { borderColor: "#ebc000" };
    else return { borderColor: "#c01d00" };
  };

  //Volver a jugar y suamar punto si ganas
  playAgain = () => {
    this.setState({ display: true });
    this.props.score(this.state.status === "winner");
  };

  render() {
    return (
      <div className="container">
        {this.state.display ? (
          <div className="list-options">
            {this.props.options.map(option => {
              return (
                <Option
                  key={option}
                  option={option}
                  onClick={this.clickSelect}
                />
              );
            })}
          </div>
        ) : null}

        {!this.state.display ? (
          <Vs
            img={this.state.img}
            score={this.props.score}
            status={this.state.status}
            imgAleatoria={this.state.tuImg}
            colorImg={this.colorImg}
            playAgain={this.playAgain}
          />
        ) : null}
      </div>
    );
  }
}

export default SelectOption;
