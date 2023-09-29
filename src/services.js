import axios from 'axios';
import {
    API_URL, BASE_URL
  } from './axios/config';


export const getTickers = async () => {
    try {
        const response = await axios.get(BASE_URL + API_URL.TICKERS, {
            headers: { 
                'accept': 'application/json',
                'Authorization': 'Token b5623cd9503a61730316c3aebe5647fbb5425377'
            },            
        });
        return response.data;
      } catch (error) {
        return console.log('error');
      }
  };

  export const getTickersTimming = async () => {
    try {
      const response = await axios.get(BASE_URL + API_URL.TICKERS_CONTROL, {
          headers: { 
              'accept': 'application/json',
              'Authorization': 'Token b5623cd9503a61730316c3aebe5647fbb5425377'
          },            
      });
      return response.data;
    } catch (error) {
      return console.log('error');
    }
  }



