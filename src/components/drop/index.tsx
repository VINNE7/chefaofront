import imgPen from "../../assets/icons/pen-white.png";
import imgDropUp from "../../assets/icons/vector-drop-up.png";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export function Drop() {
 
  return (
    <>
      <div className="w-full h-[48px]  bg-royaldark flex-row flex justify-between items-center rounded-[5px] ">
        <h2 className="text-white text-sm font-bold ml-2">
          Tradicionais
        </h2>
        <button>
          <img
            className="w-[16px] h-[16px] mr-32"
            src={imgPen}
            alt="icone para modificar pedido"
          />
        </button>
        <button>
          <img
            className="w-[14px] h-[8px] m-3"
            src={imgDropUp}
            alt="icone para modificar pedido"
          />
--




--

                  
        </button>
      </div>
    </>
  );
}

