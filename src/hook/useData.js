import { useEffect, useState } from "react";

const useData = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    // const uri="./testingData.json"
    fetch("https://radiant-retreat-40420.herokuapp.com/partners")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return {
    data,
    setData,
  };
};
export default useData;
