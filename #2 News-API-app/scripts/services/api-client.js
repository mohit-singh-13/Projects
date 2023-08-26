import URL from "../utils/constant.js";

async function makeNetworkCall()
{
    try
    {
        const response = await fetch(URL);
        const object = await response.json();
        console.log("Response is ", response);
        console.log("Json is ", object);
        return object; 
    }
    catch(err)
    {
        console.log("There is some error in fetching API");
        throw err
    }
}

export default makeNetworkCall;