import axios from 'axios';
import {
    API_URL, BASE_URL
  } from './axios/config';

export const getPoliticalParties = async () => {
    try {
        const response = await axios.get(BASE_URL + API_URL.POLITICAL_PARTIES, {
            headers: { 
                'accept': 'application/json',
            },
            params: {
                limit: 500,
                offset: 0
            },
        });
        return response.data;
      } catch (error) {
        return console.log('error');
      }
  };

  export const getNew = async () => {
    try {
        const response = await axios.get(BASE_URL + API_URL.NEW, {
            headers: { 
                'accept': 'application/json',
            },
            params: {
                limit: 500,
                offset: 0
            },
        });
        return response.data;
      } catch (error) {
        return console.log('error');
      }
  };

  export const getNewSenate = async () => {
    try {
        const response = await axios.get(BASE_URL + API_URL.NEWSENATE, {
            headers: { 
                'accept': 'application/json',
            },
            params: {
                limit: 500,
                offset: 0
            },
        });
        return response.data;
      } catch (error) {
        return console.log('error');
      }
  };

  export const getNewPolls = async () => {
    try {
        const response = await axios.get(BASE_URL + API_URL.POLLS_NEWS, {
            headers: { 
                'accept': 'application/json',
            },
            params: {
                limit: 500,
                offset: 0
            },
        });
        return response.data;
      } catch (error) {
        return console.log('error');
      }
  };

  export const getScrutiny = async () => {
    try {
        const response = await axios.get(BASE_URL + API_URL.SCRUTINY, {
            headers: { 
                'accept': 'application/json',
            },
            params: {
                limit: 500,
                offset: 0
            },
        });
        return response.data;
      } catch (error) {
        return console.log('error');
      }
  };

  export const getScrutinySenate = async () => {
    try {
        const response = await axios.get(BASE_URL + API_URL.SCRUTINYSENATE, {
            headers: { 
                'accept': 'application/json',
            },
            params: {
                limit: 500,
                offset: 0
            },
        });
        return response.data;
      } catch (error) {
        return console.log('error');
      }
  };

  export const getAlliance = async () => {
    try {
        const response = await axios.get(BASE_URL + API_URL.ALLIANCE, {
            headers: { 
                'accept': 'application/json',
            },
        });
        return response.data;
      } catch (error) {
        return console.log('error');
      }
  };

  export const getMainAlliance = async () => {
    try {
        const response = await axios.get(BASE_URL + API_URL.MAINALLIANCE, {
            headers: { 
                'accept': 'application/json',
            },
        });
        return response.data;
      } catch (error) {
        return console.log('error');
      }
  };

  export const getPollsValue = async () => {
    try {
        const response = await axios.get(BASE_URL + API_URL.POLLS, {
            headers: { 
                'accept': 'application/json',
            },
        });
        return response.data;
      } catch (error) {
        return console.log('error');
      }
  };



