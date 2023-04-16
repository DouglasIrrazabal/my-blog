import { ArrowIcon } from "@/components/Icons";

const AboutPage = () => {
  return (
    <section className="space-y-2">
      <p>
        ¡Hola! Soy Doug, <b>desarrollador full-stack y minimalista</b>.
      </p>
      <p>
        A través de este blog, abordo temas relacionados con el estilo de vida
        de un desarrollador, como la importancia del{" "}
        <b>equilibrio entre el trabajo y la vida personal,</b> el desarrollo de
        habilidades blandas y la importancia de la formación continua.
      </p>
      <p>
        Mi objetivo es <b>ayudar</b> a los desarrolladores de software a ser más
        eficientes y a tener una vida más equilibrada y satisfactoria.
      </p>
      <p>
        Creo firmemente que el <b>minimalismo</b> es una herramienta poderosa
        para lograr este objetivo, y espero que mi experiencia y conocimientos
        puedan ser de utilidad para aquellos que{" "}
        <b>buscan mejorar su carrera y su vida personal.</b>
      </p>
      <a
        className="flex items-center text-neutral-400 hover:text-neutral-100 transition-all"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/douglasirrazabal/"
      >
        <ArrowIcon />
        LinkedIn
      </a>
    </section>
  );
};

export default AboutPage;
