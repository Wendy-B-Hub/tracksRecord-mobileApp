import React,{useContext} from "react";
import {View,StyleSheet,Text} from "react-native";
import  {Button} from "react-native-elements";
import Spacer from "../components/Spacer";
import {Context as AuthContext} from "../context/AuthContext";
import {SafeAreaView} from "react-navigation";
import { Feather } from '@expo/vector-icons';


const AccountScreen=()=>{
  const {signout}=useContext(AuthContext);
  return(<SafeAreaView forceInset={{top:'always'}}>

      <Text style={{fontSize:48}}>AccountScreen</Text>
        <Spacer>
          <Button title="Sign Out" onPress={signout} />
        </Spacer>
      </SafeAreaView>
  )
}

AccountScreen.navigationOptions={
  title:'Account',
  tabBarIcon:<Feather name="settings" size={24} color="black" />
}

const styles=StyleSheet.create({})


export default AccountScreen;

































































