import React from 'react';
import Button from '@material-ui/core/Button';

const Buttons = () => {
  return (
    <div className="Button">
      <Button variant="contained" color="primary">
        Додати страву
      </Button>
      <Button variant="contained" color="secondary">
        Мої страви
      </Button>
    </div>
  );
};

export default Buttons;
