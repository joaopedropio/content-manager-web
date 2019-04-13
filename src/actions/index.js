import CLICK_UPDATE_PATH from './actionTypes';

const clickPathButton = path => ({
    type: CLICK_UPDATE_PATH,
    path: path
});

export default clickPathButton;