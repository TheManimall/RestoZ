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

import { getAllDish } from '../../../../../store/actions/mainActions';
import './DishList.scss';

const imgUrl = 'https://www.gastronom.ru/binfiles/images/20161017/b241aedf.jpg';

const DishList = ({ getAllDish, dishes, loaded }) => {
  useEffect(() => {
    getAllDish();
  }, []);
  return (
    <div className="DishList">
      {loaded &&
        dishes.map(el => (
          <Card>
            <CardActionArea>
              <CardMedia
                title={el.name}
                image="https://www.gastronom.ru/binfiles/images/20161226/bb647ec7.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {el.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  {el.price}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  {el.weight}
                </Typography>
                {el.ingredients.map(item => (
                  <Chip label={item} className="chips" color="default" />
                ))}
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="outlined" color="default">
                видалити
              </Button>
              <Button variant="contained" color="primary">
                Редагувати
              </Button>
            </CardActions>
          </Card>
        ))}
    </div>
  );
};

const mapStateToProps = state => ({
  dishes: state.main.dishes,
  loaded: state.main.loaded,
});

const mapDispatchToProps = {
  getAllDish,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DishList);
