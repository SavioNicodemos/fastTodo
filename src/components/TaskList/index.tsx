import { Image } from 'expo-image';
import { FlatList, Text, View, TextStyle, TouchableOpacity } from 'react-native';
import { Feather, Octicons } from '@expo/vector-icons'

import { Colors } from '../../utils/Colors';
import { styles } from './styles';

type Task = {
  id: string,
  task: string,
  finished: boolean
}

type Props = {
  tasks: Task[],
  onToggleTask: (id: string) => void,
  onDeleteTask: (id: string) => void,
}

type CountItemsProps = {
  name: string,
  count: number,
  nameColor: string,
}

const CountItems: React.FC<CountItemsProps> = ({ name, count, nameColor }: CountItemsProps) => (
  <View style={styles.countItemsContainer}>
    <Text style={{ ...styles.baseText, color: nameColor }}>
      {name}
    </Text>
    <Text style={{ ...styles.baseText, ...styles.countItemsCounter }}>
      {count}
    </Text>
  </View>
)

export const TaskList: React.FC<Props> = ({ tasks = [], onToggleTask, onDeleteTask }: Props) => {
  const finishedCount = tasks.reduce((acc: number, cur: Task) => acc + (cur.finished ? 1 : 0), 0);
  return (
    <>
      <View style={styles.header}>
        <CountItems name='Created' nameColor={Colors.blue} count={tasks.length} />
        <CountItems name='Finished' nameColor={Colors.purple} count={finishedCount} />
      </View>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          const finishedTaskstyle: TextStyle = item.finished ? { color: Colors.gray300, textDecorationLine: 'line-through' } : {};
          return (
            <View style={styles.taskContainer}>
              <TouchableOpacity onPress={() => onToggleTask(item.id)}>
                <Octicons
                  size={18}
                  name={item.finished ? 'check-circle-fill' : 'circle'}
                  color={item.finished ? Colors.purpleDark : Colors.blue}
                />
              </TouchableOpacity>
              <Text style={{ ...styles.taskTextBase, ...finishedTaskstyle }}>
                {item.task}
              </Text>
              <TouchableOpacity onPress={() => onDeleteTask(item.id)}>
                <Feather
                  size={18}
                  name='trash-2'
                  color={Colors.gray300}
                />
              </TouchableOpacity>
            </View>
          )
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.noTaskContainer}>
            <Image
              source={require('../../../assets/Clipboard.svg')}
              style={styles.noTasksImage}
              contentFit='contain'
            />
            <Text style={{ ...styles.baseText, ...styles.noTaskFirstText }}>
              You don't have tasks registered yet
            </Text>
            <Text style={{ ...styles.baseText, ...styles.noTaskSecondText }}>
              Create tasks and organize your to-do items!
            </Text>
          </View>
        )}
      />
    </>
  );
}
