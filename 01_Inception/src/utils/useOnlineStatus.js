import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlinseStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlinseStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlinseStatus(true);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
