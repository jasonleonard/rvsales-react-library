import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  height: 45px;
  min-width: 150px;
  padding: 0 20px;
  border-radius: 25px;
  cursor: pointer;
  font: 12px/16px 'LatoBold';
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;

  &:focus {
    outline-color: #82c4e8;
  }

  ${props =>
    props.variant === 'primary' &&
    `
      border: none;
      background-color: #00669e;
      color: #fff

      &:hover {
        background-color: #014F79;
      }

      &:active {
        background-color: #00669e;
      }
    `}

  ${props =>
    props.variant === 'secondary' &&
    `
      border: 1px solid #00669e;
      color: #00669e;

      &:hover {
        background-color: #014F79;
        color: #fff;
      }

      &:active {
        background-color: #fff;
        color: #00669e;
      }
    `}

  ${props =>
    props.disabled &&
    `
      background-color: #DFE3E8;
      color: rgba(69, 79, 91, .5);
      border: none;

      &:hover,
      &:focus {
        background-color: #DFE3E8;
        color: rgba(69, 79, 91, .5);
        outline: none;
        cursor: default;
      }
    `}
`

export function Button ({ children, ...props}) {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  variant: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool
}

Button.defaultProps = {
  children: null,
  type: 'button',
  variant: 'primary',
  disabled: false
}