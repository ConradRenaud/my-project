import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";



import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;




class Elder extends ReactDOM.component {
  render() {
    return <Brother />;
  }
}

class Brother extends ReactDOM.component {
  constructor(props) {
    super(props);
    this.state = { text: "vous aurez une série de tests" };
  }
  render() {
    return (
      <div>
        <h1 className="">{"text"}</h1>;
      </div>
    );
  }
}

const exo = ReactDOM.createRoot(document.getElementById("exos"));
exo.render(<Elder />);




/**                  tic tac toe                 */

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