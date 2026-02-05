import {  useEffect,useState } from 'react'

export function useLocalStorage(key, initialData) {
 const [data, setData] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialData;
  });

    useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);

 const updateLocalStorage = (valueOrFn) => {
    setData((prev) => {
      const next =
        typeof valueOrFn === "function" ? valueOrFn(prev) : valueOrFn;

     
      localStorage.setItem(key, JSON.stringify(next));
      return next;
    });
  };

  return [data, updateLocalStorage];
}

