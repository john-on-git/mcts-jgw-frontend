import axios from 'axios';
import { Application } from 'express';

export default function (app: Application): void {
  app.get('/', async (req, res) => {
    try {
      // An example of connecting to the backend (a starting point)
      const response = await axios.get('http://localhost:4000/task/index');
      res.render('home', { 'tasks': response.data });
    } catch (error) {
      console.error('Error making request:', error);
      res.render('error');
    }
  });
  app.get('/details', async(req,res) => {
    try {
      // An example of connecting to the backend (a starting point)
      const response = await axios.get('http://localhost:4000/task/details', {
        params: {
          id: req.query['id']
        }
      });
      res.render('details', { 'task': response.data });
    } catch (error) {
      console.error('Error making request:', error);
      res.render('error');
    }
  });
  app.get('*', async (req, res) => res.render('not-found'));
}
