export function Contact() {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    alert(` ${data.fieldName} \n Sua mensagem foi enviada!`);
  };

  return (
    <form
      className="grid justify-center p-24 min-h-[75dvh]"
      id="contactForm"
      onSubmit={handleSubmit}
    >
      <fieldset className="flex flex-col gap-8 min-w-[24dvw]">
        <label>
          <p className="font-montserratBold">Nome:</p>
          <input
            type="text"
            className="border-2 border-black rounded-md w-full px-4 py-1 font-montserrat"
            id="inputName"
            name="fieldName"
            minLength="3"
            required
          />
        </label>
        <label>
          <p className="font-montserratBold">E-mail:</p>
          <input
            type="email"
            className="border-2 border-black rounded-md w-full px-4 py-1 font-montserrat"
            id="inputEmail"
            name="fieldEmail"
            minLength="7"
            pattern=".*@.*\..*"
            required
          />
        </label>
        <label>
          <p className="font-montserratBold">Mensagem:</p>
          <textarea
            id="textAreaMessage"
            rows="6"
            className="border-2 border-black rounded-md w-full px-4 py-2 font-montserrat"
            name="fieldMessage"
          ></textarea>
        </label>
        <button
          type="submit"
          className="bg-accent rounded-md p-2 text-white hover:bg-black hover:text-primary"
          form="contactForm"
        >
          Enviar
        </button>
      </fieldset>
    </form>
  );
}
