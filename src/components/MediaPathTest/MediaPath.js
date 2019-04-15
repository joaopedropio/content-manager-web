import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CLICK_UPDATE_PATH from '../../actions/actionTypes'

const MediaPath = (props) => {

  const { path } = props;

  if(path === undefined)
    return <p>Loading...</p>

  return (
    <div className='list-group-item'>
      <div className='row'>
        <p className='col-sm-10'>{path}</p>
        <button className='col-sm-2 btn btn-primary' type='button' onClick={() => props.onPathClick(path)}>Play</button>
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
