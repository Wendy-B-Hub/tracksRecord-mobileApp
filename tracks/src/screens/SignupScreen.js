import React, {useContext} from "react";
import {View,StyleSheet} from "react-native";
import {Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink"
import {NavigationEvents} from "react-navigation";

const SignupScreen=({navigation })=>{
  const {state,signup,clearErrorMessage}=useContext(AuthContext);


  // useEffect(()=>{
  //   tryLocalSignin();
  // },[])

  return(<View style={styles.container}>
    <NavigationEvents onWillFocus={clearErrorMessage} />
    <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
    />
    <NavLink footerText="Already have an account? Sign in instead!"
             routeName="Signin"/>
  </View>)
}


SignupScreen.navigationOptions=({navigation})=>{
  return {
    headerShown:false
  };
}


const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
})


export default SignupScreen;

































































