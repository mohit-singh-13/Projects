export const Message = ({className, msg, value}) => {
    const myClassName = `${className} text-center`;
    return (<h2 className={myClassName}>{msg} {value}</h2>)
}