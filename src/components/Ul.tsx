interface UlProps {
  children: any
}

const Ul = (props: UlProps) => {
  return (
    <ul className="
    h-96 overflow-y-scroll p-2 bg-gradient-to-b from-gray-100 to-gray-300"
    >
      {props.children}
    </ul>
  )
}
export default Ul