import React from 'react';
import { View, TextInput } from 'react-native';
import { Item, Input, Label } from 'native-base';

const TextField = ({ input, label, ...inputProps}) => (
    <View>
      <TextInput
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
        />
        {/* <Item floatingLabel>
            <Label>{label}</Label>
            <Input  
            {...inputProps}
            onChangeText={input.onChange}
            onBlur={input.onBlur}
            onFocus={input.onFocus}
            value={input.value}
            />
        </Item> */}
    </View>    
)

export default TextField;