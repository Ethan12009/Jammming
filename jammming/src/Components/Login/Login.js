import React from "react";

export default function Login({url, expiry}) {
    return (
        <div>
            {expiry > 0 ? <p>Logged in</p> : <a href={url}>Login to spotify</a>}
        </div>
    )
}