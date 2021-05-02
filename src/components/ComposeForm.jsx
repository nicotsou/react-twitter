import Avatar from './Avatar';
import './ComposeForm.css';

function ComposeForm() {
  return (
    <form className="compose-form">
      <div className="compose-form-container">
        <Avatar />
        <textarea
          className="compose-form-textarea"
          placeholder="What's happening?"
        />
      </div>
      <button className="compose-form-submit">Tweet</button>
    </form>
  );
}

export default ComposeForm;
