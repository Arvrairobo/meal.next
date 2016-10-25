import React, { Component } from 'react';
import { ScrollView, View, Image, Dimensions, Text, StyleSheet, TouchableHighlight } from 'react-native';
import HeaderDisplay from './HeaderDisplay';
import Ingredient from './Ingredient.js';

var width = Dimensions.get('window').width;

export default class InfoDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <HeaderDisplay recipe={this.props.recipe} />
        <Image 
          style={styles.picture}
          source={{uri: this.props.recipe.image}} />

        <TouchableHighlight style={styles.tile}
                            onPress={this.props.hideInfo}>
          <Text>BACK</Text>
        </TouchableHighlight>
        {this.props.recipe.ingredients.map((item,i) => (
          <Ingredient name={item.food} key={i}/>
          ))}
        {this.props.recipe.digest.map((item,i) => (
          <Ingredient name={item.label} key={i} />
          ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 5,
  },
  picture: {
    width: width*0.9, 
    height: 250, 
    opacity: 1,
    borderRadius: 5, 
    marginTop: 10, 
  },
});