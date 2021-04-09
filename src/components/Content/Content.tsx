import React from 'react';

interface IContentProps {
  children?: React.ReactNode;
}

const Content = ({ children }: IContentProps) => {
  return <main>{children}</main>;
};

export default Content;
