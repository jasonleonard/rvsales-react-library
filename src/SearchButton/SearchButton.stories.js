import React from 'react'
import { action } from '@storybook/addon-actions';
import { SearchButton } from './SearchButton'

export default {
  title: 'Search Button',
  component: SearchButton
}




export const TravelTraler = () => (
  <SearchButton onClick={action('Primary Click')}
                type='traveltrailer'
                >
  </SearchButton>
)

export const FifthWheel = () => (
  <SearchButton onClick={action('Primary Click')}
                type='fifthwheel'
                >
  </SearchButton>
)

export const ToyHauler = () => (
  <SearchButton onClick={action('Primary Click')}
                type='toyhauler'
                >
  </SearchButton>
)

export const PopUp = () => (
  <SearchButton onClick={action('Primary Click')}
                type='popup'
                >
  </SearchButton>
)


export const SmallCamper = () => (
  <SearchButton onClick={action('Primary Click')}
                type='smallcamper'
                >
  </SearchButton>
)

export const ClassA = () => (
  <SearchButton onClick={action('Primary Click')}
                type='classa'
                >
  </SearchButton>
)

export const ClassADeisel = () => (
  <SearchButton onClick={action('Primary Click')}
                type='classadiesel'
                >
  </SearchButton>
)

export const ClassB = () => (
  <SearchButton onClick={action('Primary Click')}
                type='classb'
                >
  </SearchButton>
)

export const ClassC = () => (
  <SearchButton onClick={action('Primary Click')}
                type='classc'
                >
  </SearchButton>
)


/*
export const secondary = () => (
  <SearchButton variant='secondary' onClick={action('Secondary Click')}>
    Secondary
  </SearchButton>
)

export const disabled = () => (
  <SearchButton disabled>
    Disabled
  </SearchButton>
)*/