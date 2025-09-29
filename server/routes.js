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
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
    } else {
      next();
    }
  });
  
  // Health check endpoint
  app.get('/api/health', healthCheck);
  
  // Form submission endpoints
  app.post('/api/forms', submitForm);
  
  // Note: Read endpoints are currently public for development
  // TODO: Add authentication/authorization before production deployment
  app.get('/api/forms', getAllSubmissions);
  app.get('/api/forms/stats', getSubmissionStats);
  app.get('/api/forms/:id', getSubmissionById);

  const httpServer = createServer(app);

  return httpServer;
}