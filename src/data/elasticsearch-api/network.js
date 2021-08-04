import axios from 'axios';


let API_URL = 'https://b83cfb93c1164d808af4d36cc1e627c7.europe-west1.gcp.cloud.es.io:9243/forward43/_search';

const client = axios.create({
  baseURL: API_URL,
});

export default client;
