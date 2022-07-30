import { useState } from "react";
import imgSumyellow from "../../assets/icons/sum-yellow.png";
import { FormButtonBack } from "../button/buttonBack";
import TaskContainer from "./Container/taskContainer";
import TaskItem from "./task/item";

interface Tarefa {
  titulo: string;
  done: boolean;
  action?: () => void;
}

export function SubCategory(){
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [tituloTarefa, setTituloTarefa] = useState<string>("");

  function adicionarTarefa() {
    setTarefas([
      ...tarefas,
      {
        titulo: tituloTarefa,
        done: false,
      },
    ]);
    setTituloTarefa("");
  }

  return (
    <>
      <div className="w-full h-[48px] bg-royaldark flex-row flex justify-between items-center rounded-[5px] hover:cursor-pointer ">
        <h1 className="text-white text-sm font-bold leading-[22px] ml-[8px]">
          Adicionar subcategoria
        </h1>
        <div className="new-task">        
        <button {...adicionarTarefa}
        onClick={adicionarTarefa}>
          <img
            className="w-[22px] h-[22px] mr-[13px] "
            src={imgSumyellow}
            alt=""
          />
        </button>
        </div>
    
          <TaskContainer>
            {tarefas.map((tarefa: Tarefa, posicao: number) => {
              return <TaskItem 
              titulo={tarefa.titulo} />;
            })}
          </TaskContainer>

      </div>
    </>
  );
}
