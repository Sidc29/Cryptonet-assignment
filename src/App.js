import { useState, useEffect } from "react";
import UserCard from "./components/UserCard";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const URL = "https://randomuser.me/api/?page=1&results=1&seed=abc";
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUser(data.results[0]);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return <UserCard user={user} loading={loading} />;
}

export default App;
