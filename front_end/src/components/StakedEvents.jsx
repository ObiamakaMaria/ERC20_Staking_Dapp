export default function StakedEvents({ events }) {
    return (
      <div>
        <h2>Staked Events</h2>
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <p>User: {event.user}</p>
              <p>Amount: {event.amount}</p>
              <p>Reward Rate: {event.currentRewardRate}</p>
              <p>Timestamp: {new Date(event.timestamp * 1000).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }