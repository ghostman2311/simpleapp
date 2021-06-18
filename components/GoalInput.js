import React,{useState} from 'react';
import {View, Button, TextInput, StyleSheet, Modal} from 'react-native';

const GoalInput = (props) => {
  const[enteredGoal, setEnteredGoal] = useState('');


  const goalHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }


  return(
      <Modal visible={props.visible}>
        <View style = {styles.inputArea}>
          <TextInput placeholder="Course Goal" style={styles.input} onChangeText = {goalHandler} />
          <View style={styles.buttonContainer}>
            <Button title="Add Goal" onPress = {addGoalHandler} />
            <Button title="Cancel" onPress={props.onCancel} color='red' />
          </View>
        </View>
      </Modal>

  );
}


const styles = StyleSheet.create({
  input:{
    borderBottomColor: 'black',
    borderBottomWidth:1,
    padding:5,
    width:'70%',
    marginBottom:10
  },
  inputArea:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer:
  {
    flexDirection:'row',
    justifyContent:'space-around',
    width: '60%'
  }
});

export default GoalInput;
