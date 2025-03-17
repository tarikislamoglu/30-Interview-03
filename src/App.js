import { useEffect, useState } from "react";
import GenerateList from "./components/GenerateList";
import { AppContext } from "./AppContext";

function App() {
  const initialState = {};
  const [item, setItem] = useState(initialState);
  const [actCheck, setActCheck] = useState(false);
  const [detailsCheck, setDetailsCheck] = useState(false);
  const [index, setIndex] = useState(0);
  const handleGetClick = () => {
    setIndex((prev) => prev + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://boringapi.com/api/v1/employees/?sort_by=salary&sort_order=desc&limit=20"
        );
        const data = await res.json();
        setItem(data.employees[index]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [index]);

  const handleActivityClick = () => {
    setActCheck((prev) => !prev);
  };

  const handleDetailsClick = () => {
    setDetailsCheck((prev) => !prev);
  };
  const clickEvents = {
    handleGetClick,
    handleActivityClick,
    handleDetailsClick,
  };

  return (
    <AppContext.Provider
      value={{ ...clickEvents, item, actCheck, detailsCheck, index }}
    >
      <GenerateList />
    </AppContext.Provider>
  );
}

export default App;
