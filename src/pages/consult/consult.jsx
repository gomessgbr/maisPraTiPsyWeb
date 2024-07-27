import { useState } from "react";

import { ProfileCard } from "./components/ProfileCard";
import { useGetProfissionals } from "./hooks/useGetProfissionals";


export function Consult() {
  const [query, setQuery] = useState("");
  const { profissionals } = useGetProfissionals({ query });

  return (
    <>
      <div className="min-h-screen">
        <form
          id="searchForm"
          className="max-h-fit bg-primary p-4 sm:p-8 md:p-16 lg:p-32 flex flex-col sm:flex-row justify-center gap-2"
        >
          <label className="w-full flex-grow mb-4 sm:mb-0 max-w-xl">
            <p className="font-montserratBold text-center mb-4">
              Digite o nome do profissional:
            </p>
            <input
              type="search"
              name=""
              id="searchInput"
              className="w-full px-2 py-3 rounded-md border-0 shadow-md shadow-black"
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className="lg:w-auto w-full bg-accent h-12 px-4 py-2 self-end rounded-md font-montserrat hover:bg-black hover:text-primary"
            form="searchForm"
          >
            buscar
          </button>
        </form>

        <div className="px-4 sm:px-8 md:px-16 lg:px-32">
          {profissionals.length > 0 &&
            profissionals.map((profissional) => (
              <ProfileCard
                key={profissional.CRP}
                about={profissional.aboutMe}
                approach={profissional.approach}
                crp={profissional.CRP}
                name={profissional.name}
                phone={profissional.contact}
                profileImg={profissional.profilePicture}
              />
            ))}
        </div>
      </div>
    </>
  );
}
