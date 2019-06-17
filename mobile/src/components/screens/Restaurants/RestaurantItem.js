import React, { Component } from "react";
import { Image } from "react-native";
import {
  H2,
  Card,
  CardItem,
  Text,
  Button,
  Left,
  Body,
  Right
} from "native-base";

class RestaurantItem extends Component {
  render() {
    const { name, img } = this.props;

    return (
      <Card>
        <CardItem>
          <Left>
            <Body>
              <H2>{name}</H2>
              <Text note>Ресторан</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{
              uri: `${img}`
            }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Left />
          <Body>
            <Button bordered primary>
              <Text>В заклад</Text>
            </Button>
          </Body>
          <Right />
        </CardItem>
      </Card>
    );
  }
}

export default RestaurantItem;
