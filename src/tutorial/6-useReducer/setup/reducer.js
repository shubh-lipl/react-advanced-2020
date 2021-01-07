export const reducer = (state, action) => {
 if (action.type === 'ADD_ITEM') {
  return {
   ...state,
   people: [...state.people, action.payload],
   isModalShown: true,
   modalContent: 'Item Added'
  }
 }
 if (action.type === 'NO_VALUE') {
  return {
   ...state,
   isModalShown: true,
   modalContent: 'Please Enter Value'
  }
 }
 if (action.type === 'CLOSE_MODAL') {
  return {
   ...state,
   isModalShown: false,
   modalContent: ''
  }
 }
 if (action.type === 'REMOVE_ITEM') {
  const newPeople = state.people.filter((person) => person.id !== action.payload);
  return {
   ...state,
   people: newPeople,
   isModalShown: true,
   modalContent: 'removed Item'
  }
 }

 throw new Error('NO MATCHNG ACTIONT TYPE');
}
