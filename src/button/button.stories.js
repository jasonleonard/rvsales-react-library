import React from 'react'
import { action } from '@storybook/addon-actions';
import { Button } from './button'

export default {
  title: 'Button',
  component: Button
}

export const primary = () => (
  <Button onClick={action('Primary Click')}>
    Primary
  </Button>
)

export const secondary = () => (
  <Button variant='secondary' onClick={action('Secondary Click')}>
    Secondary
  </Button>
)

export const disabled = () => (
  <Button disabled>
    Disabled
  </Button>
)
