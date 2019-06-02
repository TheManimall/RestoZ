import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AddDish from './AddDish/AddDish';
import DishList from './DishList/DishList';
import './Content.scss';

const Content = () => {
  return (
    <div className="Content">
      <Switch>
        <Route exact path="/add-dish" component={AddDish} />
        <Route exact path="/dish-list" component={DishList} />
      </Switch>
    </div>
  );
};

export default Content;
