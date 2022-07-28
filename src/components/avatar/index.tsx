import imgCard from "../../assets/icons/img-vector.png";
import imgEdit from "../../assets/icons/img-edit.svg";
import EditIcon from "../icons/editIcon";
import EditImageIcon from "../icons/editImageIcon";
import { ChangeEventHandler, useState } from "react";

export default function Avatar (){

  const [image, setImage] = useState<string>()

  const handleImageSelect: ChangeEventHandler<HTMLInputElement> = e => {
    const file = e.target.files?.item(0)

    if (file) {
    const reader = new FileReader()

    reader.onload = e => {
      setImage(e.target?.result?.toString())
    }

    reader.readAsDataURL(file)
    }
  }

  return(
    <div className="w-28 h-28 bg-white rounded-full relative flex items-center justify-center">
      <img src={image??imgCard} className="w-[110px] h-[110px] rounded-full object-cover object-center" />

      <label 
        htmlFor="editImage"
        className="absolute pl-1 right-0 bottom-0 w-11 h-11 bg-ghostwhite rounded-full drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] grid place-items-center">
        <EditImageIcon/>
        <input hidden type="file" accept="image/*" id="editImage" onChange={handleImageSelect} />
      </label>
    </div>
  )
}