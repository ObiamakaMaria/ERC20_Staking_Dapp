export default function EmergencyWithdrawnEvents({ events }) {
    return (
      <div>
        <h2>Emergency Withdrawn Events</h2>
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <p>User: {event.user}</p>
              <p>Amount: {event.amount}</p>
              <p>Penalty: {event.penalty}</p>
              <p>Timestamp: {new Date(event.timestamp * 1000).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }