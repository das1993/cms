import { createAsyncThunk } from "@reduxjs/toolkit";
import service from "services/authService";

const authActions = {
  login: createAsyncThunk("auth/login", async () => {
    const response = await service.login();

    return response.status;
  }),
};

export default authActions;
