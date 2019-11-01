import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Downshift from 'downshift'
import styled from 'styled-components'
import { Icon } from '../icon/icon'

const SelectContainer = styled.div`
  width: 300px;
  position: relative;
`

const SelectLabel = styled.label`
  display: inline-block;
  margin-bottom: 4px;
  font: 14px 'Lato'
`

const SelectButton = styled.button`
  display: flex;
  flex-flow: row nowrap;
  height: 30px;
  min-width: 300px;
  padding: 0;
  border: none;
  background-color: transparent;
  font: 14px/17px 'Lato';
  overflow: hidden;

  &:focus {
    outline-color: #82c4e8;
  }

  span {
    display: flex;
    align-items: center;
    height: 30px;
    width: 100%;
    border: 1px solid #919EAB;
  }

  span:first-child {
    padding-left: 10px;
    border-radius: 5px 0 0 5px;
    border-right: none;
    color: #454F5B;
  }

  span:last-child {
    justify-content: center;
    width: 34px;
    border: none;
    border-radius: 0 5px 5px 0;
    background-color: #00669E;
    color: #fff;
  }
`

const SelectIcon = styled(Icon)`
  height: 14px;
  width: 14px;
`

const Menu = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  margin-top: 4px;
  border: 1px solid #919eab;
  border-radius: 5px;
  background-color: #fff;
  overflow-y: auto;
  overflow-x: hidden;
  position: absolute;
`

const MenuItem = styled.li`
  padding: 10px 15px;
  font: 14px/17px 'Lato';
  posistion: relative;

  ${props => 
    props.active &&
    `
      background-color: #00669e;
      color: #fff;
    `
  }
`

export function Select ({label, options, ...props}) {
  return (
    <Downshift {...props}>
      {({
        getRootProps,
        getLabelProps,
        getToggleButtonProps,
        getMenuProps,
        getItemProps,
        isOpen,
        selectedItem,
        highlightedIndex
      }) => {
        return (
          <SelectContainer {...getRootProps({role: undefined})}>
            <SelectLabel {...getLabelProps()}>
              {label}
            </SelectLabel>
            <SelectButton {...getToggleButtonProps()}>
              <span>
                {selectedItem || `- ${label} -` }
              </span>
              <span>
                <SelectIcon variant='chevron_down' />
              </span>
            </SelectButton>
            {isOpen && (
              <Menu {...getMenuProps()}>
                {options.map((option, index) => {
                  return (
                    <MenuItem
                      {...getItemProps({
                        index,
                        item: option,
                        key: index,
                        active: highlightedIndex === index
                      })}
                    >
                      {option}
                    </MenuItem>
                  )
                })}
              </Menu>
            )}
          </SelectContainer>
        )
      }}
    </Downshift>
  )
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired
}

Select.defaultProps = {
  label: 'Default Label',
  items: ['']
}