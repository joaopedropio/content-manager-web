import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CLICK_UPDATE_PATH from '../../actions/actionTypes';

import './MediaPath.css';

const MediaPath = (props) => {

  const { path } = props;

  if(path === undefined)
    return <p>Loading...</p>

  return (
    <div className='list-group-item'>
      <div className='row'>
        <p className='col-sm-11'>{path}</p>
        <button className='col-sm-1' type='button' onClick={() => props.onPathClick(path)}>Play</button>
      </div>
    </div>
  )
};

MediaPath.propTypes = {
  path: PropTypes.string.isRequired,
  onPathClick: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    onPathClick: (path) => dispatch({
      type: CLICK_UPDATE_PATH,
      path: path
    })
  };
};

export default connect(null, mapDispatchToProps)(MediaPath);
