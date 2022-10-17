import { useEffect, useState } from "react";

const Loader = ({ setOnLoad }) => {
  const [pourcents, setPourcents] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setPourcents(pourcents + 1);
      if (pourcents >= 100) {
        return setPourcents(100);
      }
    }, 25);
    setTimeout(() => {
      setOnLoad(false);
    }, 4100);
  }, [pourcents, setOnLoad]);

  return (
    <div className="loading-page">
      <div className="divider"></div>
      <h1>{pourcents}%</h1>
    </div>
  );
};

export default Loader;
