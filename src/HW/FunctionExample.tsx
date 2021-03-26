import React from 'react';

// 1 фабрика

const add = (leftSide: number) => (rightSide: number) => leftSide + rightSide;

add(1)(2);

const addOne = add(1);
const addSix = add(6);

//---- 2 ------

/* interface IBlockProps {
	title: string;
	id: string;
}

const withIdKey = withKey('id');


function Feed(props: { blocks: IBlockProps[] }) {
	return (
		<div>
			{props.blocks.map(withIdKey(Block));
		</div>
	);
}

function Block(props: IBlockProps) {
	return <div>{props.title}</div>;
}

function withKey(key?: string) {
	return <T, E extends React.ComponentType<E>>(component: T) => (
		props: E,
		index: number
	) =>
		React.createElement(
			component,
			{ ...props, key: key ? props[key as keyof E] : index },
			[]
		);
} */


//------3-----

function Input({
	onChange,
	value,
}: {
	onChange: (value: string) => void;
	value: string;
}) {
	return <input value={value} onChange={getValue(onChange)} />;
}

function Chekbox(props: {
	onChange: (value: boolean) => void;
	value: boolean;
}) {
	return (
		<input
			value="checkbox"
			checked={props.value}
			onChange={getChecked(props.onChange)}
		/>
	);
}

function pickFromSyntheticEvent<T extends HTMLElement>() {
	return <K extends keyof T>(key: K) => <E extends (t: T[K]) => void>(fn: E) => (
		e: React.SyntheticEvent<T>
	) => fn(e.currentTarget[key]);
}

export const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value');
export const getChecked = pickFromSyntheticEvent<HTMLInputElement>()('checked');

//----4--

function NotStandardLink(props: any) {
	return <a onClick={preventDefault(stopPropagation(props.onClick))}>Hello</a>;
}

function preventDefault<T extends (e: any) => void>(fn: T) {
	return <E extends React.SyntheticEvent<any>>(e: E) => {
		e.preventDefault();
		fn(e);
	};
}

function stopPropagation<T extends (e: any) => void>(fn: T) {
	return <E extends React.SyntheticEvent<any>>(e: E) => {
		e.stopPropagation();
		fn(e);
	};
}

//формируем композицию 

interface InputParams {
    onChange: (value: string) => void;
    value: string ;
}

function Input2({value, onChange} : InputParams) {
   return (
       <input value={value} onChange={preventDefault(stopPropagation(getValue(onChange)))} />
   )
}
