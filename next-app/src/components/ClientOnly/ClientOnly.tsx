import { FunctionComponent, useEffect, useState } from "react";

// https://www.joshwcomeau.com/react/the-perils-of-rehydration/
const ClientOnly: FunctionComponent = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <>{children}</>;
};

export default ClientOnly;
