import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const[courseGoal, setCourseGoal] = useState([]);
  const[isAddMode, setIsAddMode] = useState(false);
  const addGoalHandler = (goalTitle) => {
    setCourseGoal((currentGoals) => {
      return [...currentGoals, {
        key: Math.random().toString(),
        val: goalTitle
      }];
    });
    setIsAddMode(false);
  }

  const deleteListItem = (goalId) => {
    setCourseGoal((currentGoals) => {
      return currentGoals.filter((goal) => goal.key!==goalId)
    });
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }


  return (
    <View style={styles.screen} >
      <View style={styles.buttonFlex}>
        <Button title="Add new Goal" onPress = {() => setIsAddMode(true)}  />
      </View>
      <GoalInput visible={isAddMode} onAddGoal= {addGoalHandler} onCancel={cancelGoalAdditionHandler} />
      <FlatList data={courseGoal} renderItem={(itemData) => <GoalItem id = {itemData.item.key} onDelete = {deleteListItem} title={itemData.item.val} /> }>
      </FlatList>
    </View>
  );


}

const styles = StyleSheet.create({
  screen:{
    padding:30
  },
  buttonFlex:{
    justifyContent: 'center',
    alignItems: 'center'
  }


});
