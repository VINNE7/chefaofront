import {useState} from "react";

export default function Category(){
    const [inputTable, setinputTable] = useState("Nome da Categoria")
    const [isEditable, setIsEditable] = useState(false)
    return (
        <>
            <form action="">
                <input type="text" 
                disabled={isEditable === false}
                value={inputTable}
                onChange={(e:any)=>setinputTable(e.target.value)}
            />
            </form>
        </>
    )
}