// Minimal React Frontend
export default function App() {
  const [listings, setListings] = React.useState([]);
  React.useEffect(() => {
    fetch('/api/listings').then(res => res.json()).then(setListings);
  }, []);
  return (
    <div>
      {listings.map(l => (
        <div key={l.id}>
          <h3>{l.title}</h3>
          <p>${l.price}/night</p>
        </div>
      ))}
    </div>
  );
}
