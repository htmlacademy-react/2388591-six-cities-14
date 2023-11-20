import { store } from '../store';

export type TState = ReturnType<typeof store.getState>;

export type TAppDistpatch = typeof store.dispatch;


