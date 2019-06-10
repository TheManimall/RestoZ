import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Form,
  Left,
  Right,
  Body,
  Title,
  Icon,
  Item,
  Label,
  Input
} from "native-base";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
<<<<<<< HEAD
    console.log("LO");
=======
    const { navigate } = this.props.navigation;
>>>>>>> 6d7ec5ab382e31e18199adcfe372aa94d38ea3fc
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Вхід</Title>
          </Body>
          <Right />
        </Header>
        <Content contentContainerStyle={{ justifyContent: "center", flex: 1 }}>
          <Form>
            <Item stackedLabel>
              <Label>email:</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Пароль:</Label>
              <Input />
            </Item>
            <Button style={styles.button} block primary>
              <Text>Вхід</Text>
            </Button>
<<<<<<< HEAD
            <Text>Реєстрація</Text>
=======
            <Button
              style={styles.button}
              onPress={() => navigate("Registration")}
              block
              danger
            >
              <Text>Реєстрація</Text>
            </Button>
>>>>>>> 6d7ec5ab382e31e18199adcfe372aa94d38ea3fc
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 20
  }
});

export default SignIn;
