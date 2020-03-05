import React from 'react';
import { connect } from 'react-redux';

import { actionCreatorsSignIn } from '../Store/actions';

class Loader extends React.Component {
  componentDidMount() {
    const { changeStateToLogIn } = this.props;
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        changeStateToLogIn(user);
      }
    } catch (e) {
      console.timeLog('Can not read localStorage');
    }
  }

  render() {
    return <div>{this.props.children}</div>
  }
};

export default connect(()=>({}), actionCreatorsSignIn)(Loader);


