import Image from "next/image";
import avatar from "@/public/memoji.png";

const HomePage = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center md:items-start space-y-4 sm:space-y-0 sm:space-x-10">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">
          Para devs que buscan la libertad.
        </h1>
        <p>
          ¡Hola! soy Doug, <b>full-stack developer y minimalista</b>. Comparto
          cómo el minimalismo puede ayudarnos a simplificar nuestro día a día y{" "}
          <b>mejorar nuestra calidad de vida</b>.
        </p>
      </div>
      <Image
        src={avatar}
        alt="Memoji de Doug"
        width={0}
        height={0}
        className="rounded-full w-40 sm:w-64"
      />
    </div>
  );
};

export default HomePage;
