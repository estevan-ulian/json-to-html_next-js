
const TitleSection = (props) => {
  const { name, code, title } = props;
  return (
    <div className="text-white">
        <h1 className="py-2 text-xl font-bold uppercase block p-4 bg-gray-900">{props.title}</h1>
        <div className="bg-gray-700 flex gap-2 p-4">
            <span className="text-right">{props.name}</span>
            <span className="text-center">|</span>
            <span className="text-left">{props.code}</span>
        </div>
    </div>
  )
}
export default TitleSection