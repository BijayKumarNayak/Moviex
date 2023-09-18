import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";



const headers={
  accept: 'application/json',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWVjZDhlZDAwYTM5YzdiMDc5ZDI3ZTVkYzAxNTQ2ZSIsInN1YiI6IjY0ZWI0YmFjNDU4MTk5MDBlMzUzNzAxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.imlWJTxeASB_qPlgU9bfUbjYIb0c_enjazGix0Lu6GQ'
}



export const fetchApiData = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,params
    

    
    });

    return data;
  } catch (error) {
    return error;
  }
};
