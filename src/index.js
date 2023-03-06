import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import {useState} from "react";


// pour afficher la nav,
class Message extends React.Component {
  render() {
    return <h1>{this.props.contenu}</h1>;
  }
}

// pour ma nav
class Messages extends React.Component {
  render() {
    return text1.map((element,i) => {
      return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <li key={i}><a href="#" className="link"> <Message  contenu={element} /> </a>
        </li>
      );
    });
  }
}

// renvoie l'affichage du composant <App />
class App extends React.Component {
  render() {
    return <Messages />;
  }
}

// pour afficher la phrase : "j'apprends ...."
class Affiche extends React.Component {
  render() {
    return <h1 className="color">{text}</h1>;
  }
}


// logo animé
class Logo extends React.Component {
  render() {
    return (
      <svg viewBox="0 0 500 500" className="logo">
        <defs>
          <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle"></path>
        </defs>
        {/* on a dû mettre dy=0 et textLength=0 avant de pouvoir afficher convenablement le logo sur la page */}
        <text className="fsize" dy="0" textLength="0">
          <textPath xlinkHref = "#textcircle">
            °HIGH-FIVE UNIVERSITY COTONOU°
          </textPath>
        </text>
      </svg>
    );
  }
}


// pour highfive animé de Eric
class Highfive extends React.Component {
  render() {
    return( 
      <div>
        <h2>HIGHFIVE</h2>
        <h2>HIGHFIVE</h2>
      </div>)
  };
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
    this.state = { d: new Date().toLocaleString() };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ d: new Date().toLocaleString() });
    }, 1000);
  }
  render() {
    return (
      <div>
        <h1 className="clr">Bienvenu à HighFive 🤡 ! Nous sommes le : {this.state.d}</h1>
      </div>
    );
  }
}


// travailler sur les formulaires
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' , users: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // console.log(event.target);
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert(`New User: ${this.state.value}`);
    this.setState({kk: this.state.users.push(this.state.value)});
    // ou
    // this.state.users.push(this.state.value);
    event.preventDefault();
    this.setState({ value: '' });
  }
  

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label>
              Username: 
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            {/* <textarea multiple={true} value={[this.state.value]} /> */}
            <input type="submit" value="Ajouter" />
        </form>
        {this.state.users.map((x,k) => {
          return (
          <p key={k}> {x} 
          <button onClick={()=>{this.setState({kk: this.state.users.splice(k, 1)})} }> delete </button> 
          </p>
          )
        })}
      </div>
    );
  };
}


// class Reservation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isGoing: true,
//       numberOfGuests: 2
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//   }

//   render() {
//     return (
//       <form>
//         <label>
//           Is going:
//           <input
//             name="isGoing"
//             type="checkbox"
//             checked={this.state.isGoing}
//             onChange={this.handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Number of guests:
//           <input
//             name="numberOfGuests"
//             type="number"
//             value={this.state.numberOfGuests}
//             onChange={this.handleInputChange} />
//         </label>
//       </form>
//     );
//   }
// }

// un compteur , démarrer arrêter et reset
class Incrementation extends React.Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
    this.state = {
      count: 0,
      etatStop: true,
      etatStart: false,
      etatReset: true,
    };
  }

  click=()=> {
    this.interval = setInterval(
      () => {this.setState({count: this.state.count +1, 
        etatStart: true, 
        etatStop: false, 
        etatReset: false});
      }, 1000
    )
  }

  stop=()=> {
    clearInterval(this.interval)
    this.setState({etatStop: true,
                   etatStart: false,
                   etatReset: false,
    })
  }

  reset=()=> {
    // eslint-disable-next-line react/no-direct-mutation-state
    this.setState({count: this.state.count = 0, 
      etatReset: false, 
      etatStart: false, 
      etatStop: false});
      clearInterval(this.interval)
  };

render() {
  return (
    <div>
      <h2 className="title">React Js</h2>
      <button className="start"  disabled = {this.state.etatStart} onClick={this.click}>START</button>
      <h1 className="count">{this.state.count}</h1>
      <button className="Stop" disabled = {this.state.etatStop} onClick={this.stop}>STOP</button>
      <button className="Reset" disabled = {this.state.etatReset} onClick={this.reset}>RESET</button>
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

const exo = ReactDOM.createRoot(document.getElementById("exos"));
exo.render(<Incrementation />);

const logo = ReactDOM.createRoot(document.getElementById("logo_anim"));
logo.render(<Logo />);

const Hfive = ReactDOM.createRoot(document.getElementById("hfive_water"));
Hfive.render(<Highfive />);

const field = ReactDOM.createRoot(document.getElementById("form"));
field.render(<Form />);

// const res = ReactDOM.createRoot(document.getElementById("reserv"));
// res.render(<Reservation />);

