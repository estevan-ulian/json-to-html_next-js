export function renderJson(data) {
    const dataMaped = data.map((value, index) => {
        return (
        <li key={index} className='flex p-2'>
            <span className="">{value.name} | {value.code}</span>
        </li>
        )
    })
    return dataMaped
}