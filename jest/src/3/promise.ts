import axios from 'axios';

export const fetchData = (n: number) => axios.get('https://jsonplaceholder.typicode.com/posts/' + n);
