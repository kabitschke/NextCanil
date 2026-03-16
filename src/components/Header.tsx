export default function Header() {
  return (
    <header>
      <div>
        <a href="/">PetDevShop</a>

        <form action="/search">
          <input
            type="search"
            name="q"
            placeholder="Pesquise por raça"
          />
        </form>
      </div>
    </header>
  );
}