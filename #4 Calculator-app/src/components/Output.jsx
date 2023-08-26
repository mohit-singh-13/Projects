export const Output = ({value, className}) => {
    const myClass = `${className} text-center`
    return (<h2 className={myClass}>Output : {value}</h2>)
}