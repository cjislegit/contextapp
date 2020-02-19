import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class Booklist extends Component {
  render() {
    return (
      //Works for Class and Function, also lets more than one context be used
      <AuthContext.Consumer>
        {authContext => (
          <ThemeContext.Consumer>
            {themeContext => {
              const { isAuthenticated, toggleAuth } = authContext;
              const { isLightTheme, light, dark } = themeContext;
              const theme = isLightTheme ? light : dark;
              return (
                <div
                  className='book-list'
                  style={{ color: theme.syntax, background: theme.bg }}
                >
                  <ul>
                    <li style={{ background: theme.ui }}>Harry Potter</li>
                    <li style={{ background: theme.ui }}>Endor's Game</li>
                    <li style={{ background: theme.ui }}>Brave New World</li>
                  </ul>
                  <div onClick={toggleAuth}>
                    {isAuthenticated ? 'Logged In' : 'Logged Out'}
                  </div>
                </div>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default Booklist;
