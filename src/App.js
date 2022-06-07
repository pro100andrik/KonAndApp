import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MyWork from './components/MyWork';
import AboutMe from './components/AboutMe';

import './App.css';

class App extends React.Component {
constructor(props) {
  super(props);
  this.state = ({
    showPage: 'myWork'
  })
}

handleSwitchShowPage = target => {
  this.setState({
    showPage: target
  })
}

  render(){
    return (
      <>
        <header> <Header showPage={this.state.showPage}
                         handleSwitchShowPage={this.handleSwitchShowPage}/> </header>

        <div> {this.state.showPage === "myWork" ? <MyWork /> : <AboutMe />}
        <footer> <Footer /> </footer>
        </div>
      </>
    )
  }
}




export default App;
