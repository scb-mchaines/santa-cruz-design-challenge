import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';



const SpecTable = ({title, items}) => {
  return(
      <div>
        <h2>{title}</h2>
        <ul>
          {items.map(item => {
            return (
                <Item key={item.label}>
                    <ItemLabel>{item.label}</ItemLabel>
                    <ItemValue>{item.value}</ItemValue>
                </Item>
            )
          })}
        </ul>
      </div>
  )
};

const ItemLabel = styled.div`
    width: 40%;
    padding-right: 10%;
    display: inline-block;
`;

const ItemValue = styled.div`
    display: inline-block;
`;

const Item = styled.li`
    width: 100%;
    list-style: none;
`

export default SpecTable;

SpecTable.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
};
