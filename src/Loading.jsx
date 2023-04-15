import React from "react";

function Loading({visible}){
    return(
        <div>
            {visible ? 'Carregando' : ''}
        </div>
    )
}

export default Loading