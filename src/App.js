
import Header from './Components/Header';
import { FeedbackData } from './Data/Feedbackdata';
import FeedbackList from './Components/FeedbackList';

function App() {

  const feedback = FeedbackData;
  console.log({FeedbackData});
  return (
    <>
      <Header />
      <FeedbackList feedback={feedback} />
    </>
  );
     

}
export default App;
