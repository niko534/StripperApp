import { Action, Dispatch } from "redux";

import { AppState } from "../index";
import { ThunkAction } from "redux-thunk";

export const CREATE_USER = "CREATE_USER";
export const DELETE_USER = "DELETE_USER";

import { User } from "../reducers/userReducer";

interface CreateUserAction {
  type: typeof CREATE_USER;
  payload: User;
}

interface DeleteUserAction {
  type: typeof DELETE_USER;
  payload: User["id"];
}

export type UserActionTypes = DeleteUserAction | CreateUserAction;

export const deleteUser = (userId: string) => async (
  dispatch: Dispatch
): Promise<void> => {
  try {
    // await api.deleteUser(Id) - for future use
    dispatch<DeleteUserAction>({ type: DELETE_USER, payload: userId });
  } catch (error) {
    console.log(error);
  }
};

export const createUser = (newUser: User) => async (
  dispatch: Dispatch
): Promise<void> => {
  try {
    //arrange data from new user here and put it in payload
    const newGoodUser = {};
    dispatch<CreateUserAction>({ type: CREATE_USER, payload: newUser });
  } catch (error) {
    console.log(error);
  }
};
