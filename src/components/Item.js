import React from 'react';
import PropTypes from 'prop-types';

function Item(props){

  const itemStyles = {
    height: '200px',
    width: '150px',
    border: '1px solid #82CA81',
    textAlign: 'center',
    padding: '2%',
    marginBottom: '1em',
    marginTop: '1em'
  }

  function inStock(count) {
    return count > 0 ? <button className="buy-button" onClick={()=> props.whenBuyClicked(props.id)} type="submit">Buy</button>
    : <p>sold out!</p>
  }

  return (
    <React.Fragment>
      <div style={itemStyles}>
        <p>{props.name}</p>
        <p>{props.description}</p>
        <p>Quantity: {props.quantity}</p>
        {inStock(props.quantity)}
        <div className="buttons">
          <button onClick={()=> props.whenRestockClicked(props.id)} type="submit">Restock</button> 
          <button onClick = {() => props.whenItemClicked(props.id)}>Details</button>
        </div>
      </div>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func,
  whenBuyClicked: PropTypes.func,
  whenRestockClicked: PropTypes.func
}

export default Item;