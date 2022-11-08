import React, { useState, useEffect } from "react";

const Clock = () => {
  // on place un nouvel objet date (il représente la date / temps actuel) dans la var timeToShow
  const [timeToShow, setTimeToShow] = useState(new Date());

  // Il est parametré pour ne se declencher qu'au montage et au démontage du component
  // puisque liste de dépendance présente, mais vide (donc pas d'update)
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Ticking setInterval()");
      setTimeToShow(new Date());
    }, 1000);

    // quand le composant se démonte, on veut clear le timer qu'on a lancé
    // On utilise pour ça la fonction clearInterval()
    return ()=> {
      console.log("Unmount")
      clearInterval(timer)
    }
  }, []);
  {/* On lit la date au format local*/}
  return <div>{timeToShow.toLocaleString()}</div>;
};

export default Clock;
