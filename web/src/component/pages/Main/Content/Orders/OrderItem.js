import React from 'react';
import Button from '@material-ui/core/Button';

const OrderItem = ({name, address, sum, isActive, dishes}) => (
  <div style={{
    padding: '20px',
    width: '300px',
    backgroundColor: '#fff',
    margin: '20px',
    border: isActive && '2px solid green',
  }}>
  <div>
    <div className="row">
      <p>Клієнт:</p>
      <h4>{name}</h4>  
    </div>
    <div className="row">
      <p>Адрес:</p>
      <h4>{address}</h4>  
    </div>
    <div className="row">
      <p>Загальна сума:</p>
      <h4>{`${sum} грн`}</h4>  
    </div>
    <div className="row">
      <p>Статус:</p>
      <h4>{isActive ? 'Нове замовлення' : 'Виконане замовлення'}</h4>  
    </div>
      <p>Страви:</p>
      {dishes.map(item => <h4>{item}</h4>)}
    </div> 
    <Button variant="contained" color="primary" style={{alignSelf: 'flex-end'}}>Підтвердити</Button>
  </div>
);

export default OrderItem;