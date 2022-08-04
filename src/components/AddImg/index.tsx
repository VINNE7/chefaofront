import imgCard from "../../assets/icons/img-vector.png";
import imgEdit from "../../assets/icons/img-edit.svg";
import EditIcon from "../icons/editIcon";
import EditImageIcon from "../icons/editImageIcon";
import { ChangeEventHandler, useState } from "react";

export default function AddImg (){

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
    <div className=" relative flex items-center justify-center flex-col">
            <img src={image??imgCard} className="w-[112px] h-[112px] rounded-full object-cover object-center" />

      <label 
        htmlFor="editImage"
        className="formButtonBack !w-full font-bold">

            Adicionar foto do item

        <input
          type="file"
          accept="image/*"
          id="editImage"
          onChange={handleImageSelect}
          className="absolute inset-0 opacity-0" />
      </label>
    </div>
  )
}