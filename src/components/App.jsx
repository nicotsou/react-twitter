import ComposeForm from './ComposeForm';
import Timeline from './Timeline';
import { FaTwitter } from 'react-icons/fa';
import './App.css';

import tweets from '../tweets.json';

function App() {
  return (
    <div className="app">
      <FaTwitter className="app-logo" size="2em" />
      <ComposeForm />
      <div className="separator"></div>
      <Timeline tweets={tweets} />
    </div>
  );
}

export default App;
