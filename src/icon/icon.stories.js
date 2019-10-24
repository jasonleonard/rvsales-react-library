import React from 'react'
import styled from 'styled-components';
import { Icon } from './icon'

export default {
  title: 'Icon',
  component: Icon
}

export const chevronUp = () => (
  <Icon variant='chevron_up' />
)

const RedIcon = styled(Icon)`
  color: red;
`

export const redChevronUp = () => (
  <RedIcon variant='chevron_up' />
)

const SmallRedIcon = styled(RedIcon)`
  height: 10px;
  width: 10px;
`

export const smallRedChevronUp = () => (
  <SmallRedIcon variant='chevron_up' />
)
