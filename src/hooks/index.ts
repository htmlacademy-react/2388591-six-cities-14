import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { TState, TAppDistpatch } from '../types/state';

export const useAppDispatch = () => useDispatch<TAppDistpatch>();

export const useAppSelector: TypedUseSelectorHook<TState> = useSelector;
