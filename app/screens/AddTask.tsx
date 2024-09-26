// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useRouter } from 'expo-router';
// import { TouchableOpacity } from 'react-native-gesture-handler';

// const AddTask = () => {
//   const [task, setTask] = useState('');
//   const [time, setTime] = useState('');
//   const router = useRouter();

//   const saveTask = async () => {
//     const savedTasks = await AsyncStorage.getItem('tasks');
//     const tasks = savedTasks ? JSON.parse(savedTasks) : [];

//     const newTask = {
//       title: task,
//       time: time,
//       completed: false,
//     };
//     tasks.push(newTask);
//     await AsyncStorage.setItem('tasks', JSON.stringify(tasks));

//     router.back();
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Task</Text>
//       <TextInput style={styles.input} value={task} onChangeText={setTask} placeholder="Enter Task" />

//       <Text style={styles.label}>Time</Text>
//       <TextInput style={styles.input} value={time} onChangeText={setTime} placeholder="Enter Time" />

// <TouchableOpacity style={styles.btn} onPress={saveTask}>
//       <Text style={styles.txt}>Add task</Text>
// </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20 },
//   label: { fontSize: 18, marginBottom: 5 },
//   input: { borderWidth: 1, borderColor: '#ddd', padding: 10, fontSize: 18, borderRadius: 6, marginBottom: 10 },
//   btn:{backgroundColor:"#5E548E", borderRadius:6, padding:10, alignItems:"center"},
//   txt:{color:"#fff", fontSize:18}
// });

// export default AddTask;














import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

const AddTask = () => {
  const [task, setTask] = useState('');
  const [time, setTime] = useState('');
  const router = useRouter();

  const saveTask = async () => {
    const savedTasks = await AsyncStorage.getItem('tasks');
    const tasks = savedTasks ? JSON.parse(savedTasks) : [];

    const newTask = {
      title: task,
      time: time,
      completed: false,
    };
    tasks.push(newTask);
    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));

    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Task</Text>
      <TextInput style={styles.input} value={task} onChangeText={setTask} placeholder="Enter Task" />

      <Text style={styles.label}>Time</Text>
      <TextInput style={styles.input} value={time} onChangeText={setTime} placeholder="Enter Time" />

      <Button title="Add Task" onPress={saveTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontSize: 18, marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#ddd', padding: 10, fontSize: 18, borderRadius: 6, marginBottom: 10 },
});

export default AddTask;
