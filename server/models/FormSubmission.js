import mongoose from 'mongoose';

// Schema definition
const formSubmissionSchema = new mongoose.Schema({
  formType: {
    type: String,
    required: true,
    enum: ['contact', 'quote', 'booking', 'service-inquiry']
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters'],
    maxlength: [100, 'Name must be less than 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    trim: true,
    match: [/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number']
  },
  company: {
    type: String,
    trim: true,
    maxlength: [200, 'Company name must be less than 200 characters']
  },
  message: {
    type: String,
    trim: true,
    maxlength: [1000, 'Message must be less than 1000 characters']
  },
  
  // Contact form specific fields
  contactMessage: {
    type: String,
    trim: true,
    maxlength: [1000, 'Message must be less than 1000 characters']
  },
  
  // Quote form specific fields
  companyName: {
    type: String,
    trim: true,
    maxlength: [200, 'Company name must be less than 200 characters']
  },
  businessEmail: {
    type: String,
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid business email']
  },
  employeeCount: {
    type: String,
    enum: ['1-50', '51-200', '201-500', '500+']
  },
  serviceType: {
    type: String,
    enum: ['transportation', 'logistics', 'consulting', 'other']
  },
  
  // Booking form specific fields
  date: {
    type: String,
    trim: true
  },
  time: {
    type: String,
    trim: true
  },
  adults: {
    type: Number,
    min: [0, 'Adults count cannot be negative'],
    max: [50, 'Adults count cannot exceed 50']
  },
  children: {
    type: Number,
    min: [0, 'Children count cannot be negative'],
    max: [50, 'Children count cannot exceed 50']
  },
  
  // Service inquiry specific fields
  serviceInterest: {
    type: String,
    enum: ['web-development', 'mobile-app', 'design', 'consulting', 'other']
  },
  budget: {
    type: String,
    enum: ['under-10k', '10k-25k', '25k-50k', '50k-100k', 'over-100k']
  },
  
  // Metadata
  submittedAt: {
    type: Date,
    default: Date.now
  },
  ipAddress: {
    type: String,
    trim: true
  },
  userAgent: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

// Indexes for better query performance
formSubmissionSchema.index({ formType: 1, submittedAt: -1 });
formSubmissionSchema.index({ email: 1 });
formSubmissionSchema.index({ submittedAt: -1 });

export default mongoose.model('FormSubmission', formSubmissionSchema);