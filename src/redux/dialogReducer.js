const ADD_NEW_MESSAGE = 'dialog/ADD-NEW-MESSAGE'

let initialState = {
  messagesData: [
    {id: 1, message: 'Hi', myMessage: true},
    {id: 2, message: 'How are you?', myMessage: true},
    {id: 3, message: 'All right?', myMessage: false},
    {id: 4, message: 'Good luck!', myMessage: true},
  ],
  dialogsData: [
    {id: 1, name: 'Vasya', src: 'https://ae01.alicdn.com/kf/HTB1UBilQFXXXXa6XFXXq6xXFXXXy.jpg'},
    {
      id: 2,
      name: 'Petya',
      src: 'https://www.pinclipart.com/picdir/middle/227-2277072_marvel-daredevil-clipart-vector-png-download.png',
    },
    {id: 3, name: 'Fedya', src: 'https://i.pinimg.com/originals/f0/cb/bf/f0cbbfd1f5de237d2b51ae420ccfc06e.png'},
    {id: 4, name: 'Sasha', src: 'https://img.elo7.com.br/product/zoom/B0E008/escudo-homem-de-ferro-avulso-herois.jpg'},
    {id: 5, name: 'Valera', src: 'https://cdn0.iconfinder.com/data/icons/famous-character-vol-1-colored/48/JD-14-512.png'},
    {
      id: 6,
      name: 'Vanya',
      src: 'https://cdn4.iconfinder.com/data/icons/famous-characters-add-on-vol-1-flat/48/Famous_Character_-_Add_On_1-16-512.png',
    },
  ],
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_NEW_MESSAGE:
      let body =action.newMessageBody
      return {
        ...state,
        newMessageBody: '',
        messagesData: [...state.messagesData, {id: 4, myMessage: false, message: body}],
      }
    default:
      return state
  }
}

export const sendNewMessage = (newMessageBody) => ({type: ADD_NEW_MESSAGE,newMessageBody})

export default dialogsReducer
