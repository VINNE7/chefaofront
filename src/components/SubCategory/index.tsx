import Editsub from "../../assets/icons/editsub.png";
import Drop from "../../assets/icons/drop.png";
import { useState, useCallback } from "react";
import Plus from "../../assets/icons/Vector.png";

interface Newcard {
    id : number;
    title : string;
    isEditing : boolean;
  }

export  function AddSubCategory(){
    const [subCards, setSubCards] = useState<Newcard[]>([]);
    const [isEditable, setIsEditable] = useState(false);
    const [editable, setEditable] = useState(false);
    
    const handleAddSubCard = useCallback(() => {
      let newCards = [...subCards]; // reproduzo os cards anteriores
  
      newCards = newCards.map((subcard) => ({
        id: subcard.id,
        title: subcard.title,
        isEditing: false, // passo o isEditing para false em todos os existentes
      }));
  
      newCards.push({
        id: Math.random(),
        title: "Nova SubCategoria",
        isEditing: true, // crio um elemento novo e coloco ele dentro do array com isEditing true
      });
  
      setSubCards(newCards);
    }, [subCards, setSubCards]);
    const handleSetCurrentSubCardOnEdit = useCallback(
      (currentSubCard: { id: number; }) => {
        let newCards = [...subCards]; // cria um array novo reproduzindo o array do estado atual
  
        newCards = newCards.map((subcard) => ({
          // percorre todos os cards e muda a chave isEditing pra false, mantendo o id e o título
          id: subcard.id,
          title: subcard.title,
          isEditing: false,
        }));
  
        newCards.push({
          id: Math.random(),
          title: "Nova Subcategoria",
          isEditing: true,
        })
  
        
  
        newCards.find((card) => card.id === currentSubCard.id)!.isEditing = true; // depois que todos estão false, eu comparo o id com o currentCard.id e mudo o is editing para true
  
        setSubCards(newCards);
      },
      [subCards, setSubCards] // array de dependências para chamar a função todas as vezes q mudar o valor de cards
    );
    const [establishmentSubcategory, setestablishmentSubcategory] = useState([
      {
        title: "Nova Subcategoria",
        id: Math.random(),
        isEditing: false,
      },
    ]);
    function editSubcategory(id: number) {
      const filteredSubcategories = establishmentSubcategory.filter(
        (eSubcategory) => eSubcategory.id != id
      );
      setestablishmentSubcategory(filteredSubcategories); //filtrando as subcategories que possuem um id diferente da que vc clicou
    }
    return (
      <div className="pl-4">
            {subCards.map((subcard) => (
               <div className="bg-oxfordblue p-6 justify-between  rounded-lg shadow-md w-80 flex text-center mb-1 ">
                <div className="text-left ">
                  <input
                    key={subcard.id}
                    className="bg-oxfordblue font-bold w-36 text-base   leading-6 text-semiwhite"
                    type="text"
                    value={subCards.find((subcard) => subcard.isEditing)?.title}
                    disabled={editable === false}
                    onClick={() => handleSetCurrentSubCardOnEdit(subcard)}
                  />
                  <button onClick={() => editSubcategory(subcard.id)}>
                    <img className="" src={Editsub} alt="teste" />
                  </button>
                </div>
                <div className="flex">
                  <button>
                    <img className="" src={Drop} alt="" />
                  </button>
                </div>
            </div>
                ))}
            
          <button
            onClick={handleAddSubCard}
            className="bg-[#001B42] shadow-md flex w-80 rounded-lg p-4 gap-1 items-center object-cover mt-6 "
          >
            <span className="bg-[#001B42] shadow-md text-[#FAFAFA] ">
              Adicionar subcategoria{" "}
            </span>
            <div className="text-right ">
              <img className="flex items-end" src={Plus} alt="" />
            </div>
          </button>         
        </div>
   
    )
  }
        
  