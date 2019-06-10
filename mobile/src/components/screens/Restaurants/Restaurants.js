import React, { Component } from "react";
// import { connect } from "react-redux";
import { Text, ScrollView, StyleSheet, View } from "react-native";
// import { getAllRestaurant } from "../../../store/actions/restaurantActions";

import RestaurantItem from "./RestaurantItem";

class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {
  //   const { getAllRestaurant } = this.props;

  //   getAllRestaurant();
  // }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <RestaurantItem
            name="Кабукі"
            img="https://media-cdn.tripadvisor.com/media/photo-s/0f/b8/db/b4/caption.jpg"
          />
        </View>
        <View>
          <RestaurantItem
            name="Chicken HUT"
            img="https://tomato.ua/image/resize/storage/restaurants/5b1ee5f0506cc0003e407423/15287516005b1ee5f034d23_5b1edc5e61e1b2.93505278.jpeg?w=1200&h=1200"
          />
          <RestaurantItem
            name="Fabrica"
            img="http://old.stalo.delo.ua/assets/images/%D1%84%D0%B0%D0%B1%D1%80%D0%B8%D0%BA%D0%B0_%D0%BF%D0%B8%D1%86%D1%86%D0%B0.jpg"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around"
  }
});

// const mapDispatchToProps = {
//   getAllRestaurant
// };

export default Restaurant;
