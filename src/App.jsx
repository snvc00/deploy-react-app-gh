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

  getResult = () => {
    const number = Number(this.state.number);
    
    if (isNaN(number)) {
      this.setState({
        message: 'Nope, ' + this.state.number + ' is not a prime number',
        messageColor : 'red'
      });
      return;
    }

    if (number <= 0 || number % 2 === 0) {
      this.setState({
        message: 'Nope, ' + number + ' is not a prime number',
        messageColor : 'red'
      });
      return;
    }

    for (let i = number - 1; i > 1; i--) {
      if (number % i === 0) {
        this.setState({
          message: 'Well, ' + number + ' is not a prime number',
          messageColor : 'red'
        });
        return;
      }
    }

    this.setState({
      message: 'Yes, ' + number + ' is a prime number',
      messageColor : 'green'
    });
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
