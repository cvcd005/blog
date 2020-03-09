import React from 'react';
import { connect } from 'react-redux';

import { actionCreatorsSignIn } from '../Store/actions';

class Loader extends React.Component {
  componentDidMount() {
    const { changeStateToSignIn } = this.props;
     try {//for JSON.parse
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        changeStateToSignIn(user);
      }
    } catch (e) {
      console.log('Can not read localStorage');
    }
  }

  render() {
    return <div>{this.props.children}</div>
  }
};

export default connect(()=>({}), actionCreatorsSignIn)(Loader);


