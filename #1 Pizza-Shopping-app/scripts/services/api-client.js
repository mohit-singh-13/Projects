import URL from "../utils/constant.js";

async function makeNetworkCall()
{
    try
    {
        const response = await fetch(URL);
        const objects = await response.json();
        console.log("Response :", response);
        console.log("Objects :", objects);
        return objects;
    }
    catch(err)
    {
        console.log("Some error occured in fetching URL ", err);
        throw err;
    }
}

export default makeNetworkCall;