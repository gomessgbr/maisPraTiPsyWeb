import { useEffect, useState } from "react";

export function useGetProfissionals({ query }) {
  const [profissionals, setProfissionals] = useState([]);

  const getProfissionals = async () => {
    try {
      const response = await fetch("/data/profissionals.json");
      const data = await response.json();
      const { psychologyProfessionals } = data;
      const filtredProfissionals = psychologyProfessionals.filter((prof) => {
        if (!!query) {
          return prof.name.includes(query);
        }
        return prof;
      });
      setProfissionals(filtredProfissionals);
    } catch (e) {
      alert("Tivemos problemas ao tentar buscar o profissionais!");
    }
  };

  useEffect(() => {
    getProfissionals();
  }, [query]);

  return {
    profissionals,
  };
}
