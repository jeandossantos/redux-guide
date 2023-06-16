import { useDispatch } from 'react-redux';
import * as slice from '../redux/user/userSlice.js';

export function useUser() {
  const dispatch = useDispatch();

  const login = (payload) => {
    dispatch(slice.login(payload));
  };

  const logout = () => dispatch(slice.logout());

  return {
    login,
    logout,
  };
}
