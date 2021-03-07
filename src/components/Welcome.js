import React, { Component } from "react";

export class Welcome extends Component {
  render() {
    return (
      <div className='welcome-wrapper'>
        <div className='navbar-simple'>
          <h1 className='header'>Coffee Time</h1>
        </div>

        <div className='welcome-main-wrapper'>
          <div className='welcome-message-wrapper'>
            <h1 className='fd'>Velkommen!</h1>
            <p>Logg inn:</p>
          </div>

          <div className='welcome-login-wrapper'>
            <input
              className='welcome-employee-number-input'
              type='text'
              placeholder='Ansattnummer'
            />
            <input
              className='welcome-password-input'
              type='text'
              placeholder='Passord'
            />
            <button
              className='welcome-login-btn'
              onClick={this.props.showItemlist}
            >
              Logg inn
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
