import {  ClipLoader  } from 'react-spinners'

export default function Loading(){

    return(
        <div className='bg-semiwhite w-full h-full flex justify-center items-center'>
            <ClipLoader 
             color='#FFD400'
             size={50}
            />
        </div>
    );
}