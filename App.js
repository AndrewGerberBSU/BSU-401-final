import React, { useState, useEffect } from 'react';
import { Text, View,Button, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DialogInput from 'react-native-dialog-input';
var studentlist = [
  { id: 1, name: 'Cesar Raymundo', present: false },
  { id: 2, name: 'Andrew Gerber', present: false },
  { id: 3, name: 'Zeynep Ozarslan', present: false },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity>
    <Text >{item.title}</Text>
  </TouchableOpacity>
);


// function plusButton() {
//       const newSong = newNAMETEXT
//       const newList = addSong(newSong)
//       setlist(newList);
//     }

function HomeScreen() {
  const [list, setlist] = useState(studentlist);
   const [ashowme, setshowme] = useState(false);


//onPress={() => {toggleList(item.key)}}
   const renderItem = ({ item }) => {
        const backgroundColor = item.selected ? 'purple' : 'white';
         const color = item.selected ? 'white' : 'black';
             return (
      <Item
        item={item}
      />
    );
        };



  return ( 
    <View>
    <Button title="Add a Student" onPress={() => addButton()}/>
    <table>
      <tr>
        <th className="studentName">Student Name</th>
        <th className="attendance">Attendance</th>
      </tr>
      {studentlist.map((student) => (
        <tr>
          <td className="studentName">{student.name}</td>
          <td className="attendance">
            <input type="checkbox" />
          </td>
        </tr>
      ))}
    </table>
    <Button title="submit" />
  <DialogInput
        isDialogVisible={ashowme}
        title="Student's Name"
        message="Enter The Student's Name To Add"
        submitInput={(InputText) => {
          setshowme(false);
          addStudent(InputText);
          // addLocation(InputText);
        }}
        closeDialog={() => {
          setshowme(false);
        }}>
        <Text>Something</Text>
      </DialogInput>

  </View>
  );
  function addButton(){
    setshowme(true);
}
function addStudent(InputText){
  const name = InputText
  const newList = list.push({ id: list.length+1, name: name, present: false })
  console.log(newList)
  setlist(newList)
}
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}


export default function App() {
 
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );

}
