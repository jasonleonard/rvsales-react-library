import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import './button.css'

export function Button ({ children, variant, disabled, ...props}) {

  const button = cn('button', {
    'button--primary': !disabled && variant === 'primary',
    'button--secondary': !disabled && variant === 'secondary',
    'button--disabled': disabled
  })

  return (
    <button className={button} {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  /**Button content */
  children: PropTypes.node.isRequired,
  /**Button type */
  type: PropTypes.oneOf(['button', 'submit']),
  /**Button variant */
  variant: PropTypes.oneOf(['primary', 'secondary']),
  /**Disables button */
  disabled: PropTypes.bool
}

Button.defaultProps = {
  children: null,
  type: 'button',
  variant: 'primary',
  disabled: false
}