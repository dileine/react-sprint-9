import React, { useEffect } from "react";
import { publish } from "../../app/utils/customEvents";

const Error = () => {
    useEffect(() => publish("none"), []);
    return(
        <div>
            <h1>ERROR 404: PAGE NOT FOUND</h1>
        </div>
    )
}

export default Error;