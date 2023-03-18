import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './styles';

type Props = {
  onAddPress: (task: string) => void,
}

export const AddTodoBar: React.FC<Props> = ({ onAddPress }: Props) => {
  const [newTask, setNewTask] = useState('');
  const handleAddButtonPress = () => {
    onAddPress(newTask);
    setNewTask('');
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Add a new task'
        cursorColor='#fff'
        placeholderTextColor='#808080'
        onChangeText={setNewTask}
        value={newTask}
      />
      <TouchableOpacity style={styles.iconContainer} onPress={handleAddButtonPress}>
        <MaterialIcons name='add-circle-outline' size={20} color="#f2f2f2" />
      </TouchableOpacity>
    </View>
  );
}