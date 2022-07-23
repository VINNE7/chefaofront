interface IButtonProps {
  buttonLabel : string;
  type?: string
}

export default function FormButton(props: IButtonProps){
  return(
    <button
      type={props.type}
     className="box-border rounded border-solid border-2 border-white py-2 px-4 text-sm text-white w-1/4 items-center justify-center text-center">
      {props.buttonLabel}
    </button>
  )
}