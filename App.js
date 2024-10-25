import React from 'react';
import { View, Text, Image } from 'react-native';
import Movie from './components/Movie';
import {ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";



const AllMovies = () => {
  return (
      <View>
        <ScrollView>
        <Text></Text>
        <Text></Text>
        <Text></Text>

        <Movie
            title="Doctor Sleep"
            year={2019}
            icon_name="paw"
            poster={require('./img/doctor-sleep.jpg')}
        />

        <Movie
            title="Midway"
            year={2020}
            icon_name="person-rifle"
            poster={require('./img/midway.jpg')}
        />
        </ScrollView>
      </View>
  );
};

export default AllMovies;


//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
