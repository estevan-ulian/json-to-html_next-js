const Container = (props) => {
  return (
    <div className='grow grid gap-2 p-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>{props.children}</div>
  )
}
export default Container