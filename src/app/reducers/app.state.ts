import { LoginUser, Person } from "./user-token.model";

// 1. this will define the app state
export  interface AppState {
    persons: Person[];
  }