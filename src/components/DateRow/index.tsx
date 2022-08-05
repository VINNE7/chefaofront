import EditIcon from "../icons/editIcon";

 interface IDateRowProps {
  dayText: string
  workingHour?: string
 }
 
 export default function DateRow(props: IDateRowProps){
  return(
    <div className="flex mx-8 p-2 mb-2 border-b border-ghostwhite justify-between">
        <span>{props.dayText}</span>
        <span className="flex gap-4 items-center text-sm">{props.workingHour || "Fechado"} <button><EditIcon/></button></span>
    </div>  
  )
 }