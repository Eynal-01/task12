import React from 'react';
import { View, Text, FlatList } from 'react-native';
import TaskItem from './TaskItem';

const TaskSection = ({ title, tasks, onToggle }) => {
  return (
    <View>
      <Text style={{ fontSize: 20, marginVertical: 10 }}>{title}</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => <TaskItem task={item} index={index} onToggle={onToggle} />}
      />
    </View>
  );
};

export default TaskSection;
