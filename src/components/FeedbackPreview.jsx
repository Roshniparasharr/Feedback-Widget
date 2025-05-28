import { Star, MessageSquare } from 'lucide-react';

const FeedbackPreview = ({ feedback, hasFeedback, onReset }) => {
  // Show empty state if no feedback
  if (!hasFeedback) return <EmptyPreview />;
  
  const EmptyPreview = () => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-amber-200 sticky top-8">
        <h2 className="text-2xl font-bold mb-6 text-amber-900 border-b pb-3 border-amber-100">
            Feedback Summary
        </h2>
        <div className="text-center py-10">
            <MessageSquare className="w-16 h-16 mx-auto text-amber-300 mb-4"/>
        <h3 className="text-lg font-medium text-amber-700 mb-1">No feedback yet</h3>
        <p className="text-amber-500 text-sm">Complete the form to see your feedback preview</p>
        </div>
    </div>
   );

  return (
    <div className="bg-white p-6 pb-8.5 rounded-xl shadow-lg border border-amber-200 sticky top-8">
      <h2 className="text-2xl font-bold mb-6 text-amber-900 border-b pb-3 border-amber-100">
        Feedback Summary
      </h2>
      <div className="space-y-5">
        
        {/* User info, shows anonymous if name not provided */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-amber-800">
              {feedback.name || 'Anonymous'} 
            </h3>
            {/* only show email if entered */}
            {feedback.email && <p className="text-sm text-amber-600">{feedback.email}</p>}
          </div>
        </div>
        
        {/* rating display with stars */}
        <div className="bg-amber-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-3">
            <span className="font-medium text-amber-800">Rating:</span>
            <div className="flex items-center">
              {/* showing 5 stars with filled/unfilled based on rating */}
              <div className="flex">
                {[1,2,3,4,5].map(star => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${feedback.rating >= star ? 
                      'text-amber-500 fill-amber-500' : 
                      'text-amber-200'}`}
                  />
                ))}
              </div>
              <span className="font-bold text-amber-700 ml-2">{feedback.rating}/5</span>
            </div>
          </div>
          
          {/* show comment section if it exists */}
          {feedback.comment && (
            <div>
              <p className="text-sm font-medium text-amber-800 mb-1">Comment:</p>
              <p className="text-amber-700 bg-white p-3 rounded border border-amber-100">
                {feedback.comment}
              </p>
            </div>
          )}
        </div>
    
        <div className="flex justify-end pt-2">
          <button onClick={onReset} 
            className="text-sm text-amber-700 hover:text-amber-900 font-medium">
            Clear Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPreview;