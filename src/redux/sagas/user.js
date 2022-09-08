import { getUsersAPI, getUserByIdAPI, createUserAPI, updateUserAPI, deleteUserByIdAPI } from '../../apis/index'
import { CREATE_USER, DELETE_USER_BY_ID, GET_USERS, GET_USER_BY_ID, UPDATE_USER_BY_ID } from '../types'
import { put, takeEvery } from 'redux-saga/effects'
import { addUser, deleteUser, editUser, getUsers } from '../slice/usersSlice'
import { setUser } from '../slice/userSlice'
export function* getUsersSaga() {
    const users = yield getUsersAPI()
    yield put(getUsers(users.data))
}

export function* getUserByIdSaga(action) {
    yield getUserByIdAPI(action.id)
    yield put(setUser(action.id))
}
export function* createUserSaga(action) {
    yield createUserAPI(action.user)
    yield put(addUser(action.user))
}

export function* updateUserSaga(action) {
    yield updateUserAPI(action.user)
    yield put(editUser(action.user))
}

export function* deleteUserByIdSaga(action) {
    yield deleteUserByIdAPI(action.id)
    yield put(deleteUser(action.id))
}

export function* watchUsersAsync() {
    yield takeEvery(GET_USERS, getUsersSaga)
    yield takeEvery(GET_USER_BY_ID, getUserByIdSaga)
    yield takeEvery(CREATE_USER, createUserSaga)
    yield takeEvery(UPDATE_USER_BY_ID, updateUserSaga)
    yield takeEvery(DELETE_USER_BY_ID, deleteUserByIdSaga)
}