import { useEffect, useState } from "react";

export function useGetProfissionals() {
  const [profissionals, setProfissionals] = useState([]);

  const getProfissionals = async () => {
    try{
      const response = await fetch("/data/profissionals.json");
      const data = await response.json();
      const {psychologyProfessionals} = data;
      setProfissionals(psychologyProfessionals);
    }catch(e){
      alert("Tivemos problemas ao tentar buscar o profissionais!")
    }
  };

  useEffect(() => {
    getProfissionals();
  }, []);

  return {
    profissionals,
  };
}
