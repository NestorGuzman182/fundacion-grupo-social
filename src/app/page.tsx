import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hola! Soy Néstor Guzmán
            </h1>
            <p className="mb-8 leading-relaxed">Este es mi desafío técnico donde demostraré y celebraré mis habilidades como frontend developer! Me preparo para sumergirme en un mundo de creatividad e innovación mientras muestro mi dominio de las últimas herramientas y tecnologías. Aquí, cada línea de código es un lienzo en blanco y cada función es una pincelada de mi arte digital, combinando estética y funcionalidad para crear experiencias únicas. Más que una prueba de habilidades técnicas, este desafío es un testimonio de mi pasión por el aprendizaje continuo y mi determinación para superar obstáculos.</p>
            <div className="flex justify-center">
              <Link href="/listado" className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-500 rounded text-lg" >Ver Publicaciones</Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              src="/hero.jpg"
              alt="hero image"
              width={720}
              height={600}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
