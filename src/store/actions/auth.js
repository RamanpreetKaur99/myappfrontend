import axios from 'axios';
import {
  AUTH_FAILED,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  CLEAR_PROFILE,
} from './types'
import setAuthToken from '../utils/setAuthToken';

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/api/auth');
    dispatch({
      payload: res.data,
      type: USER_LOADED,
    });
  } catch (error) {
    dispatch({
      type: AUTH_FAILED,
    });
  }
};

export const login = ({ email, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post('/api/auth', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((err) => {
      });
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const register = ({ name, email, password1, password2, family, username }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ name, email, password1, password2, family, username });
  try {
    const res = await axios.post('/accounts/signup/', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    //dispatch(loadUser());
    console.log(res.data)
  } catch (error) {
    const errors = error
    if (errors) {
    dispatch({
      type: REGISTER_FAIL,
    });
    }
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  dispatch({
    type: CLEAR_PROFILE,
  });
};
