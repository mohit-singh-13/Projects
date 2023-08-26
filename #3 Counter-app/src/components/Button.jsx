export const Button = ({val, className, fn}) => {
    const clicked = () => {
        fn(val);
        console.log("Clicked Happen", val);
    }

    return (<button onClick={clicked} className={className}>{val}</button>)
}