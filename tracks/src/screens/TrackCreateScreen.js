import '../_mockLocation';
import React,{useEffect,useState,useContext,useCallback} from "react";
import {StyleSheet} from "react-native";
import Map from '../components/Map';
import { Text } from 'react-native-elements';
import { SafeAreaView,withNavigationFocus } from 'react-navigation';
import {Context as LocationContext} from '../context/LocationContext'
import useLocation from "../hooks/useLocation";
import TrackForm from '../components/TrackForm';
import { FontAwesome } from '@expo/vector-icons';

const TrackCreateScreen=({isFocused})=>{    //isFocused 来自于 withNavigationFocus

  const {state:{recording},addLocation}=useContext(LocationContext);
  //version1:
/*  const[err]=useLocation(location=>{
    addLocation(location);
  })*/

  //version2:
/*
  const [err] = useLocation(isFocused, addLocation);
*/

  //version3:

/*  const [err] = useLocation(isFocused, (location)=>{
    addLocation(location,state.recording);
  });
  */
  //version4:
  const callback = useCallback(
      location => {
        addLocation(location, recording);
      },
      [recording]
  );
  const [err] = useLocation(isFocused || recording, callback);

  return(
      <SafeAreaView forceInset={{ top: 'always' }}>
        <Text h2>Create a Track</Text>
        <Map />
        {err ? <Text>Please grant us location access</Text> : null}
        <TrackForm/>
      </SafeAreaView>
  )
}

TrackCreateScreen.navigationOptions={
  title:'Add Track',
  tabBarIcon:<FontAwesome name="plus" size={20} color="black" />
}



const styles=StyleSheet.create({})

export default withNavigationFocus(TrackCreateScreen);

































































