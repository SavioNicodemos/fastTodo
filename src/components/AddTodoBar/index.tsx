import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './styles';

export const AddTodoBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Add a new task'
        cursorColor='#fff'
        placeholderTextColor='#808080'
      />
      <TouchableOpacity style={styles.iconContainer}>
        <MaterialIcons name='add-circle-outline' size={18} color="#f2f2f2" />
      </TouchableOpacity>
    </View>
  );
}