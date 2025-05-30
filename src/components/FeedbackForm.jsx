import { Check } from 'lucide-react';
import InputField from './InputField';
const FeedbackForm = ({ feedback, onChange, onSubmit, onReset, submitted }) => {
  // if submitted already show thank you message instead of form
  if (submitted) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg border border-amber-200">
        <h2 className="text-2xl font-bold mb-6 text-amber-900 border-b pb-3 border-amber-100">
          Feedback Recorded
        </h2>
        <div className="text-center py-8">
          <Check 
            className="w-16 h-16 mx-auto text-amber-500 mb-4 stroke-2"
          />
          <h3 className="text-xl font-semibold text-amber-800 mb-2">Thank You!</h3>
          <p className="text-amber-600 mb-6">Your feedback has been recorded.</p>
          <button 
            onClick={onReset} 
            className="bg-amber-700 hover:bg-amber-800 text-white py-2 px-6 rounded-lg font-medium transition-colors"
          >
            Add New Feedback
          </button>
        </div>
      </div>
    );
  }


  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-amber-200">
      <h2 className="text-2xl font-bold mb-6 text-amber-900 border-b pb-3 border-amber-100">
        Share Your Feedback
      </h2>
      <div className="space-y-5">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField 
            label="Name *" 
            name="name" 
            value={feedback.name} 
            onChange={onChange} 
            required 
          />
          <InputField 
            label="Email (optional)" 
            name="email" 
            type="email" 
            value={feedback.email} 
            onChange={onChange} 
          />
        </div>
    
        {/* rating input as clickable buttons which is more intuitive than dropdowns */}
        <div>
          <label className="block text-sm font-medium text-amber-800 mb-2">
            How would you rate your experience? *
          </label>
          <div className="flex justify-between">
            {[1,2,3,4,5].map(rating => (
              <button 
                key={rating} 
                type="button" 
                onClick={() => onChange({ target: { name: 'rating', value: rating } })}
                className={`flex flex-col items-center justify-center w-12 h-12 
                  rounded-full transition-all ${
                    feedback.rating === rating 
                      ? 'bg-amber-600 text-white scale-110' // selected state
                      : 'bg-amber-100 text-amber-800 hover:bg-amber-200' // default state
                  }`}
              >
                <span className="text-lg font-medium">{rating}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Comment */}
        <div>
          <label className="block text-sm font-medium text-amber-800 mb-1">
            Tell us more (optional)
          </label>
          <textarea 
            name="comment" 
            value={feedback.comment} 
            onChange={onChange} 
            rows="3"
            className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 
              focus:ring-amber-500 focus:border-amber-500"
            placeholder="What did you like or what could we improve?" 
          />
        </div>
        
        {/* action buttons */}
        <div className="pt-4 flex gap-4">
          <button 
            onClick={onSubmit} 
            className="w-2/3 bg-amber-700 hover:bg-amber-800 text-white py-3 px-6 
              rounded-lg font-medium transition-colors"
          >
            Submit Feedback
          </button>
          <button 
            onClick={onReset} 
            className="w-1/3 bg-amber-100 hover:bg-amber-200 text-amber-800 py-3 px-6 
              rounded-lg font-medium transition-colors border border-amber-300"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;