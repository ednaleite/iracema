import React, {Component} from 'react'
import {Alert} from 'reactstrap'
import {connect} from 'react-redux'
import '../chat/chat.css'
import {Input, InputGroupAddon, Button} from 'reactstrap'
import emailjs from 'emailjs-com'

   

class ChatConversa extends Component{
  
   renderMensagem(msg,k){

    function sendMailCobranca(){

        var cont = 0;
        var email = '';
        if(document.getElementById('nomeinput').value === ''){
            document.getElementById('nomeinput').style.borderColor = 'red';
        }else{
            document.getElementById('nomeinput').style.borderColor = '';
            cont++;
        }

        if(document.getElementById('cpfinput').value === ''){
            document.getElementById('cpfinput').style.borderColor = 'red';
        }else{
            document.getElementById('cpfinput').style.borderColor = '';
            cont++;
        }

        if(document.getElementById('contratoinput').value === ''){
            document.getElementById('contratoinput').style.borderColor = 'red';
        }else{
            document.getElementById('contratoinput').style.borderColor = '';
            cont++;
        }

        if(document.getElementById('diainput').value === ''){
            document.getElementById('diainput').style.borderColor = 'red';
        }else{
            document.getElementById('diainput').style.borderColor = '';
            cont++;
        }

        if(document.getElementById('horainput').value === ''){
            document.getElementById('horainput').style.borderColor = 'red';
        }else{
            document.getElementById('horainput').style.borderColor = '';
            cont++;
        }


        if(document.getElementById('endinput').value === ''){
            document.getElementById('endinput').style.borderColor = 'red';
        }else{
            document.getElementById('endinput').style.borderColor = '';
            cont++;
        }
        
        if(document.getElementById('telinput').value === ''){
            document.getElementById('telinput').style.borderColor = 'red';
        }else{
            document.getElementById('telinput').style.borderColor = '';
            cont++;
        }

        if(document.getElementById('emailinput').value === ''){
            email = 'Não Informado';
        }else{
            email = document.getElementById('emailinput').value;
        }

        if(cont === 7){
            (function(){
                emailjs.init("user_PBfjYg3UzlkB2Nxg7CEnE");
             })();

             var templateParams = {
                nome: document.getElementById('nomeinput').value,
                cpf: document.getElementById('cpfinput').value,
                numerocontrato: document.getElementById('contratoinput').value,
                email: email,
                diavisita: document.getElementById('diainput').value,
                horavisita: document.getElementById('horainput').value,
                endereco: document.getElementById('endinput').value,
                telefone: document.getElementById('telinput').value
            };
            emailjs.send('gmail', 'cobranca', templateParams)
            .then(function(response) {
                document.getElementById("va").innerHTML = "<div id='vaa' class='alert alert-dark fade show' role='alert'>Email enviado com sucesso! Seus dados foram enviados para a nossa equipe. Posso ajudar em algo mais?<br><br/>Digite:<br/>1 - Contatos<br/>2 - Planos<br/>3 - Solicitar representante<br/>4 - Atendimento póstumo<br/></div>";
            }, function(error) {
                document.getElementById("va").innerHTML = "<div id='vaa' class='alert alert-dark fade show' role='alert'>Falha ao Enviar Email <br><br/>Digite:<br/>1 - Contatos<br/>2 - Planos<br/>3 - Solicitar representante<br/>4 - Atendimento póstumo<br/></div>";
                console.log('FAILED...', error);
            });
                
    }}




        function sendMailAltEnd(){

            var cont = 0;
            
            if(document.getElementById('nomeinput').value === ''){
                document.getElementById('nomeinput').style.borderColor = 'red';
            }else{
                document.getElementById('nomeinput').style.borderColor = '';
                cont++;
            }

            if(document.getElementById('cpfinput').value === ''){
                document.getElementById('cpfinput').style.borderColor = 'red';
            }else{
                document.getElementById('cpfinput').style.borderColor = '';
                cont++;
            }

            if(document.getElementById('contratoinput').value === ''){
                document.getElementById('contratoinput').style.borderColor = 'red';
            }else{
                document.getElementById('contratoinput').style.borderColor = '';
                cont++;
            }

            if(document.getElementById('endaninput').value === ''){
                document.getElementById('endaninput').style.borderColor = 'red';
            }else{
                document.getElementById('endaninput').style.borderColor = '';
                cont++;
            }

            if(document.getElementById('endnovoinput').value === ''){
                document.getElementById('endnovoinput').style.borderColor = 'red';
            }else{
                document.getElementById('endnovoinput').style.borderColor = '';
                cont++;
            }


            if(document.getElementById('telinput').value === ''){
                document.getElementById('telinput').style.borderColor = 'red';
            }else{
                document.getElementById('telinput').style.borderColor = '';
                cont++;
            }
            
            

            if(cont === 6){
                (function(){
                    emailjs.init("user_PBfjYg3UzlkB2Nxg7CEnE");
                })();

                var templateParams = {
                    nome: document.getElementById('nomeinput').value,
                    cpf: document.getElementById('cpfinput').value,
                    numero_contrato: document.getElementById('contratoinput').value,
                    endereco_antigo: document.getElementById('endaninput').value,
                    endereco_novo: document.getElementById('endnovoinput').value,
                    telefone_contato: document.getElementById('telinput').value,
                };
                emailjs.send('gmail', 'alt_endereco', templateParams)
                .then(function(response) {
                    document.getElementById("ve").innerHTML = "<div id='vee' class='alert alert-dark fade show' role='alert'>Email enviado com sucesso! Seus dados foram enviados para a nossa equipe. Posso ajudar em algo mais?<br><br/>Digite:<br/>1 - Contatos<br/>2 - Planos<br/>3 - Solicitar representante<br/>4 - Atendimento póstumo<br/></div>";
                }, function(error) {
                    document.getElementById("ve").innerHTML = "<div id='vee' class='alert alert-dark fade show' role='alert'>Falha ao Enviar Email <br><br/>Digite:<br/>1 - Contatos<br/>2 - Planos<br/>3 - Solicitar representante<br/>4 - Atendimento póstumo<br/></div>";
                    console.log('FAILED...', error);
                });
                    
        }}

    

    if(msg.texto.substr(0,3) === "Por"){

        return (
            
                        
            <div key = {k}>
        
        {
            msg.origem === "user" && <span>
              
           
            
            <div className='usuario'>
          
            <div id='textouc'>
                    <Alert color='info' id='teste'>{msg.texto}</Alert>
            </div>

                <div>
                    <img src='images/duvidas.png' id='userconversa' alt='Usuário'/>
                </div>
           
            
        </div>
            
        </span>
        
        }

        {
            msg.origem === "bot" && <span>
                <div className='iracema' id='fazendolink'>
                    <div>
                        <img src='images/iracema.jpg' id='botconversa' alt="Iracema"/>
                    </div>
                    
                        <div id='va'>
                       
                        <Alert color='dark' id='teste4'><span>{msg.texto}</span>
                        <br/><br/>
                        
                        <div className='ver' id='ver'>
                        
                            <hr/>
                                Nome<br/>
                            <Input type='text' placeholder='Nome' id="nomeinput"/><br/>
                                CPF<br/>
                            <Input  type='text' placeholder='000.000.000-00' id="cpfinput" /><br/>
                                Número do contrato
                            <Input type='text' placeholder='Contrato' id="contratoinput" /><br/>
                                Email
                            <Input  type='text'placeholder='Email(Opcional)' id="emailinput" /><br/>
                                Dia da visita do representante<br/>
                            <Input type='text' placeholder='Dia' id="diainput" /><br/>
                                Horário da visita<br/>
                            <Input type='text' placeholder='Horário' id="horainput" /><br/>
                                Endereço de envio do representante<br/>
                            <Input  type='text' placeholder='Endereço' id="endinput" /><br/>
                                Telefone para contato<br/>
                            <Input type='text' placeholder='Telefone' id="telinput" /><br/>
                       
                        
                        <InputGroupAddon addonType='append'>
                            <Button color='dark' onClick={sendMailCobranca} >Enviar</Button>
                        </InputGroupAddon>
                            
                        </div>
                        
                        </Alert>
                        
                        </div>
                       
               
                   
                </div>
                
            </span>
        }
        
            </div>


    )

    }

    if(msg.texto.substr(0,3) === "Res"){

        return (
            
                        
            <div key = {k}>
        
        {
            msg.origem === "user" && <span>
              
           
            
            <div className='usuario'>
          
            <div id='textouc'>
                    <Alert color='info' id='teste'>{msg.texto}</Alert>
            </div>

                <div>
                    <img src='images/duvidas.png' id='userconversa' alt='Usuário'/>
                </div>
           
            
        </div>
            
        </span>
        
        }

        {
            msg.origem === "bot" && <span>
                <div className='iracema' id='fazendolink'>
                    <div>
                        <img src='images/iracema.jpg' id='botconversa' alt="Iracema"/>
                    </div>
                    
                        <div id='ve'>
                       
                        <Alert color='dark' id='teste4'><span>{msg.texto}</span>
                        <br/><br/>
                        
                        <div className='ver' id='ver'>
                        
                            <hr/>
                                Nome<br/>
                            <Input type='text' placeholder='Nome' id="nomeinput"/><br/>
                                CPF<br/>
                            <Input  type='text' placeholder='000.000.000-00' id="cpfinput" /><br/>
                                Número do contrato
                            <Input type='text' placeholder='Contrato' id="contratoinput" /><br/>
                                Endereço antigo<br/>
                            <Input type='text' placeholder='Endereço antigo' id="endaninput" /><br/>
                                Novo endereço<br/>
                            <Input type='text' placeholder='Endereço novo' id="endnovoinput" /><br/>
                                Telefone para contato<br/>
                            <Input type='text' placeholder='Telefone' id="telinput" /><br/>
                       
                        
                        <InputGroupAddon addonType='append'>
                            <Button color='dark' onClick={sendMailAltEnd} >Enviar</Button>
                        </InputGroupAddon>
                            
                        </div>
                        
                        </Alert>
                        
                        </div>
                       
               
                   
                </div>
                
            </span>
        }
        
            </div>


    )

    }

    if(msg.texto.substr(0,3) === "Ema"){

        return (
            
                        
            <div key = {k}>
        
        {
            msg.origem === "user" && <span>
              
           
            
            <div className='usuario'>
          
            <div id='textouc'>
                    <Alert color='info' id='teste'>{msg.texto}</Alert>
            </div>

                <div>
                    <img src='images/duvidas.png' id='userconversa' alt='Usuário'/>
                </div>
           
            
        </div>
            
        </span>
        
        }

        {
            msg.origem === "bot" && <span>
                <div className='iracema' id='fazendolink'>
                    <div>
                        <img src='images/iracema.jpg' id='botconversa' alt='Iracema'/>
                    </div>
    
                        <div className='tes' id='tes'>
                        <Alert color='dark' id='teste4'><span>{msg.texto}</span>
                        <br/><br/>
                            Digite:<br/>
                            1 - Contatos<br/>
                            2 - Planos<br/>
                            3 - Solicitar representante<br/>
                            4 - Atendimento póstumo<br/>
                        </Alert>
                        
                        </div>
                        
               
                    </div>
                
               
            </span>
        }
        
            </div>


    )

    }






    if(msg.texto.substr(0,3) === "Tec"){
        return (
                        
            <div key = {k}>
        
        {
            msg.origem === "user" && <span>
              
           
            
            <div className='usuario'>
          
            <div id='textouc'>
                    <Alert color='info' id='teste'>{msg.texto}</Alert>
            </div>

                <div>
                    <img src='images/duvidas.png' id='userconversa' alt='Usuário'/>
                </div>
           
            
        </div>
            
        </span>
        
        }

        {
            msg.origem === "bot" && <span>
                <div className='iracema' id='fazendolink'>
                    <div>
                        <img src='images/iracema.jpg' id='botconversa' alt='Iracema'/>
                    </div>
                    
                    <div id='textobc'>
                        <Alert color='dark' id='teste4'><span>{msg.texto}</span>
                        <br/><br/>
                            #1 - Alteração/Inclusão de dependentes<br/>
                            #2 - Negociação de Débitos<br/>
                            #3 - Mudança de Plano ou de Titularidade<br/>
                            #4 - Exclusão de serviços<br/>
                            #5 - Emissão de carnês/boletos<br/>
                            #6 - Aluguel ou venda de materiais hospitalares<br/>
                            #7 - Explicação de planos<br/>
                            #8 - Alteração de endereço<br/>
                            #9 - Alteração de vencimento<br/>
                            #10 - Cancelar plano<br/>

                        </Alert>
               
                    </div>
                
                </div>
            </span>
        }
        
            </div>


    )

    }

    

    var MensagemWhats = "Olá, gostaria de saber sobre o atendimento póstumo";
    localStorage.setItem('MensagemWhats', "https://wa.me/85989269491/?text=" + MensagemWhats.replace(/ /gi,'%20'));


     if(msg.texto.substr(0,3) === "Olá"){
        return (
                        
            <div key = {k}>
        
        {
            msg.origem === "user" && <span>
              
           
            
            <div className='usuario'>
          
            <div id='textouc'>
                    <Alert color='info' id='teste'>{msg.texto}</Alert>
            </div>

                <div>
                    <img src='images/duvidas.png' id='userconversa' alt='Usuário'/>
                </div>
            
        </div>
            
        </span>
        
        }

        {
            
            msg.origem === "bot" && <span>
                
                <div className='iracema' id='fazendolink'>
                    <div>
                        <img src='images/iracema.jpg' id='botconversa' alt='Iracema'/>
                    </div>
                    <a id='textobc' href={MensagemWhats}>
                     
                            <Alert color='dark' id='teste3'>Clique aqui para conversar com nosso atendente<br/><span id='link'>{msg.texto}</span></Alert>
                    </a>
                </div>
            </span>
        }
        
            </div>


    )

    }


    if(msg.texto.substr(0,3) === "Ate"){
        return (
                        
            <div key = {k}>
        
        {
            msg.origem === "user" && <span>
              
           
            
            <div className='usuario'>
          
            <div id='textouc'>
                    <Alert color='info' id='teste'>{msg.texto}</Alert>
            </div>

                <div>
                    <img src='images/duvidas.png' id='userconversa' alt='Usuário'/>
                </div>
            
        </div>
            
        </span>
        
        }

        {
            msg.origem === "bot" && <span>
                <div className='iracema' id='fazendolink'>
                    <div>
                        <img src='images/iracema.jpg' id='botconversa' alt='Iracema'/>
                    </div>
                    
                    <div id='textobc'>
                        <Alert color='dark' id='teste4'><span>{msg.texto}</span>
                        <br/><br/>
                            Digite:<br/>
                            1 - Contatos<br/>
                            2 - Planos<br/>
                            3 - Solicitar representante<br/>
                            4 - Atendimento póstumo<br/>
                        </Alert>
                    </div>
                </div>
            </span>
        }
        
            </div>


    )

    }
    
        if(msg.texto.substr(0, 5) === 'https'){
            return (
                        
                <div key = {k}>
            
            {
                msg.origem === "user" && <span>
                    
                {/* <Badge color='info' id="usertalk">Você disse</Badge> */}
                
                <div className='usuario'>

                <div id='textouc'>
                        <Alert color='info' id='teste'>{msg.texto}</Alert>
                </div>

                    <div>
                        <img src='images/duvidas.png' id='userconversa' alt='Usuário'/>
                    </div>
                
            </div>
                
            </span>
            
            }

            {
                msg.origem === "bot" && <span>
                    <div className='iracema' id='fazendolink'>
                        <div>
                            <img src='images/iracema.jpg' id='botconversa' alt='Iracema'/>
                        </div>
                        
                        <a id='textobc' href={msg.texto}>
                            <Alert color='dark' id='teste3'>Clique aqui:<br/><span id='link'>{msg.texto}</span></Alert>
                        </a>
                    </div>
                </span>
            }
            
                </div>


        )
            
        }else{
            return (
            
                <div key = {k}>
            
            {
                msg.origem === "user" && <span>
                    
                {/* <Badge color='info' id="usertalk">Você disse</Badge> */}
                
                <div className='usuario'>

                <div id='textouc'>
                        <Alert color='info' id='teste'>{msg.texto}</Alert>
                </div>

                    <div>
                        <img src='images/duvidas.png' id='userconversa' alt='Usuário'/>
                    </div>
                
            </div>
                
            </span>
            
            }

            {
                msg.origem === "bot" && <span>
                    <div className='iracema' id='fazendolink'>
                        <div>
                            <img src='images/iracema.jpg' id='botconversa' alt='Iracema'/>
                        </div>
                        
                        <div id='textobc'>
                            <Alert color='dark' id='teste2'>{msg.texto}</Alert>
                        </div>
                    </div>
                </span>
            }
            
                </div>
    
            )
        }

            
            
            
    
}

   
    render(){
    
        return(
             <div className='chat-conversa'>
                {
                   Object.keys(this.props.mensagens).map(key => {
                        return this.renderMensagem(this.props.mensagens[key],key)
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        mensagens: state.chat.mensagens
    }
}

export default connect(mapStateToProps, null)(ChatConversa)