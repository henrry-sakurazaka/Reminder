import React from "react";

const Toast = ({visible}) => {
    const toastClassName = visible ? "toast is-visible" : "toast";
    return (
        <div className={toastClassName}>
            <div className="toast__content">

            </div>
        </div>
    )
}

export default Toast;