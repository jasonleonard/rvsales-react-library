import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ICONS } from './icons'

const Svg = styled.svg`
  display: inline-block;
  vertical-align: middle;
  height: 20px;
  width: 20px;
`

const Path = styled.path`
  fill: currentColor;
`

export function Icon({ variant, ...props }) {
  const { viewbox, path } = ICONS[variant.toUpperCase()] 

  return (
    <Svg viewBox={viewbox} aria-hidden='true' focusable='false' {...props}>
      <Path d={path} />
    </Svg>
  )
}

Icon.propTypes = {
  variant: PropTypes.string.isRequired,
}
