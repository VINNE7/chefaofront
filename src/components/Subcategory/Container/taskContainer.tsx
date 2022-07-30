import imgSumyellow from "../../assets/icons/sum-yellow.png";
interface TaskContainerProps {
  children: JSX.Element | JSX.Element[];
}
function TaskContainer(props: TaskContainerProps) {
  return <ul className="task-list bg-red-400">{props.children} </ul>;
}

export default TaskContainer;
