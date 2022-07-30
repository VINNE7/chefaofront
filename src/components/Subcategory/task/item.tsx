import imgSumyellow from "../../assets/icons/sum-yellow.png";
interface TaskItemProps {
  titulo: string;
}

function TaskItem(props: TaskItemProps) {
  return (
    <li className="w-full h-[48px] bg-royaldark flex-row flex justify-between items-center rounded-[5px]"  >      
    <p>{props.titulo}</p></li>


  );
}

export default TaskItem;
