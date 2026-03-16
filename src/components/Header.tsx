export default function Header() {
  return (
    <>
      <header className="container">

        <a href="/">PetDevShop</a>

        <form action="/search">
          <input
            type="search"
            name="q"
            placeholder="Pesquise por raça"
          />
        </form>

      </header>

      <nav>
        <ul>
          <li className="{{#menu.all}}active{{/menu.all}}"> <a href="/"> Todos </a></li>
          <li className="{{#menu.dog}}active{{/menu.dog}}"> <a href="/dogs"> Cachorros </a></li>
          <li className="{{#menu.cat}}active{{/menu.cat}}"> <a href="/cats"> Gatos </a></li>
          <li className="{{#menu.fish}}active{{/menu.fish}}"> <a href="/fishes"> Peixes </a></li>
        </ul>
      </nav>

    </>
  );
}