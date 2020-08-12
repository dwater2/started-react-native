import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import api from './services/api';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() =>{
    api.get('/repositories').then(response => {
      console.log(response.data);
      setProjects(response.data);
    });
  });

  return ( 
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159C1" ></StatusBar>
      <View style={style.container}>
        <Text style={style.title}>Hello GoStack</Text>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159C1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold'
  },
});