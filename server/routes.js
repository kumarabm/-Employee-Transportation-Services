import { createServer } from "http";

import {
  submitForm,
  getAllSubmissions,
  getSubmissionById,
  getSubmissionStats,
  healthCheck
} from './controllers/formController.js';

export async function registerRoutes(app) {
  // CORS middleware for form submissions (must be before routes)
  app.use('/api/forms', (req, res, next) => {  
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
    } else {
      next();
    }
  });
  

  app.get('/api/health', healthCheck);
  
  // Form submission endpoints
  app.post('/api/forms', submitForm);
  
  
  app.get('/api/forms', getAllSubmissions);
  app.get('/api/forms/stats', getSubmissionStats);
  app.get('/api/forms/:id', getSubmissionById);

  const httpServer = createServer(app);

  return httpServer;
}