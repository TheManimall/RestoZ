import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import './Buttons.scss';

const Buttons = () => {
  return (
    <div className="Button" style={{ margin: '10px' }}>
      <Link to="/add-dish">
        <Button variant="contained" color="primary">
          Додати страву
        </Button>
      </Link>
      <Link to="/dish-list">
        <Button variant="contained" color="secondary">
          Мої страви
        </Button>
      </Link>
      <Link to="/orders">
        <Button variant="contained" color=" secondary">
          Замовлення
        </Button>
      </Link>
    </div>
  );
};

export default Buttons;
