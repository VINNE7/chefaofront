interface IButtonProps {
  buttonLabel : string;
  type?: string
}

export default function FormButton(props: IButtonProps){
  return(
    <button
      type={props.type}
     className="box-border rounded-lg bg-[#FFD400] py-2 px-4 text-base text-[#24252E] font-bold w-1/4 items-center justify-center text-center">
      {props.buttonLabel}
    </button>
  )
}