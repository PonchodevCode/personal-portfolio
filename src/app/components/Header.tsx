import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="text-2xl font-bold">
          Mi Portafolio
        </Link>
        <div>
          <Link href="#about" className="mx-2">Sobre Mí</Link>
          <Link href="#projects" className="mx-2">Proyectos</Link>
          <Link href="#contact" className="mx-2">Contacto</Link>
        </div>
      </nav>
    </header>
  );
}

