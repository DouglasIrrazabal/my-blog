const HomePage = () => {
  return (
    <>
      <hr className="my-7 h-px bg-neutral-600 border-0" />
      <p className="mb-2">¡Hola! Soy Doug.</p>
      <p className="mb-2">
        Actualmente me desempeño como{" "}
        <b>desarrollador de software full-stack</b>, a través de este lindo blog
        busco dar a conocer sobre el estilo de vida de ser <b>developer</b> y
        como ser cada día un <b>1% mejor</b>.
      </p>
      {/* 
      <Image
        priority={true}
        src="/avatar.jpg"
        alt="Foto de Doug"
        width="0"
        height="0"
        sizes="100vw"
        className="rounded w-32 h-auto"
      />
      */}
      <hr className="my-4" />
      <p className="mb-2">describir mi historia con la tecnologia</p>
      <p className="mb-2">describir mi historia con el minimalismo</p>
      <p className="mb-2">mezclar las dos para ser mejor cada día</p>
    </>
  );
};

export default HomePage;
