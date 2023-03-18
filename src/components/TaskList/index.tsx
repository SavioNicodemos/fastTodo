import { Image } from 'expo-image';
import { FlatList, Text, View } from 'react-native';

import { styles } from './styles';

type Task = {
  id: string,
  task: string,
  finished: boolean
}

type Props = {
  tasks: Task[],
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
    <Text style={{...styles.baseText, ...styles.countItemsCounter}}>
      {count}
    </Text>
  </View>
)

export const TaskList: React.FC<Props> = ({ tasks = [] }: Props) => {
  const finishedCount = tasks.reduce((acc: number, cur: Task) => acc + (cur.finished ? 1 : 0), 0);
  return (
    <>
      <View style={styles.header}>
        <CountItems name='Created' nameColor='#4EA8DE' count={tasks.length} />
        <CountItems name='Finished' nameColor='#8284FA' count={finishedCount} />
      </View>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text>{item.id}, {item.task} and {item.finished ? 'true' : 'false'}</Text>}
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