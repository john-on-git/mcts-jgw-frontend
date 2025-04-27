import axios, { HttpStatusCode } from 'axios';
import { Application } from 'express';


export default function (app: Application): void {
  app.get('/create', (req,res) => {
    try {
      res.render('create');
    } catch (error) {
      console.error('Error making request:', error);
      res.render('error');
    }
  });
  app.get('/', async (_, res) => {
    try {
      //get the tasks from the backend API / task service
      const response = await axios.get('http://localhost:4000/task/index');
      res.render('home', { 'tasks': response.data });
    } catch (error) {
      console.error('Error making request:', error);
      res.render('error');
    }
  });
  
  app.get('/details', async(req,res) => {
    try {
      //get the task from the backend API / task service
      const response = await axios.get('http://localhost:4000/task/details', {
        params: {
          id: req.query['id']
        }
      });
      if(response.data !== null) {
        res.render('details', { 'task': response.data });
      }
      else {
        res.render('not-found'); //display not found if the task doesn't exist
      }
    } catch (error) {
      console.error('Error making request:', error);
      res.render('error');
    }
  });
  
  app.get('/details', async(req,res) => {
    try {
      //get the task from the backend API / task service
      const response = await axios.get('http://localhost:4000/task/details', {
        params: {
          id: req.query['id']
        }
      });
      if(response.data !== null) {
        res.render('details', { 'task': response.data });
      }
      else {
        res.render('not-found'); //display not found if the task doesn't exist
      }
    } catch (error) {
      console.error('Error making request:', error);
      res.render('error');
    }
  });
  app.get('/delete', async (req, res) => {
    try {
      //get the tasks from the backend API / task service
      const response = await axios.delete('http://localhost:4000/task/delete', {
        params: {
          id: req.query['id']
        }
      });
      if(response.status === HttpStatusCode.Ok) {
        res.redirect('/');
      }
      else {
        res.redirect(`/details?id=${req.query['id']}`);
      }
    } catch (error) {
      console.error('Error making request:', error);
      res.render('error');
    }
  });
}
