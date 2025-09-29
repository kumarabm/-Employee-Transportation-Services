import FormSubmission from '../models/FormSubmission.js';

// Submit a new form
const submitForm = async (req, res) => {
  try {
    const formData = req.body;
    
    // Add metadata
    formData.ipAddress = req.ip || req.connection.remoteAddress;
    formData.userAgent = req.get('User-Agent');
    
    // Create new form submission
    const submission = new FormSubmission(formData);
    const savedSubmission = await submission.save();
    
    res.status(201).json({
      success: true,
      message: 'Form submitted successfully!',
      data: {
        id: savedSubmission._id,
        formType: savedSubmission.formType,
        submittedAt: savedSubmission.submittedAt
      }
    });
    
  } catch (error) {
    console.error('Form submission error:', error);
    
    if (error.name === 'ValidationError') {
      const errors = Object.keys(error.errors).map(key => ({
        field: key,
        message: error.errors[key].message
      }));
      
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Failed to submit form. Please try again later.'
    });
  }
};

// Get all form submissions
const getAllSubmissions = async (req, res) => {
  try {
    const { formType, page = 1, limit = 10, sortBy = 'submittedAt', order = 'desc' } = req.query;
    
    // Build filter
    const filter = {};
    if (formType) {
      filter.formType = formType;
    }
    
    // Calculate pagination
    const skip = (page - 1) * limit;
    
    // Build sort object
    const sort = {};
    sort[sortBy] = order === 'desc' ? -1 : 1;
    
    // Get submissions
    const submissions = await FormSubmission
      .find(filter)
      .sort(sort)
      .skip(parseInt(skip))
      .limit(parseInt(limit))
      .select('-ipAddress -userAgent'); // Exclude sensitive data
    
    // Get total count for pagination
    const total = await FormSubmission.countDocuments(filter);
    
    res.json({
      success: true,
      data: submissions,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / limit),
        totalItems: total,
        itemsPerPage: parseInt(limit)
      }
    });
    
  } catch (error) {
    console.error('Error fetching submissions:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch submissions'
    });
  }
};

// Get submission by ID
const getSubmissionById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const submission = await FormSubmission
      .findById(id)
      .select('-ipAddress -userAgent'); // Exclude sensitive data
    
    if (!submission) {
      return res.status(404).json({
        success: false,
        message: 'Submission not found'
      });
    }
    
    res.json({
      success: true,
      data: submission
    });
    
  } catch (error) {
    console.error('Error fetching submission:', error);
    
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid submission ID'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Failed to fetch submission'
    });
  }
};

// Get submission statistics
const getSubmissionStats = async (req, res) => {
  try {
    const stats = await FormSubmission.aggregate([
      {
        $group: {
          _id: '$formType',
          count: { $sum: 1 },
          latestSubmission: { $max: '$submittedAt' }
        }
      },
      {
        $sort: { count: -1 }
      }
    ]);
    
    const totalSubmissions = await FormSubmission.countDocuments();
    
    res.json({
      success: true,
      data: {
        totalSubmissions,
        byFormType: stats
      }
    });
    
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch statistics'
    });
  }
};

// Health check
const healthCheck = async (req, res) => {
  try {
    // Check if MongoDB is connected
    const mongoose = await import('mongoose');
    const dbStatus = mongoose.default.connection.readyState;
    const dbStatusText = dbStatus === 1 ? 'connected' : 'disconnected';
    
    res.json({
      success: true,
      status: 'API is running',
      database: dbStatusText,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Health check failed'
    });
  }
};

export {
  submitForm,
  getAllSubmissions,
  getSubmissionById,
  getSubmissionStats,
  healthCheck
};