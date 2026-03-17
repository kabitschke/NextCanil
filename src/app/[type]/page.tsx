import { petConfig, Pet } from "../../data/pet";
import { Pets } from '../../types/types'

type Props = { params: Promise<{ type: string; }>; };

export default async function PetType({ params }: Props) {

  const { type } = await params;
  //Type é o que o cliente clicou

  const config = petConfig[type as keyof typeof petConfig];
  //Config é um Objeto já com a escolha de type

  //     if (config) { Forma simples do código abaixo
  //   list = Pet.getFromType(config.type);
  // } else {
  //   list = [];
  // }

  //Se config existir SIM → busca pets → array de Pets NÃO → array vazio
  const list: Pets[] = config
    ? Pet.getFromType(config.type)
    : [];

  return (
    <>
      <section
        className="banner"
        style={{ backgroundImage: `url(/images/${config.background})` }}
      >
        {config.title}

      </section>

      <h2>{config.title} disponíveis para adoção</h2>

      <div className="container list">
        {list.map((item, index) => (
          <div className="item" key={index}>
            <img src={`/images/${item.image}`} className="item--image" />
            <div className="item--name">{item.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}