import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreatorsSignOut } from '../Store/actions';
import { clearLocalStorage } from '../Api/Api';

const HomePage = props => {
  const { changeStateToSignOut, user } = props;
    return (
      <div>
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
      </div>
    );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
};

HomePage.propTypes = {
  user: PropTypes.object.isRequired,
  changeStateToSignOut: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, actionCreatorsSignOut)(HomePage);
