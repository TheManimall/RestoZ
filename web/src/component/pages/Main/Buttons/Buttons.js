import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import './Buttons.scss';

const Buttons = () => {
  return (
    <div className="Button">
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
    </div>
  );
};

export default Buttons;
