import React from 'react';
import styled from 'styled-components';
import clsx from '../../node_modules/clsx/clsx';
type InputProps = {
    id: string;
    className?: string;
    type: string;
    placeholder?: string;
};

const StyledInput = styled.input`
  border: 2px solid transparent;
  width: 15em;
  height: 2.5em;
  padding-left: 0.8em;
  outline: none;
  overflow: hidden;
  background-color: #F3F3F3;
  border-radius: 10px;
  transition: all 0.5s;
  
  &:hover {
    border: 2px solid #4A9DEC;
    box-shadow: 0px 0px 0px 7px rgba(74, 157, 236, 0.2);
    background-color: white;
  }
`;

const Input: React.FC<InputProps> = ({ id, type, className, placeholder }) => {
  return <StyledInput id={id} type={type} className={className} placeholder={placeholder} />;
};

export {
  Input
};
