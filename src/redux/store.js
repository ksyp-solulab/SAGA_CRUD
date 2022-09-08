import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import user from "./slice/userSlice";
import users from "./slice/usersSlice";
import { rootSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: {
        user,
        users
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
})
sagaMiddleware.run(rootSaga)

export default store