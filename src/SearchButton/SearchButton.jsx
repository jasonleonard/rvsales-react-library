import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const SEARCHIMAGES = {
    traveltrailer: {
      path: 'https://s3.amazonaws.com/images.rvs.com/images/minified-svg/gray/travel-trailer.png',
      label: 'Travel Trailer',
      search: '/rvclass/travel-trailer-rvs',
      key: 'traveltrailer'
    },
    fifthwheel: {
        path: 'https://s3.amazonaws.com/images.rvs.com/images/minified-svg/gray/fifth-weel.png',
        label: 'Fifth Wheel',
        search: '/',
        key: 'fifthwheel'
    },
    toyhauler: {
        path: 'https://s3.amazonaws.com/images.rvs.com/images/minified-svg/gray/toy-hauler.png',
        label: 'Toyhauler',
        search: '/',
        key: 'toyhauler'
    },
    popup: {
        path: 'https://s3.amazonaws.com/images.rvs.com/images/minified-svg/gray/popup.png',
        label: 'Pop Up',
        search: '/',
        key: 'popup'
    },
    smallcamper: {
        path: 'https://s3.amazonaws.com/images.rvs.com/images/minified-svg/gray/teardrop.png',
        label: 'Small Camper',
        search: '/',
        key: 'smallcamper'
    },
    classa: {
        path: 'https://s3.amazonaws.com/images.rvs.com/images/minified-svg/gray/class-a.png',
        label: 'Class A Gas',
        search: '/',
        key: 'classa'
    },
    classadiesel: {
        path: 'https://s3.amazonaws.com/images.rvs.com/images/minified-svg/gray/class-a.png',
        label: 'Class A Diesel',
        search: '/',
        key: 'classadiesel'
    },
    classb: {
        path: 'https://s3.amazonaws.com/images.rvs.com/images/minified-svg/gray/class-b-c.png',
        label: 'Class B',
        search: '/',
        key: 'classb'
    },
    classc: {
        path: 'https://s3.amazonaws.com/images.rvs.com/images/minified-svg/gray/class-c.png',
        label: 'Class C',
        search: '/',
        key: 'classc'
    }
  }

const StyledButton = styled.button`

  min-width: 150px;
  padding: 15px;
  border-radius: 3px;
  cursor: pointer;
  font: 12px/16px 'LatoBold';
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;


  &:focus {
    outline:none; 
    border:2px solid #63a1cf;
    -webkit-box-shadow: 0px 0px 5px  #63a1cf;
    box-shadow: 0px 0px 5px  #63a1cf;
  }

  &:hover{
    box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.2), 0 0px 5px 0 rgba(0, 0, 0, 0.19);
  }

  &:active{
    outline:none; 
    border:2px solid #e9c05e;
    -webkit-box-shadow: 0px 0px 5px  #e9c05e;
    box-shadow: 0px 0px 5px  #e9c05e;
  }
`

export function SearchButton ({ children, ...props}) {

  let key = props['type'];
  let label = SEARCHIMAGES[key]['label'];
  let imgpath = SEARCHIMAGES[key]['path'];
  let search = SEARCHIMAGES[key]['search'];

 
  return (
      <StyledButton {...props} onClick={()=>{console.log('Change this to route to search path in url'+search);}}>
        <img src={imgpath}></img><br></br> 
        {label}
        {children}
      </StyledButton>
  )
}

SearchButton.propTypes = {
    type: PropTypes.oneOf(['traveltrailer', 'fifthwheel', 'toyhauler', 'popup', 'smallcamper', 'classa', 'classadiesel', 'classb', 'classc'])
  }