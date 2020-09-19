import React from 'react';
import { Input, Icon, Button, Header } from 'semantic-ui-react';
import './App.css';

export default class App extends React.Component {
  state = {
    number: 1,
    message: '',
    messageColor: 'black'
  };

  getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 1000000);
    this.setState({
      number: randomNumber
    });
  }

  onInputChange = event => {
    this.setState({
      number: event.target.value
    })
  }

  setMessage(message, color) {
    this.setState({
      message: message,
      messageColor : color
    });
  }

  getResult = () => {
    const number = Number(this.state.number);
    
    if (isNaN(number)) {
      this.setMessage('Nope, ' + this.state.number + ' is not a number', 'red');
      return;
    }

    if (number <= 1 || (number > 2 && number % 2 === 0)) {
      this.setMessage('Nope, ' + number + ' is not a prime number', 'red');
      return;
    }

    const maxLimit = Math.floor(Math.sqrt(number)) + 1;

    for (let i = 3; i < maxLimit; i++) {
      if (number % i === 0) {
        this.setMessage('Well, ' + number + ' is not a prime number', 'red');
        return;
      }
    }

    this.setMessage('Yes, ' + number + ' is a prime number', 'green');
  }

  render() {
    const randomIcon = <Icon name='random' />
    return(
      <div className='app'>
        <Header as='h1' content='Prime Number Identification' />
        <br/>
        <Input 
          placeholder={this.state.number}
          label='Enter a number'
          onChange={this.onInputChange}
        />
        <Button 
          icon={randomIcon} 
          className='random-icon'
          onClick={this.getRandomNumber}
        />
        <br/>
        <Button 
          content="Check If It's Prime" 
          className="checkprime-button"
          onClick={this.getResult}
          color='red' inverted />
        <Header 
          size='medium' 
          color={this.state.messageColor}>
          {this.state.message}
        </Header>
      </div>
    );
  }
}
