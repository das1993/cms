import { Status } from "common/types";

export type AuthState = {
  status: Status;
  loggedIn: boolean;
};
