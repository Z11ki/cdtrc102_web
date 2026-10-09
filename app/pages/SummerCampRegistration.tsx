import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  CheckCircle, 
  AlertCircle,
  User,
  Phone,
  Mail,
  MapPin,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface FormData {
  // Participant Information
  participantName: string;
  dateOfBirth: string;
  age: string;
  gender: string;
  schoolName: string;
  gradeLevel: string;
  participantPhone: string;
  participantEmail: string;
  address: string;
  medicalConditions: string;
  
  // Guardian Information
  guardianName: string;
  relationship: string;
  guardianPhone: string;
  guardianEmail: string;
  guardianAddress: string;
}

interface FormErrors {
  [key: string]: string;
}

export function SummerCampRegistration() {
  const [formData, setFormData] = useState<FormData>({
    participantName: '',
    dateOfBirth: '',
    age: '',
    gender: '',
    schoolName: '',
    gradeLevel: '',
    participantPhone: '',
    participantEmail: '',
    address: '',
    medicalConditions: '',
    guardianName: '',
    relationship: '',
    guardianPhone: '',
    guardianEmail: '',
    guardianAddress: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Required fields validation
    const requiredFields = [
      'participantName', 'dateOfBirth', 'age', 'gender', 
      'guardianName', 'relationship', 'guardianPhone', 'guardianEmail'
    ];

    requiredFields.forEach(field => {
      if (!formData[field as keyof FormData] || (formData[field as keyof FormData] as string).trim() === '') {
        newErrors[field] = `${field.replace(/([A-Z])/g, ' $1').toLowerCase()} is required`;
      }
    });

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.participantEmail && !emailPattern.test(formData.participantEmail)) {
      newErrors.participantEmail = 'Please enter a valid email address';
    }
    if (formData.guardianEmail && !emailPattern.test(formData.guardianEmail)) {
      newErrors.guardianEmail = 'Please enter a valid guardian email address';
    }

    // Age validation
    const age = parseInt(formData.age);
    if (formData.age && (isNaN(age) || age < 6 || age > 21)) {
      newErrors.age = 'Age must be between 6 and 21';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Registration data:', formData);
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsLoading(false);
    }
  };
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto bg-white rounded-3xl shadow-2xl p-8 text-center"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Registration Successful!
          </h2>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            Thank you for registering for TESFA TEWLED Summer Camp 2026! 
            We have received your application and our team will contact you 
            within 2-3 business days with further details.
          </p>
          
          <p className="text-sm text-gray-500 mb-8">
            A confirmation will be sent to your registered email address.
          </p>
          
          <Link to="/programs">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 bg-[#129246] text-white rounded-full font-semibold hover:bg-[#0f7a39] transition-colors"
            >
              Back to Programs
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link to="/programs" className="inline-flex items-center text-[#129246] hover:text-[#0f7a39] mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Programs
          </Link>
          
          <div className="text-center">
            <div className="text-6xl mb-4">🏕️</div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              <span className="text-[#F79321]">TESFA</span> <span className="text-[#129246]">TEWLED</span>
            </h1>
            <h2 className="text-xl text-gray-700 mb-2">Summer Camp 2026 Registration</h2>
            <p className="text-gray-600">
              Please fill out the information below to register for our summer camp.
            </p>
          </div>
        </motion.div>
        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          {/* Participant Information Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#129246] rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Participant Information</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <InputField
                label="Full Name"
                type="text"
                value={formData.participantName}
                onChange={(value) => handleInputChange('participantName', value)}
                error={errors.participantName}
                required
                placeholder="Enter participant's full name"
              />
              
              <InputField
                label="Date of Birth"
                type="date"
                value={formData.dateOfBirth}
                onChange={(value) => handleInputChange('dateOfBirth', value)}
                error={errors.dateOfBirth}
                required
              />
              
              <InputField
                label="Age"
                type="number"
                value={formData.age}
                onChange={(value) => handleInputChange('age', value)}
                error={errors.age}
                required
                placeholder="6-21 years"
                min="6"
                max="21"
              />
              
              <SelectField
                label="Gender"
                value={formData.gender}
                onChange={(value) => handleInputChange('gender', value)}
                error={errors.gender}
                required
                options={[
                  { value: '', label: 'Select gender' },
                  { value: 'male', label: 'Male' },
                  { value: 'female', label: 'Female' }
                ]}
              />
              
              <InputField
                label="School Name (Optional)"
                type="text"
                value={formData.schoolName}
                onChange={(value) => handleInputChange('schoolName', value)}
                error={errors.schoolName}
                placeholder="Current school"
              />
              
              <InputField
                label="Grade Level (Optional)"
                type="text"
                value={formData.gradeLevel}
                onChange={(value) => handleInputChange('gradeLevel', value)}
                error={errors.gradeLevel}
                placeholder="e.g., Grade 5, Form 2"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <InputField
                label="Phone Number (Optional)"
                type="tel"
                value={formData.participantPhone}
                onChange={(value) => handleInputChange('participantPhone', value)}
                error={errors.participantPhone}
                placeholder="Participant's phone (if applicable)"
              />
              
              <InputField
                label="Email Address (Optional)"
                type="email"
                value={formData.participantEmail}
                onChange={(value) => handleInputChange('participantEmail', value)}
                error={errors.participantEmail}
                placeholder="participant@example.com"
              />
            </div>
            
            <div className="mt-6">
              <TextAreaField
                label="Address (Optional)"
                value={formData.address}
                onChange={(value) => handleInputChange('address', value)}
                error={errors.address}
                placeholder="Residential address"
                rows={3}
              />
            </div>
            
            <div className="mt-6">
              <TextAreaField
                label="Medical Conditions/Allergies (Optional)"
                value={formData.medicalConditions}
                onChange={(value) => handleInputChange('medicalConditions', value)}
                error={errors.medicalConditions}
                placeholder="Any medical conditions, allergies, or special needs we should know about"
                rows={3}
              />
            </div>
          </div>

          {/* Guardian Information Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#F79321] rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Guardian Information</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <InputField
                label="Guardian's Full Name"
                type="text"
                value={formData.guardianName}
                onChange={(value) => handleInputChange('guardianName', value)}
                error={errors.guardianName}
                required
                placeholder="Parent/Guardian full name"
              />
              
              <InputField
                label="Relationship to Participant"
                type="text"
                value={formData.relationship}
                onChange={(value) => handleInputChange('relationship', value)}
                error={errors.relationship}
                required
                placeholder="e.g., Parent, Guardian, Uncle"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <InputField
                label="Guardian Phone Number"
                type="tel"
                value={formData.guardianPhone}
                onChange={(value) => handleInputChange('guardianPhone', value)}
                error={errors.guardianPhone}
                required
                placeholder="Guardian's phone number"
              />
              
              <InputField
                label="Guardian Email Address"
                type="email"
                value={formData.guardianEmail}
                onChange={(value) => handleInputChange('guardianEmail', value)}
                error={errors.guardianEmail}
                required
                placeholder="guardian@example.com"
              />
            </div>
            
            <div className="mt-6">
              <TextAreaField
                label="Guardian Address (Optional)"
                value={formData.guardianAddress}
                onChange={(value) => handleInputChange('guardianAddress', value)}
                error={errors.guardianAddress}
                placeholder="Guardian's residential address"
                rows={3}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
              className={`w-full py-4 px-8 rounded-full font-semibold text-lg transition-all duration-300 ${
                isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-[#F79321] hover:bg-[#e87a0a] shadow-lg hover:shadow-xl'
              } text-white`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Submitting Registration...
                </span>
              ) : (
                'Submit Registration'
              )}
            </motion.button>
            
            {Object.keys(errors).length > 0 && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center gap-2 text-red-800">
                  <AlertCircle className="w-5 h-5" />
                  <span className="font-medium">Please correct the following errors:</span>
                </div>
                <ul className="mt-2 text-sm text-red-700 list-disc list-inside">
                  {Object.values(errors).map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </motion.form>
      </div>
    </div>
  );
}
// Input Components
interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
  min?: string;
  max?: string;
}

function InputField({ 
  label, 
  type, 
  value, 
  onChange, 
  error, 
  required, 
  placeholder, 
  min, 
  max 
}: InputFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        min={min}
        max={max}
        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#129246] focus:border-transparent transition-colors ${
          error ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
        }`}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  );
}

interface SelectFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  options: { value: string; label: string }[];
}

function SelectField({ 
  label, 
  value, 
  onChange, 
  error, 
  required, 
  options 
}: SelectFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#129246] focus:border-transparent transition-colors ${
          error ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
        }`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  );
}
interface TextAreaFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
}

function TextAreaField({ 
  label, 
  value, 
  onChange, 
  error, 
  required, 
  placeholder, 
  rows = 4 
}: TextAreaFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#129246] focus:border-transparent transition-colors resize-vertical ${
          error ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
        }`}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  );
}