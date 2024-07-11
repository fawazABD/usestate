import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Developer"
      },
      show: false,
      mountTime: new Date()
    };
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ mountTime: new Date() });
    }, 1000); // Update every second
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountTime } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div>
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <img src={imgSrc} alt={fullName} />
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Time since mount: {Math.floor((new Date() - mountTime) / 1000)} seconds</p>
      </div>
    );
  }
}
export default App;