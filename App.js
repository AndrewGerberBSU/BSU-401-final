import * as React from 'react';
import { Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TextField from "@mui/material/TextField";
var studentlist = [
  { id: 1, name: 'Cesar Raymundo', present: false },
  { id: 2, name: 'Andrew Gerber', present: false },
  { id: 3, name: 'Zeynep Ozarslan', present: false },
];

const [ashowme, setshowme] = useState(false);

function HomeScreen() {
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


  </View>
  );

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

function addButton(){
  
}
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
