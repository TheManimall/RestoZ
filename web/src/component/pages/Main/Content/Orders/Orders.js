import React, { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

import { getOrder } from '../../../../../store/actions/mainActions';
import { OredersData } from './OredersData';
import OrderItem from './OrderItem';
// import './DishList.scss';

const Orders = ({ getOrder, restId }) => {
  useEffect(() => {
    getOrder(restId);
  }, []);
  return (
    <div style={styles.orders}>
      {OredersData.map(el => (
        <OrderItem 
          name={el.name}
          key={el.addrees}
          address={el.addrees}
          isActive={el.isActive}
          sum={el.sum}
          dishes={el.dishes}
        />
      ))}  
    </div>
  );
};

const styles = {
  orders: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    flexWrap: 'wrap',
    display: 'flex',
  }
}

const mapStateToProps = state => ({
  restId: state.auth.id
});

const mapDispatchToProps = {
  getOrder,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);
