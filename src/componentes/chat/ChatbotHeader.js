import React from 'react'
import './chat.css'


const ChatHeader = props => {

    function minimizar() {
        var elemento = document.getElementById("conteudo");
        elemento.style.display = 'none'; };

    return(       
        <div className='chat-header'>
          <p onClick={minimizar} id='fechar'><img src='images/imgx.png' id='imgx' alt='Fechar'/></p>
        </div>
    );
}

export default ChatHeader