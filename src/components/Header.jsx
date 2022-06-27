const Header = (props) => {
    return (
        <div className="text-white">
            <h1 className="py-2 text-2xl font-bold uppercase block p-4 bg-gray-900">{props.title}</h1>
            <div className="bg-gray-700 flex gap-2 p-4">
                <span className="text-right">name</span>
                <span className="text-center">|</span>
                <span className="text-left">code</span>
            </div>
        </div>
    )
}

export default Header