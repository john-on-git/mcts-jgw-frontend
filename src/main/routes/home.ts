import axios from 'axios';
import { Application } from 'express';

export default function (app: Application): void {
  app.get('/', async (req, res) => {
    try {
      // An example of connecting to the backend (a starting point)
      const response = await axios.get('http://localhost:4000/task/details?id=1');
      console.log(response.data);
      res.render('home', { 'example': response.data });
    } catch (error) {
      console.error('Error making request:', error);
      res.render('error');
    }
  });
  app.get('*', async (req, res) => res.render('not-found'));
}
