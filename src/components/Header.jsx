const Header = (props) => {
    return (
        <>
            <header 
            className="w-full py-5 text-center bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400">
                <h1 className="text-white text-2xl font-bold">{props.title}</h1>
                <p className="text-blue-300">{props.desc}</p>
            </header>
        </>
    )
}

export default Header