import Image from "next/image";
import Link from "next/link"

export default function Footer(props) {

    const {href, desc} = props;

    return (
        <footer 
        className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400
        py-4">
            <div className="flex justify-center transition-all delay-200 ease-in hover:font-bold overflow-x-hidden">            
                <Image src='/images/github.svg' 
                    alt="logo github" 
                    width='22px' 
                    height='22px' 
                    className="bg-gray-100 pl-4 rounded-l-full"
                    />

                <Link 
                    href={props.href}
                    target='blank'
                >                
                    <a target="_blank" 
                    rel="noopener noreferrer" 
                    className=" 
                    flex justify-center w-auto
                    text-blue-600 bg-gray-300
                    rounded-r-full px-2 font-mono"
                     >
                        {props.desc}
                    </a>
                </Link>
            </div>
        </footer>
    )
}