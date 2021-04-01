import React from 'react';
import s from './text.less';
import classNames from 'classnames';

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

export enum EColors {
  black = 'black',
  white = 'white',
  orange = 'orange',
  green = 'green',
  greyF3 = 'greyF3',
  greyF4 = 'greyF4',
  greyD9 = 'greyD9',
  greyC4 = 'greyC4',
  grey99 = 'grey99',
  grey66 = 'grey66',
  greyEC = 'greyEC',
}

interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  children?: React.ReactNode;
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  color?: EColors;
}

const Text = ({ As = 'span', children, size, mobileSize, tabletSize, color = EColors.black }: ITextProps) => {
  const classes = classNames(
    s[`d${size}`],
    s[color],
    { [s[`m${mobileSize}`]]: mobileSize },
    { [s[`t${tabletSize}`]]: tabletSize }
  );

  return <As className={classes}>{children}</As>;
};

export default Text;
