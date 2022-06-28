const Header = (props) => {
    return (
        <>
          <header className="w-full p-2 bg-blue-500 text-center">
          <h1 className="text-white text-2xl">{props.title}</h1>
          <p className="text-blue-300">{props.desc}</p>
      </header>
        </>
    )
}

export default Header