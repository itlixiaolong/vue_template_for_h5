import axios from './config'
// 获取用户列表数据
export const getUserListData = (params) => axios.get('/userList', { params })
// 增加用户列表数据
export const postUserData = (params) => axios.post('/userList', params)
// 修改用户数据
export const putUserListData = (id, params) => axios.get(`/user/${id}`, params)
// 删除用户数据
export const deleteUserListData = (id) => axios.get(`/user/${id}`)
