import { useEffect, useState } from 'react';

const useViewModel = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [isLoading]);

  return { isLoading, setIsLoading };
};

export default useViewModel;
