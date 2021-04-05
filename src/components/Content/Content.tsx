import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import s from './content.less';

interface IContentProps {
  children?: React.ReactNode;
}

const Content = ({ children }: IContentProps) => {
  return <main>{children}</main>;
};

export default Content;
