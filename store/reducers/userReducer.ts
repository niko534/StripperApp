import {
  DELETE_USER,
  UserActionTypes,
  CREATE_USER,
} from "../actions/userActions";

enum regStatus {
  null,
  smsSent,
  smsPassValid,
  formFilled,
}

export interface currentSession {
  userProfile: {
    id: string;
    profileimage: string;
    displayname: string;
    role: string;
    regStatus: string;
  } | null;
  isLoggedIn: boolean;
}

const initialState: currentSession = {
  userProfile: null,
  isLoggedIn: false,
};

export const userReducer = (
  state = initialState,
  action: UserActionTypes
): userState => {
  switch (action.type) {
    case CREATE_USER:
      let newUser: User = action.payload;
      return { ...state, allUsers: [...state.allUsers, newUser] };
    case DELETE_USER:
      return {
        ...state,
        allUsers: state.allUsers.filter(
          (user: User) => user.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
