import React, { useRef, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { Colors } from '../../utils/Colors';

type Props = {
  onAddPress: (task: string) => void,
}

export const AddTodoBar: React.FC<Props> = ({ onAddPress }: Props) => {
  const [newTask, setNewTask] = useState('');
  const [focusOnInput, setFocusOnInput] = useState(false);

  const inputRef = useRef<TextInput>(null);

  const handleAddButtonPress = () => {
    onAddPress(newTask);
    setNewTask('');
    inputRef.current?.blur();
  }
  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        style={[styles.input, focusOnInput && { borderColor: Colors.purple }]}
        placeholder='Add a new task'
        cursorColor={Colors.gray100}
        placeholderTextColor={Colors.gray300}
        onChangeText={setNewTask}
        onFocus={() => setFocusOnInput(true)}
        onBlur={() => setFocusOnInput(false)}
        value={newTask}
      />
      <TouchableOpacity style={styles.iconContainer} onPress={handleAddButtonPress}>
        <MaterialIcons name='add-circle-outline' size={20} color={Colors.gray100} />
      </TouchableOpacity>
    </View>
  );
}