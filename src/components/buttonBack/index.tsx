interface IButtonProps {
  buttonLabel : string;
  type?: string
}

export function FormButtonBack(props: IButtonProps){
  return(
    <button
     className="box-border border border-cyberyellow py-2 px-4 rounded-[10px] w-[146px]  items-center justify-center text-center ">
      {props.buttonLabel}
    </button>
  )
}