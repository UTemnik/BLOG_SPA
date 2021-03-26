import React from 'react';
import { getValue } from 'src/HW/FunctionExample';
import preventDefault from './preventDefault';
import stopPropagation from './stopPropagation';

function InputExapmle({ onChange, value }: any) {
	return (
		<input
			value={value}
			onChange={compose(onChange, getValue, stopPropagation, preventDefault)}
		/>
	);
}

//справа налево
function compose<U>(...fns: Function[]) {
	return <E,>(initialValue: any): U =>
		fns.reduceRight((prevValue, fn) => fn(prevValue), initialValue);
}

//слева направо
function pipe<U>(...fns: Function[]) {
	return <E,>(initialValue: any): U =>
		fns.reduce((prevValue, fn) => fn(prevValue), initialValue);
}

//забирает из объекта свойство
function pick<K extends string>(prop: K) {
	return <O extends Record<K, any>>(obj: O) => obj[prop];
}

const some = pick('value')({ value: 1 }); //-> 1

//проверяет на равенство
function isEqual<T>(left: T) {
	return <E extends T>(right: E) => left === right;
}

const comments = [
	{ id: 22, text: 'text One' },
	{ id: 42, text: 'text Two' },
];

/* const filteredComments = comments.filter(({id}) => id !== 22); 
ИЛИ
*/

const filteredComments = comments.filter(pipe(pick('id'), isEqual(22), cond));

function cond(b : boolean) {
	return !b;
}

//pickFromSyntheticEven через композицию
const getValueNumber = pipe<number>(
	pick('currentTarget'),
	pick('value'),
	parseInt
)
