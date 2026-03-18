import { Pet } from "../../data/pet";


type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function Search({ searchParams }: Props) {

  const { q } = await searchParams;

  const query = q?.toLowerCase() || "";

  const list = query
    ? Pet.getFromName(query)
    : [];

  return (
    <div className="container">



      {list.length > 0 ? (
        <div className="container list">
          {list.map((item, index) => (
            <div className="item" key={index}>
              <img src={`/images/${item.image}`} />
              <div>{item.name}</div>
            </div>
          ))}
        </div>
      ) : (
        <h3 style={{ textAlign: "center", marginTop: "50px" }}>Nenhum resultado encontrado</h3>
      )}

    </div>
  );
}