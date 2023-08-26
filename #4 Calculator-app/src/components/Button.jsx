export const Button = ({op, calculate, className}) => {
    const clicked = () => {
        calculate(op);
        console.log("Clicked ", op);
    }

    const myClass = `${className} text-center m-2`
    return (
        <button onClick={clicked} className={myClass}>{op}</button>
    )
}