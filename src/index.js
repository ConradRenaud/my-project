import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

// module.exports = {
//   presets: [
//     [
//       "next/babel",
//       {
//         "preset-react": {
//           runtime: "automatic",
//           importSource: "@emotion/react",
//           throwIfNamespace: false,
//         },
//       },
//     ],
//   ],
//   plugins: ["@emotion/babel-plugin"],
// };

class Message extends React.Component {
  render() {
    return <h1>{this.props.contenu}</h1>;
  }
}

class Messages extends React.Component {
  render() {
    return text1.map((element) => {
      return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <li><a href="#" className="link"> <Message contenu={element} /> </a>
        </li>
      );
    });
  }
}

class Affiche extends React.Component {
  render() {
    return <h1 className="color">{text}</h1>;
  }
}

class Logo extends React.Component {
  // constructor() {
  //   super();
  //   this.state = { throwIfNamespace: false };
  // }
  render() {
    return (
      <svg viewBox="0 0 500 500" className="logo">
        <defs>
          <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle"></path>
        </defs>
        <text className="fsize" dy="120" textLength="1220">
          <textPath xlinkHref="#textcircle">
            °HIGH-FIVE UNIVERSITY COTONOU°
          </textPath>
        </text>
      </svg>
    );
  }
}

// pour highfive de Eric
// class Highfive extends React.Component {
//   render() {
//     return <h2>HIGHFIVE</h2>;
//   }
// }

class App extends React.Component {
  render() {
    return <Messages />;
  }
}

/************   sans constructeur et sans le state    *************/
// class Clock extends React.Component {
//   render() {
//     time.render(<Clock />);
//     let d = new Date().toLocaleString();
//     return <h1>{d}</h1>;
//   }
// }

/**********   avec constructeur et le state, puis le setState   ************/
class Clock extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {heure : "Nous sommes à HighFive, et il est :" };
    this.state = { d: new Date().toLocaleString() };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ d: new Date().toLocaleString() });
    }, 1000);
  }
  render() {
    time.render(<Clock />);
    return (
      <div>
        <h1 className="clr">Nous sommes à HighFive, et il est : {this.state.d}</h1>
      </div>
    );
  }
}

const text1 = ["About", "Formations", "Candidature", "Login"];
const text = "j'apprends le plus populaire framework de JavaS";

const link = ReactDOM.createRoot(document.getElementById("container_liens"));
link.render(<App />);

const time = ReactDOM.createRoot(document.getElementById("root"));
time.render(<Clock />);

const affiche = ReactDOM.createRoot(document.getElementById("texte"));
affiche.render(<Affiche />);

const head = ReactDOM.createRoot(document.getElementById("header"));
head.render();

// const exo = ReactDOM.createRoot(document.getElementById("exos"));
// exo.render();

const logo = ReactDOM.createRoot(document.getElementById("logo_anim"));
logo.render(<Logo />);

// const Hfive = ReactDOM.createRoot(document.getElementById("hfive_water"));
// Hfive.render(<Highfive />);
