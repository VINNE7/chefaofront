interface IButtonProps {
  buttonLabel : string;
  type?: string
}

export default function FormButton(props: IButtonProps){
  return(
    <button
     className="box-border rounded-lg bg-cyberyellow py-2 px-4 text-base text-raisinblack font-bold w-1/4 items-center justify-center text-center">
      {props.buttonLabel}
    </button>
  )
}