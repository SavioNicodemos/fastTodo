import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import { Image } from 'expo-image';

import { AddTodoBar } from '../../components/AddTodoBar';
import { TaskList } from '../../components/TaskList';
import { styles } from './styles';

type Task = {
  id: string,
  task: string,
  finished: boolean
}

export const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
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
  ]);

  const handleToggleTask = (id: string) => {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex >= 0) {
      const updatedTasks = [...tasks];
      updatedTasks[taskIndex] = {
        ...updatedTasks[taskIndex],
        finished: !updatedTasks[taskIndex].finished
      };
      setTasks(updatedTasks);
    }
  }

  const handleDeleteTask = (id: string) => {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete this task?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Delete',
          onPress: () => {
            const updatedTasks = tasks.filter(task => task.id !== id);
            setTasks(updatedTasks);
          },
          style: 'destructive'
        }
      ]
    );
  };
  
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
        <TaskList tasks={tasks} onToggleTask={handleToggleTask} onDeleteTask={handleDeleteTask} />
      </View>
    </>
  );
}
