import React, { Component } from "react";
import { Text } from "react-native";

import DishItem from "./DishItem";
import { getAllRestaurant } from "../../../store/actions/restaurantActions";
import { connect } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";

class Dish extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getAllRestaurant } = this.props;

    getAllRestaurant();
  }

  render() {
    return (
      <ScrollView>
        <DishItem
          name={"Маргарита дитяча"}
          img={"https://shostkasyr.com/images/receipts/eiwjdfs.jpg"}
          price={100}
          weight={400}
          ingredients={["тісто", "сир", "томати", "базилік"]}
        />
        <DishItem
          name={"Курячий бульйон з фреш-пастою"}
          img={
            "https://www.recept.ua/files/uploads/rec_img/kuriniy-buliyon-s-domaschney-lapschoy.jpg"
          }
          price={130}
          weight={340}
          ingredients={["курка", "локшина", "морква"]}
        />
      </ScrollView>
    );
  }
}

const mapDispatchToProps = {
  getAllRestaurant
};

export default connect(
  null,
  mapDispatchToProps
)(Dish);
