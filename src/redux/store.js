import profileReducer from './redux/profileReducer'
import dialogsReducer from './redux/dialogReducer'

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hello, this my first post', creater: `Sobolev M.A.`, likeCount: 5},
        {id: 2, message: 'I do that page for training my skiil on JS and React', creater: `Sobolev M.A.`, likeCount: 10},
      ],
      newPostText: '',
    },
    messagesPage: {
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
      newMessage: '',
    },
    news: [
      {id: 1, text: 'Vasya'},
      {id: 2, text: 'Petya'},
      {id: 3, text: 'Fedya'},
      {id: 4, text: 'Sasha'},
    ],
    music: [
      {id: 1, artist: 'Little big', song: 'Skibidi'},
      {id: 2, artist: 'The Hatters', song: 'Russian Style'},
      {id: 3, artist: 'Chuck Berry', song: 'You never can tall'},
      {id: 4, artist: 'Big Russian Boss', song: 'Big Russian Boss'},
      {id: 5, artist: 'Ska-P', song: 'Ni-Fu-Ni-Fa'},
      {id: 6, artist: 'Unknow', song: 'Unknow'},
    ],
    sideBar: [{id: 1, name: 'Vasya', src: 'https://ae01.alicdn.com/kf/HTB1UBilQFXXXXa6XFXXq6xXFXXXy.jpg'},
      {
        id: 2,
        name: 'Petya',
        src: 'https://www.pinclipart.com/picdir/middle/227-2277072_marvel-daredevil-clipart-vector-png-download.png',
      },
      {id: 3, name: 'Fedya', src: 'https://i.pinimg.com/originals/f0/cb/bf/f0cbbfd1f5de237d2b51ae420ccfc06e.png'}],
  },
  _callSubscriber() {
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
    this._callSubscriber(this._state)

  },
}

