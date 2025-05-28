### **Feedback Widget**  
A responsive feedback collection system that enables users to:
- Rate experiences from 1-5 stars
- Add optional comments
- Submit their feedback
- View real-time preview while typing
- Reset or edit their submission

### **State Management**  
**Centralized in App.jsx:**
- All state managed in parent component
- Provides single source of truth
- Ensures consistent data flow
- Simplifies debugging

**Key State Variables:**
- `feedback` object (stores name, email, rating, comment)
- `hasFeedback` flag (tracks if user started input)
- `submitted` flag (tracks form submission status)

**Advantages:**
- Prevents prop drilling
- Enables simpler state transitions
- Makes persistence easier with single localStorage operation

### **Component Structure**  
**App.jsx (Main Controller):**
- Manages all application state
- Handles data persistence
- Coordinates form and preview components

**FeedbackForm.jsx:**
- Receives current form values via props
- Handles all user input changes
- Manages form submission/reset
- Shows thank-you message when submitted

**FeedbackPreview.jsx:**
- Displays live preview of feedback
- Shows empty state when no feedback exists
- Maintains sticky positioning on desktop

### **Technical Choices**  
**Selected Technologies:**
- useState for local component state
- useEffect only for initial data loading
- Flexbox layout for simpler implementation
- localStorage for basic persistence

**Rejected Alternatives:**
- Redux (too complex for this scale)
- Form libraries (unnecessary overhead)

### **User Experience**  
**Key Features:**
- Interactive rating buttons (better than dropdown)
- Mobile-responsive layout
- Desktop-optimized side-by-side view
- Live preview while typing
- Clear empty states

### **Accessibility**  
**Implemented Features:**
- Keyboard-navigable rating buttons
- Proper form labeling
- Semantic HTML structure
- Logical tab order
- Responsive down to 320px width
- Sufficient color contrast

