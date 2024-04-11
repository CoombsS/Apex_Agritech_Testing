import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import { ref, set, update, onValue, remove } from "firebase/database";
import { db } from './components/config';





export default function App() {


  const [username, setName] = useState('');
  const [password, setPassword] = useState('');


  useEffect(() => {
    readData(); // Fetch data when component mounts
  }, []);

  function update(){                              //DOES NOT WORK
    update(ref(db, 'users/' + username), {
      username: username,
      password: password,
    }).then(() => {
      //Data saved successfully
      alert('data updated');
    })
      .catch((error) => {
        //Write failed
        alert(error);
      });
  };

  function submit(){

    //const newKey = push(child(ref(database), 'users')).key;

    set(ref(db, 'users/' + username), {
      username: username,
      password: password,
    }).then(() => {
      //Data saved successfully
      alert('data created');
    })
      .catch((error) => {
        //Write failed
        alert(error);
      });
  };

  function readData() {
    const userRef = ref(db, 'users/' + username); 
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setPassword(data.password);
      } else {
        alert('User not found');
      }
    });
  }
  

  function deleteData(){
    remove(ref(db, 'users/' +username));
    alert('removed' + username);
  }



  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Test</Text>
      <Text> Submit works</Text>
      <Text>Update does not work </Text>
      <Text>Read only works when creating items in same session</Text>
      <Text>Delete gets stuck in an loop and crashes, however does delete data</Text>

      <TextInput value ={username} onChangeText={(username)=>{setName(username)}} placeholder = "Username"  style={styles.textBoxes}></TextInput>
      <TextInput value ={password} onChangeText={(password)=>{setPassword(password)}} placeholder = "Password"  style={styles.textBoxes}></TextInput>
      <StatusBar style="auto" />
      <Button
        onPress={submit}
        title="Submit"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
/>
<Button
        onPress={update}
        title="Update"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
/> 

<Button
        onPress={readData}
        title="Read Data"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
/>
<Button
        onPress={deleteData}
        title="Delete Data"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBoxes: {
    width: '90%',
    fontSize: 18,
    padding: 12,
    borderColor: 'gray',
    borderWidth: 0.2,
    borderRadius: 10
  }
});
