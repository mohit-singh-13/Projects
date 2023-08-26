import { useState } from "react";
import { Button } from "../components/Button"
import { Message } from "../components/Message"

export const CounterPage = () => {
    console.log("Counter function call");

    // Hook (State)
    const [count, setCount] = useState(0);

    // let count = 0;
    const updateCount = (val) => {
        if (val === '+') {
            // count++;
            setCount(count + 1);  //State change
            // console.log(count);
        }
        else {
            // count--;
            setCount(count - 1);  //State change
        }

        console.log("Count is : ", count);
    }

    return (
        <div className="container">
            <Message className="alert alert-danger" msg="Counter App"/>
            <Message value={count} className="alert alert-success" msg="Counter Value is "/>
            {/* <Message value={count}/> */}
            <Button fn={updateCount} val="+" className="btn btn-success me-2"/>
            <Button fn={updateCount} val="-" className="btn btn-danger"/>
        </div>
    )
}