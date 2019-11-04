import React from 'react'
import { action } from '@storybook/addon-actions';
import { Select } from './select'

const label = 'Select RV Class'

const items = [
  'Travel Trailer',
  'Fifth Wheel',
  'Toy Hauler',
  'Small Camper'
]

export default {
  title: 'Select',
  component: Select
}

export const selectFromScratch = () => (
  <Select
    label={label}
    options={items} 
    onChange={action('Select')}
  />
)