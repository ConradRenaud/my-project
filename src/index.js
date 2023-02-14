import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// class Square extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       value: null,
// //     };
// //   }
//   render() {
//     return (
//       //   <button className="square" onClick={function() {console.log('click');}}>
//       <button
//         className="square"
//         onClick={() => this.props.onClick({value: "X"})}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }

// class Board extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             squares: Array(9).fill(null),
//         };
//     }
//   renderSquare(i) {
//     return (
//     <Square
//         value={this.state.squares[i]}
//         onClick={() => this.handleClick(i)}
//     />
//     );
//   }

//   render() {
//     const status = "Next player: X";

//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// class Game extends React.Component {
//   render() {
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board />
//         </div>
//         <div className="game-info">
//           <div>{/* status */}</div>
//           <ol>{/* TODO */}</ol>
//         </div>
//       </div>
//     );
//   }
// }

// // ========================================

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Game />);

const text1 = ["Conrad", "Renaud", "Arec", "Geraldo"];

class Message extends React.Component {
  render() {
    return <h1>{this.props.contenu}</h1>;
    // return <h1>{this.props.contain}</h1>
  }
}

class Messages extends React.Component {
  render() {
    return text1.map((element) => {
      return <Message contenu={element} />;
    });
  }
}

class Affiche extends React.Component {
  render() {
    return <h1>{text}</h1>;
  }
}

class App extends React.Component {
  render() {
    return <Messages />;
  }
}

class Clock extends React.Component {
  render() {
    time.render(<Clock />);
    let d = new Date().toLocaleString();
    return <h1>{d}</h1>;
  }
}

const text = "j'apprends le plus populaire framework de JavaS";

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App />);

const time = ReactDOM.createRoot(document.getElementById("root"));
time.render(<Clock />);

const affiche = ReactDOM.createRoot(document.getElementById("texte"));
affiche.render(<Affiche />);
