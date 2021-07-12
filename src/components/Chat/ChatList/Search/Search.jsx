import React from 'react';
import PropTypes from 'prop-types';
import Input from '/src/components/UI/Input';
import { StSearch } from './styled';

const Search = ({ setValue, filterByRoomName }) => {
  return ( 
    <StSearch>
      <Input
        id='nameOfYourId'
        height="60px"
        key='nameOfYourId'
        name="filterByRoomName"
        inputHeight="60px"
        borderRadius="0px"
        value={filterByRoomName}
        onChange={setValue}
        placeholder='placeholder_search_input'
        margin="0 auto" 
        color="white"
        bgColor="transparent"
        fontSizeInp="20px"
        borderColor="transparent"
        padding="17px"
      />
    </StSearch> 
  );
};

Search.propTypes = {
  setValue: PropTypes.func,
  filterByRoomName: PropTypes.string,
};

export default Search;
