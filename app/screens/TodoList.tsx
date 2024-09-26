import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskSection from '@/components/TaskSection';
import { useRouter } from 'expo-router';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchTasks = async () => {
      const savedTasks = await AsyncStorage.getItem('tasks');
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      }
    };
    fetchTasks();
  }, []);

  const markTaskAsCompleted = async (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>October 20, 2022</Text>
      <Text style={styles.header}>My Todo List</Text>
      
      <TaskSection title="To Do" tasks={tasks.filter(task => !task.completed)} onToggle={markTaskAsCompleted} />
      <TaskSection title="Completed" tasks={tasks.filter(task => task.completed)} onToggle={markTaskAsCompleted} />

      <TouchableOpacity style={styles.addButton} onPress={() => router.push('/add')}>
        <Text style={styles.addButtonText}>Add New Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F6F6F6' },
  dateText: { textAlign: 'center', color: '#5E548E', fontSize: 18, marginBottom: 10 },
  header: { textAlign: 'center', fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#5E548E' },
  addButton: { backgroundColor: '#5E548E', padding: 15, borderRadius: 25, alignItems: 'center', marginTop: 20 },
  addButtonText: { color: 'white', fontSize: 16 },
});

export default TodoList;
