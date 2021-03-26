import { assoc } from './assoc';

export const generateRandomString = () =>
	Math.random().toString(36).substring(2, 15);

export const assignId = assoc('key', generateRandomString());

export const generateId = <O extends object>(obj: O) =>
	assoc('key', generateRandomString())(obj);
