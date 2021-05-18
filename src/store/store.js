import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        logged: reducer,
        isModalOpen: reducer,
        currentShareUrl: reducer
        currentShareTitle: reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch