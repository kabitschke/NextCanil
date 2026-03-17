"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {

  const pathname = usePathname();

  return (
    <>
      <header>
        <div className="container">
          <Link href="/">PetDevShop</Link>

          <form method="GET" action="/search">
            <input
              type="search"
              name="q"
              placeholder="Pesquise por raça"
            />
          </form>
        </div>
      </header>

      <nav>
        <ul>

          <li className={pathname === "/" ? "active" : ""}>
            <Link href="/">Todos</Link>
          </li>

          <li className={pathname === "/dogs" ? "active" : ""}>
            <Link href="/dogs">Cachorros</Link>
          </li>

          <li className={pathname === "/cats" ? "active" : ""}>
            <Link href="/cats">Gatos</Link>
          </li>

          <li className={pathname === "/fishes" ? "active" : ""}>
            <Link href="/fishes">Peixes</Link>
          </li>

        </ul>
      </nav>
    </>
  );
}