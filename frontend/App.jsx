// Minimal React Frontend
export default function App() {
  const [listings, setListings] = React.useState([]);
  const [isLoading, setIsLoading] = useState(false);
  React.useEffect(() => {
    fetch('/api/listings').then(res => res.json()).then(setListings);
  }, []);
  // Add loading states (src/components/BookingForm.jsx)

const handleSubmit = async () => {
  setIsLoading(true);
  await bookProperty(); 
  setIsLoading(false);
};
  return (
    <div>
      {listings.map(l => (
        <div key={l.id}>
          <h3>{l.title}</h3>
          <p>${l.price}/night</p>
        </div>
      ))}
  <button disabled={isLoading}>
    {isLoading ? <Spinner /> : "Book Now"}
  </button>
    </div>
  );
}
