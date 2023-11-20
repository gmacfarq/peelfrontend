/** component to render alerts
 *
 * props:
 * -messages (an array of messages)
 *  e.g. ["alert1", "alert2",...]
 *
 * {SignUpForm, LoginForm, updateForm} -> Alerts
 */

function Alerts({ messages }) {
  if (!Array.isArray(messages)) {
    return null; // or handle the error in a different way
  }

  return (
    <div>
      {messages.map((alert, idx) => (
        <p key={idx}>{alert}</p>
      ))}
    </div>
  );
}

export default Alerts