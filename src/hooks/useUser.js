import { useDispatch } from 'react-redux';
import userActionTypes from '../redux/user/actionTypes.js';

export function useUser() {
  const dispatch = useDispatch();

  const login = (payload) => {
    dispatch({
      type: userActionTypes.LOGIN,
      payload,
    });
  };

  const logout = () => dispatch({ type: userActionTypes.LOGOUT });

  return {
    login,
    logout,
  };
}
