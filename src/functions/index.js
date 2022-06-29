export function renderJsonCountries(data) {
    const dataSorted = data.sort((a, b) => {
        let A = a.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        let B = b.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        return A > B ? 1 : -1
    })

    const dataMaped = dataSorted.map((value, index) => {
        return (
        <li key={index} className='flex p-2'>
            <span className="">{value.name} | {value.code}</span>
        </li>
        )
    })
    return dataMaped
}