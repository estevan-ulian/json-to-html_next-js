import Link from "next/link"

export default function Footer(props) {

    const {href, desc} = props;

    return (
        <footer className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 p-2">
            <Link 
            href={props.href}
            target='blank'
            >
                <a target="_blank" rel="noopener noreferrer" className="text-white flex justify-center">{props.desc}</a>
            </Link>
        </footer>
    )
}