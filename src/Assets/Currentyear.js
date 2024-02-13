import { useState, useEffect } from "react";

function Currentyear() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return currentYear;
}

export default Currentyear;
