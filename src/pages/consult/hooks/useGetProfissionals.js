import { useEffect, useState } from "react";

export function useGetProfissionals({ query }) {
  const [profissionals, setProfissionals] = useState([]);

  const getProfissionals = async () => {
    try {
      const response = await fetch("/data/profissionals.json");
      const data = await response.json();
      const { psychologyProfessionals } = data;
      const filtredProfissionals = psychologyProfessionals.filter((prof) => {
        if (query.trim()) {
          const formatedQuery = query.toLowerCase();
          const formatedName = prof.name.toLowerCase()
          return formatedName.includes(formatedQuery);
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
