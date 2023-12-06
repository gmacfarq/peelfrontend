import { useContext } from 'react';
import "../stylesheets/RequestList.css";
import '../stylesheets/StyleGuide.css';
import userContext from './userContext';
import RequestCard from './RequestCard';

function RequestList() {

  const { currUser } = useContext(userContext);


  return (
    <div className="overlap">
      <div className="request-list">
        <header className="header">
          <div className="text-wrapper">All Requests</div>
        </header>
        <div className="list">
          {currUser.data.requests.map(request => <RequestCard
            key={request.id} request={request} />)}
        </div>
      </div>
    </div>
  );
}

export default RequestList;