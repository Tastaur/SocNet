import profileReducer, {addPost, deletePost} from './profileReducer'
import React from 'react'

let initialState = {
  posts: [
    {id: 1, message: 'Hello, this my first post', likeCount: 5},
    {id: 2, message: 'I do that page for training my skiil on JS and React', likeCount: 10},
  ],
}

let newAction = () => addPost('hi')

test('length of post should be incremented', () => {

  let newState = profileReducer(initialState, newAction())
  expect(newState.posts.length).toBe(3)
})
test('new message should be "hi"', () => {
  let newState = profileReducer(initialState, newAction())
  expect(newState.posts[0].message).toBe('hi')
})


test('after deleting length of message should be decrement', () => {
  let newAction = deletePost(1)
  let newState = profileReducer(initialState, newAction)
  expect(newState.posts.length).toBe(1)
})

test(`if post id incorrect length of message shouldn't be decrement `, () => {
  let newAction = deletePost(15)
  let newState = profileReducer(initialState, newAction)
  expect(newState.posts.length).toBe(2)
})
