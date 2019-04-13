import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CLICK_UPDATE_PATH from '../../actions/actionTypes'

const MediaPath = (props) => {

  const { path } = props;

  if(path === undefined)
    return <p>Loading...</p>

  return (
    <div className='card'>
      <p>{path}</p>
      <button type='button' onClick={() => props.onPathClick(path)}>Play</button>
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
