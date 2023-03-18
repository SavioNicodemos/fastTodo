import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
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
  const [tasks, setTasks] = useState<Task[]>([]);

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

  const handleAddTask = (task: string) => {
    if (task.trim() !== '') {
      const id = new Date().getTime().toString();
      const newTask = { id, task, finished: false };
      setTasks(prevState => [newTask, ...prevState])
    }
  };

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem('@tasks');
        if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadTasks();
  }, []);

  useEffect(() => {
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem('@tasks', JSON.stringify(tasks));
      } catch (error) {
        console.error(error);
      }
    };

    saveTasks();
  }, [tasks]);

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
        <AddTodoBar onAddPress={handleAddTask} />
        <TaskList tasks={tasks} onToggleTask={handleToggleTask} onDeleteTask={handleDeleteTask} />
      </View>
    </>
  );
}
