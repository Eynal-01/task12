import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const TaskItem = ({ task, onToggle, index }) => {
  return (
    <TouchableOpacity style={styles.taskContainer} onPress={() => onToggle(index)}>
      <View style={styles.icon}></View>
      <Text style={task.completed ? styles.completedTask : styles.task}>{task.title}</Text>
      <Text style={styles.time}>{task.time}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  taskContainer: { flexDirection: 'row', alignItems: 'center', padding: 15, backgroundColor: '#fff', marginBottom: 10, borderRadius: 10 },
  task: { fontSize: 16, color: '#333' },
  completedTask: { fontSize: 16, color: '#888', textDecorationLine: 'line-through' },
  time: { marginLeft: 'auto', color: '#999' },
  icon: { width: 24, height: 24, borderRadius: 12, backgroundColor: '#5E548E', marginRight: 10 },
});

export default TaskItem;
