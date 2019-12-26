import {
    SET_USER,
    SET_AUTHENTICATED,
    SET_UNAUTHENTICATED,
    LOADING_USER,
    SAMPLE_WEBAPP_LOADING_USER
  } from '../types';
  
  const initialState = {
    authenticated: false,
    loading: false,
    credentials: {},
    infosampleuser: true,
    likes: [],
    notifications: [],
  };
  
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case SET_AUTHENTICATED:
        return {
          ...state,
          authenticated: true
        };
      case SET_UNAUTHENTICATED:
        return initialState;
      case SET_USER:
        console.log('chegou no reducer SET USER!!!! PORRRAAAAAA!!!!!!!!');
        console.log(action.payload);
        return {
          authenticated: true,
          loading: false,
          ...action.payload
        };
      case LOADING_USER:
        return {
          ...state,
          loading: true
        };
    case SAMPLE_WEBAPP_LOADING_USER:
        console.log(' chegou ao reducer SAMPLE_WEBAPP_LOADING_USER');
        console.log(action.payload);
        // alert('BOA!!');
        return {
          ...state,
          sampleProjectDados: action.payload,
        };
      default:
        return state;
    }
  }