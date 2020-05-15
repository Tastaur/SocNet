import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    'API-KEY': 'bd677eaf-5fbe-4157-bb5b-0038b3fdbdfc',
  },
})

export const userAPI = {
  getUser(currentPage, pageSize= 80) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
      return response.data
    })
  },
  unfollowUser(id) {
    return instance.delete(`follow/${id}`).then(response => {
      return response.data
    })
  },
  followUser(id) {
    return instance.post(`follow/${id}`).then(response => {
      return response.data
    })
  },
}

export const profileAPI = {
  setUser(userId) {
    return instance.get(`profile/${userId}`).then(response => {
      return response.data
    })
  },
  getStatus(userId){
    return instance.get(`profile/status/${userId}`).then(response =>{
      return response.data
    })
  },
  updateStatus(newStatus){
    return instance.put(`profile/status`, {status:newStatus})
  },
  savePhoto(newPhoto){
    let formData = new FormData()
    formData.append('image', newPhoto)
    return instance.put(`profile/photo`, formData, {
      headers:{
      'Content-Type': 'multipart/form-data'
      }})
  }
}

export const authApi = {
  submit() {
    return instance.get(`auth/me`).then(response => {
      return response.data
    })
  },
  login(email, password, rememberMe = false){
    return instance.post(`auth/login`, {email, password, rememberMe})
  },
  logout(){
    return instance.delete(`auth/login`)
  }
}


