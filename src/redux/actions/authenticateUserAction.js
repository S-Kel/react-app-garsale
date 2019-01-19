import { api } from "../../api/init";
import { AUTH_ACTION, LOGOUT_ACTION, AUTH_ERROR_ACTION } from "./constants/types";

const authenticateUser = (userRoute, postData) => async dispatch => {
  try {
    const response = await api.post(userRoute, postData);

    const userEmail = response.data;

    dispatch({
      type: AUTH_ACTION,
      payload: userEmail
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR_ACTION,
      payload: error
    });
  }
};

const logoutUser = () => async dispatch => {
  try {
    await api.get('/users/logout');

    dispatch({
      type: LOGOUT_ACTION,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR_ACTION,
      payload: error
    });
  }
}

export { authenticateUser, logoutUser }
