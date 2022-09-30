import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import MessageDataService from '../services/messageService'

// initial state
const initialState = {
  messages: [],
  status: 'idle',
  error: null
}


// get Messages
export const apiGetMessages = createAsyncThunk(
  'messages/getMessages', 
  async (payload, { rejectWithValue }) => {
    const {token} = payload
    try {
      const response = await MessageDataService.getMessages(token)
      return response.data[0].messages
    } catch(e) {
      if (!e.response) throw e
      return rejectWithValue(e.response.data)
    }
})

// add Message
export const apiAddMessage = createAsyncThunk(
  'messages/addMessage', 
  async (payload, { rejectWithValue }) => {
    const {data, token} = payload
    try {
      MessageDataService.addMessage(data, token)
      .catch((e) => console.log(e))
      return data.message
    } catch(e) {
      if (!e.response) throw e
      return rejectWithValue(e.response.data)
    }
})


// authenticate User
export const apiAuthenticateUser = createAsyncThunk(
  'user/authenticate',
  async (payload, { rejectWithValue  }) => {
    try {
      const response = await MessageDataService.authenticateUser(payload)
      return response.data.token;
    } catch (e) {
      if (!e.response) throw e
      return rejectWithValue(e.response.data)
    }
  }
)


// delete Message
export const apiDeleteMessage = createAsyncThunk(
  'messages/deleteMessage', 
  async (payload, { rejectWithValue }) => {
    const {data, token} = payload
    try {
      MessageDataService.deleteMessage(data, token)
      .catch((e) => {console.error(e)})
      return data.messageId
    } catch(e) {
      if (!e.response) throw e
      return rejectWithValue(e.response.data)
    }
})

// messagesSlicer
export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  extraReducers: {
    // getMessages
    [apiGetMessages.pending] : (state, action) => {
      state.status = 'loading'
    },
    [apiGetMessages.fulfilled] : (state, action) => {
      state.status = 'succeded'
      state.messages = action.payload
    },
    [apiGetMessages.rejected] : (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    // addMessage
    [apiAddMessage.pending] : (state, action) => {
      state.status = 'loading'
    },
    [apiAddMessage.fulfilled] : (state, action) => {
      state.status = 'succeded'
      if (action.payload !== "") state.messages.push(action.payload)
    },
    [apiAddMessage.rejected] : (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    // deleteMessages
    [apiDeleteMessage.pending] : (state, action) => {
      state.status = 'loading'
    },
    [apiDeleteMessage.fulfilled] : (state, action) => {
      state.status = 'succeded'
      state.messages = state.messages.filter((message) => message !== action.payload)
    },
    [apiDeleteMessage.rejected] : (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    // authenticateUser
    [apiAuthenticateUser.pending] : (state, action) => {
      state.status = 'loading'
    },
    [apiAuthenticateUser.fulfilled] : (state, action) => {
      state.status = 'succeded'
      localStorage.setItem("user_token", action.payload)
    },
    [apiAuthenticateUser.rejected] : (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }
  }
})

// state selector
export const selectMessages = (state) => state.messages.messages
export const getMessagesStatus = (state) => state.messages.status
export const getMessagesError = (state) => state.messages.error


export default messagesSlice.reducer