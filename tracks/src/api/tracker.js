import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance=axios.create({
  baseURL:'https://9f25-2601-647-4d80-17c0-855a-c072-59d1-da13.ngrok.io'
})

instance.interceptors.request.use(
    async (config)=>{
      const token = await AsyncStorage.getItem('token');
      if(token){
        config.headers.Authorization=`Bearer ${token}`
      }
      return config;
    },
    (err)=>{
      return Promise.reject(err)
    },
)


export default instance;


















































