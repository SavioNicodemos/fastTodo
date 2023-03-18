import React from 'react';
import { View } from 'react-native';
import { Image } from 'expo-image';

import { AddTodoBar } from '../../components/AddTodoBar';
import { TaskList } from '../../components/TaskList';
import { styles } from './styles';

type Task = {
  id: string,
  task: string,
  finished: boolean
}
const tasks: Task[] = [
  {
    id: '1',
    task: "Add car items asd asd asdfasd fas df asdf asdf as df as",
    finished: false
  },
  {
    id: '2',
    task: "Add car items asd asd asdfasd fas df asdf asdf as df as",
    finished: false
  },
  {
    id: '3',
    task: "Add car items",
    finished: false
  },
  {
    id: '4',
    task: "Add car items",
    finished: true
  },
  {
    id: '5',
    task: "Add car items",
    finished: true
  },
]

export const Home: React.FC = () => {
  return (
    <>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require('../../../assets/Logo.svg')}
          contentFit="contain"
        />
      </View>
      <View style={styles.main}>
        <AddTodoBar />
        <TaskList tasks={tasks} />
      </View>
    </>
  );
}
