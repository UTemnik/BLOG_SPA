import React from 'react';
import s from './text.less';
import classNames from 'classnames';

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

export enum EColors {
	black = 'black',
	white = 'white',
	orange = 'orange',
	green = 'green',
	grayF3 = 'grayF3',
	grayF4 = 'grayF4',
	grayD9 = 'grayD9',
	grayC4 = 'grayC4',
	gray99 = 'gray99',
	gray66 = 'gray66',
	grayEC = 'grayEC',
}

interface ITextProps {
	As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
	children?: React.ReactNode;
	size: TSizes;
	mobileSize?: TSizes;
	tabletSize?: TSizes;
	color?: EColors;
}

const Text = (props: ITextProps) => {
	const {
		As = 'span',
		children,
		size,
		mobileSize,
		tabletSize,
		color = EColors.black,
	} = props;

	const classes = classNames(
		s[`d${size}`],
		s[color],
		{ [s[`m${mobileSize}`]]: mobileSize },
		{ [s[`t${tabletSize}`]]: tabletSize }
	);
	return <As className={classes}>{children}</As>;
};

export default Text;
