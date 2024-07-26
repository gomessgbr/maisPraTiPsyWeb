import { ProfileCard } from "../../components";


export function Consult() {
  return (
    <>
      <div className="containerConsult">
        <form id="searchForm" className="relative bg-primary p-32 flex  justify-center i">
          <label className="flex flex-col items-center">
            <p className="font-montserratBold text-center mb-4">Digite o nome do profissional:</p>
            <input
              type="search"
              name=""
              id="searchInput"
              className=" min-w-72 px-2 py-3 rounded-md border-0 shadow-md shadow-black"
            />
          </label>
          <button type="submit" className="bg-accent px-4 py-4 rounded-md font-montserrat hover:bg-black hover:text-primary" form="searchForm">
            buscar
          </button>
        </form>
        <ProfileCard/>
      </div>
    </>
  );
}
