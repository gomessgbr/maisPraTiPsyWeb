import { ProfileCard } from "../../components";
import { useGetProfissionals } from "./hooks/useGetProfissionals";

export function Consult() {
  const { profissionals } = useGetProfissionals();
  return (
    <>
      <div className="containerConsult">
        <form
          id="searchForm"
          className="max-h-fit bg-primary p-32 flex justify-center gap-2 "
        >
          <label className="max-w-4xl w-full flex-grow">
            <p className="font-montserratBold text-center mb-4">
              Digite o nome do profissional:
            </p>
            <input
              type="search"
              name=""
              id="searchInput"
              className="max-w-4xl w-full px-2 py-3 rounded-md border-0 shadow-md shadow-black"
            />
          </label>
          <button
            type="submit"
            className="bg-accent h-12  mt-11 px-4 py-2 rounded-md font-montserrat  hover:bg-black hover:text-primary"
            form="searchForm"
          >
            buscar
          </button>
        </form>

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
    </>
  );
}
