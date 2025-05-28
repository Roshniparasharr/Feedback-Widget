import { useState, useEffect } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackPreview from './components/FeedbackPreview';

function App() {
 // This is where we store all the feedback info, starting with empty values.
  const [feedback, setFeedback] = useState({
    name: '', 
    email: '', 
    rating: 0, 
    comment: '',
  });

  // to track if user has started giving feedback (for preview)
  const [hasFeedback, setHasFeedback] = useState(false);
  
  // Track if feedback was submitted to show thank you message
  const [submitted, setSubmitted] = useState(false);

  // Load saved feedback when page loads
  // Using localStorage 
  useEffect(() => {
    const storedFeedback = localStorage.getItem('feedback');
    if (storedFeedback) {
      setFeedback(JSON.parse(storedFeedback));
      setHasFeedback(true);
      setSubmitted(true);
    }
  }, []);

  // Handle changes in form inputs
  // Using single handler for all fields to reduce code duplication
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback(prev => ({
      ...prev,
      // Convert rating to number since input values are strings
      [name]: name === 'rating' ? parseInt(value) : value,
    }));
    setHasFeedback(true);
  };

  // save feedback to lS when submitted
  const handleSubmit = () => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
    setSubmitted(true);
  };

  // Reset all feedback data
  // Also clears localStorage
  const handleReset = () => {
    setFeedback({ 
      name: '', 
      email: '', 
      rating: 0, 
      comment: '', 
      date: new Date().toISOString().split('T')[0] 
    });
    localStorage.removeItem('feedback');
    setHasFeedback(false);
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-amber-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-amber-900 mb-2">Feedback Widget</h1>
        </header>

        {/* Using flex with responsive direction gives us simpler control for this 2-column layout */}
        <div className="flex flex-wrap gap-8 items-start">
          {/* Flex with min-width to control when wrapping occurs */}
          <div className="min-w-[300px] flex-1">
            <FeedbackForm 
              feedback={feedback} 
              onChange={handleChange} 
              onSubmit={handleSubmit} 
              onReset={handleReset} 
              submitted={submitted} 
            />
          </div>
          
          <div className="min-w-[300px] flex-1 sticky top-8">
            <FeedbackPreview 
              feedback={feedback} 
              hasFeedback={hasFeedback} 
              onReset={handleReset} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;