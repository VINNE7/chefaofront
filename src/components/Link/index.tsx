import { Link } from 'react-router-dom'

interface ILink {
    redirect: string;
    children: JSX.Element;
}

export default function LinkComponent(props: ILink) {
    return (
        <>
            <Link to={props.redirect}
            className="box-border rounded border-solid border-2 border-white py-2 px-4 text-sm text-white w-1/4 items-center justify-center text-center">{props.children}</Link>
        </>
    );
}