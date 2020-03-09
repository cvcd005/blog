import React from 'react';
import { connect } from 'react-redux';

import { actionCreatorsSignOut } from '../Store/actions';
import { clearLocalStorage } from '../Api/Api';

const HomePage = props => {
  const { changeStateToSignOut, user } = props;
    return (
      <div className="header">
        This is Homepage
        <div className="header_btn">
          <span>{user.username}</span>
          <button  
            onClick={()=> {
              clearLocalStorage();
              changeStateToSignOut();
            }}
            type="button"
            className="btn-primary"
          >
            Exit
          </button>
        </div>
      </div>
    );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
};

export default connect(mapStateToProps, actionCreatorsSignOut)(HomePage);