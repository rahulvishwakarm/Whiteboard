import { configureStore } from "@reduxjs/toolkit";
import canvasReducer from "../components/Canvas/CanvasSlice";

export const store = configureStore({
    reducer: {
        canvas: canvasReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch  = typeof store.dispatch;

export default store;