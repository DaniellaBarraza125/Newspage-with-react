import { createContext, useReducer } from 'react';
import AppReducer from "./AppReducer"
import axios from "axios"

const initialState = {
  news: [],
  data:{
    name: "",
    email: "",
    title: "",
    abstract: "",
    multimedia: "", }

}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const getNews = async () => {
        const res = await axios.get("https://api.nytimes.com/svc/news/v3/content/nyt/travel.json?api-key=ePmwGj831YbGvog7M79IINTt2cRrJ50x");
        dispatch({
          type: "GET_NEWS",
          payload: res.data.results,
        });
      };
    
      return (
        <GlobalContext.Provider
          value={{
            news: state.news,
            getNews,
          }}
        >
          {children}
        </GlobalContext.Provider>
      );
}  