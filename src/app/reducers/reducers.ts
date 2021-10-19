
import { Person } from "./user-token.model";
import * as PersonActions from './actions';

export function reducer(state: Person[] = [], action: PersonActions.Actions) {
  switch (action.type) {
    case PersonActions.ADD_PERSON:
        return [...state, action.payload];
    case PersonActions.REMOVE_PERSON:
         state.forEach((p, index) => {
            if (p.id === action.payload.id) {
              state.splice(index, 1);
            }
         });
        return state;
    default:
        return state;
  }
}