import { useEffect, useState } from "react";

export function useGetTherapyTypes() {
  const [therapies, setTherapies] = useState([]);

  useEffect(() => {
    fetch("/data/therapyTypes.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao carregar o arquivo JSON");
        }
        return response.json();
      })
      .then((data) => {
        setTherapies(data.therapies);
      })
      .catch((e) => console.log("error", e));
  }, []);


  return{
    therapies
  }
}
