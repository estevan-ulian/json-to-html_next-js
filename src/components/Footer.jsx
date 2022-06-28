import Link from "next/link"

export default function Footer(props) {

    const {href, desc} = props;

    return (
        <footer className="bg-gray-500 p-2">
            <Link 
            href={props.href}
            target='blank'
            >
                <a target="_blank" rel="noopener noreferrer" className="text-white flex justify-center">{props.desc}</a>
            </Link>
        </footer>
    )
}