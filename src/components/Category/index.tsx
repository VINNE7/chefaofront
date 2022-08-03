import Edit from "../../assets/icons/edit.png";
import Plus from "../../assets/icons/Vector.png";
import { useState, useCallback, useEffect } from "react";

interface Newcard {
  id : number;
  title : string;
  isEditing : boolean;
}

// para criar o card das subcategorias elas precisam ter vínculo com as categorias. como fazer isso?
// provavelmente vai ter uma nova chave dentro de NewCard que vai ser um array de subcategorias
export default function Category() {
  const [cards, setCards] = useState<Newcard[]>([]);
  const [editCard, setEditCard] = useState<Newcard["id"]>()
  const [isEditable, setIsEditable] = useState(false);
  const [editable, setEditable] = useState(false);

  const handleAddCard = useCallback(() => {
    let newCards = [...cards]; // reproduzo os cards anteriores

    newCards = newCards.map((card) => ({
      id: card.id,
      title: card.title,
      isEditing: false, // passo o isEditing para false em todos os existentes
    }));

    newCards.push({
      id: Math.random(),
      title: "Nova Categoria",
      isEditing: true, // crio um elemento novo e coloco ele dentro do array com isEditing true
    });

    setCards(newCards);
  }, [cards, setCards]);

  const handleChangeCardTitle = useCallback(
    (value: any) => {
      let newCards = [...cards]; // reproduz o array do estado atual
      if (newCards.find((card) => card.isEditing === true)) {
        // se tem um card que está em modo edição
        newCards.find((card) => card.isEditing === true)!.title = value; // vc altera o valor do título dele, de acordo com o value que recebe do event.target
      }

      setCards(newCards);
    },
    [cards, setCards] // array de dependências para chamar a função todas as vezes q mudar o valor de cards
  );

  const handleSetCurrentCardOnEdit = useCallback(
    (currentCard: { id: number; }) => {
      let newCards = [...cards]; // cria um array novo reproduzindo o array do estado atual

      newCards = newCards.map((card) => ({
        // percorre todos os cards e muda a chave isEditing pra false, mantendo o id e o título
        id: card.id,
        title: card.title,
        isEditing: false,
      }));

      newCards.find((card) => card.id === currentCard.id)!.isEditing = true; // depois que todos estão false, eu comparo o id com o currentCard.id e mudo o is editing para true

      setCards(newCards);
    },
    [cards, setCards] // array de dependências para chamar a função todas as vezes q mudar o valor de cards
  );

  return (
    <>
      <div className="text-[#24252E] text-xl font-bold p-4">
        <h3>Categorias</h3>
      </div>
      <div className="flex  gap-4 overflow-x-auto scroll-smooth  p-4">
        {cards.map((card) => (
          <button
            key={card.id}
            className={`font-bold text-base leading-6 p-[30px]  rounded-lg shadow-md w-full max-w-[160px] flex justify-center ${card.isEditing?" bg-cyberyellow":"bg-[#001B42] text-[#FAFAFA]"}`}
            onClick={() => handleSetCurrentCardOnEdit(card) } // esse botão muda qual card está sendo editado
            
          >
            {card.title}
          </button>
        ))}
        <button
          onClick={handleAddCard}
          className="bg-[#001B42] shadow-md flex w-full max-w-[160px] rounded-lg p-[30px] gap-1 items-center object-cover "
        >
          <span className="bg-[#001B42] shadow-md text-[#FAFAFA]">
            Adicionar Categorias{" "}
          </span>
          <img className="" src={Plus} alt="" />
        </button>
      </div>
      <div className="flex  justify-center ">
        <input
          className="text-raisinblack text-xl font-bold leading-8 "
          type="text"
          value={cards.find((card) => card.isEditing)?.title} // encontra qual card está sendo editado para mostrar o valor
          onChange={(e: any) => handleChangeCardTitle(e.target.value)}
          disabled={isEditable === false}
        />
        <button onClick={() => setIsEditable(!isEditable)}>
          <img src={Edit} alt="" />
        </button>
      </div>
      </>
  );
}
