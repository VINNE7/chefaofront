import {Link as LinkComponent} from 'react-router-dom'

interface ILink {
    redirect: string;
    children: JSX.Element;
}

export default function Link(props: ILink){
    return(
        <>
            <LinkComponent className='link' to={props.redirect}>
                <>
                    {props.children}
                </>
            </LinkComponent>
        </>
    );
}