import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface NavbarButtonProps {
  text: string;
  to?: string;
  href?: string;
  onClick?: () => void;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({ text, to, href, onClick }) => {
  // Define the inner button content
  const ButtonContent = (
    <button className="button" data-text={text}>
      <span className="actual-text">&nbsp;{text}&nbsp;</span>
      <span aria-hidden="true" className="hover-text">&nbsp;{text}&nbsp;</span>
    </button>
  );

  return (
    <StyledWrapper>
      {to ? (
        <Link to={to} onClick={onClick}>
          {ButtonContent}
        </Link>
      ) : href ? (
        <a href={href} onClick={onClick} target="_blank" rel="noopener noreferrer">
          {ButtonContent}
        </a>
      ) : (
        ButtonContent
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* Remove default button styles */
  .button {
    margin: 0;
    height: auto;
    background: transparent;
    padding: 0;
    border: none;
    cursor: pointer;
    /* Button styling */
    --border-right: 6px;
    --text-stroke-color: rgba(255, 255, 255, 0.6);
    --animation-color: #2563eb;
    --fs-size: 1.2em; /* Adjust font size as needed */
    letter-spacing: 1px;
    text-decoration: none;
    font-size: var(--fs-size);
    font-family: Arial, sans-serif;
    position: relative;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px var(--text-stroke-color);
    background: transparent;
  }

  /* Hover text that animates on hover */
  .hover-text {
    position: absolute;
    box-sizing: border-box;
    color: var(--animation-color);
    width: 0%;
    inset: 0;
    border-right: var(--border-right) solid var(--animation-color);
    overflow: hidden;
    transition: 0.5s;
    -webkit-text-stroke: 1px var(--animation-color);
  }

  /* Hover effect */
  .button:hover .hover-text {
    width: 100%;
    filter: drop-shadow(0 0 23px var(--animation-color));
  }
    .actual-text {
    color: white;
  } 
`;

export default NavbarButton;
