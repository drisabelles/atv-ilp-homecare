import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CheckBox = ({options = [], multiple = false}) => {
  const [selected, setSelected] = useState([]);

  function toggle(id) {
    let index = selected.findIndex(i => i === id);
    let arraySelecteds = [...selected];

    if (index !== -1) {
      arraySelecteds.splice(index, 1);
    } else {
      multiple ? arraySelecteds.push(id) : (arraySelecteds = [id]);
    }

    setSelected(arraySelecteds);
  }

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <View style={styles.optionContainer}>
          <TouchableOpacity
            style={[
              styles.touchable,
              {
                backgroundColor:
                  selected.findIndex(i => i === option.id) !== -1
                    ? '#7864ed'
                    : '#ffff',
              },
            ]}
            onPress={() => toggle(option?.id)}>
            {selected.findIndex(i => i === option.id) !== -1 ? (
              <Icon name="check-bold" color={'#ffff'} size={16} />
            ) : null}
          </TouchableOpacity>
          <Text style={styles.optionText}>{option?.text}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},

  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
  },

  touchable: {
    height: 20,
    width: 20,
    borderColor: '#7864ed',
    borderWidth: 2,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  optionText: {
    marginLeft: 12,
    color: 'black',
    fontSize: 16,
  },
});

export default CheckBox;
