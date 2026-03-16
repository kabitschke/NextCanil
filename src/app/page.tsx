import { Pet } from "../data/pet"

export default function Home() {

  const list = Pet.getAll();

  const banner = {
    title: 'Todos os animais',
    background: 'allanimals.jpg'
  };
  return (
    <>
      {
        banner && (
          <>
            <section className="banner"
              style={{ backgroundImage: `url(/images/${banner.background})` }}
            >
              {banner.title}
            </section>

            <h2>{banner.title} diponíveis para adoção</h2>
          </>
        )}

      {
        list.length > 0 && (
          <div className="container list">
            {list.map((item, index) => (
              <div className="item" key={index}>
                <img src={`/images/${item.image}`} alt={item.name} className="item--image" />
                <div className="item--name">{item.name}</div>
                <div className="item--color">{item.color}</div>
                <div className="item--genre">{item.sex}</div>
              </div>
            ))}

          </div>
        )}

      {list.length === 0 && (
        <div className="container no-list">
          <h2>Não há animais disponíveis nestas condições</h2>

        </div>
      )}
    </>

  );
}