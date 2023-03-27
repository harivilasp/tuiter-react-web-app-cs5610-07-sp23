import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./tuits-service"

const currentUser = {
  "username": "ReactJS",
  "handle": "@reactjs",
  "avatar": "react.png",
};

const templateTuit = {
  ...currentUser,
  "topic": "Space",
  "time": "2h",
  "liked": false,
  "reply": 0,
  "retuit": 0,
  "like": 0,
  "dislike": 0
}

export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits', async () =>
        await service.findTuits()
)

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',
    async (tuitId) => {
      await service.deleteTuit(tuitId)
      return tuitId;
    }
)

export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit',
    async (tuit) =>
        await service.createTuit({...tuit, ...templateTuit})
)

export const updateTuitThunk = createAsyncThunk(
    'tuits/updateTuit',
    async (tuit) =>
        await service.updateTuit(tuit)
)