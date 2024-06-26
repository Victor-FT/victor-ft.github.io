(function() {
    // Estilos CSS
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --colors-white: #FFF;
        --colors-black: #000;
        --colors-gray100: #E1E1E6;
        --colors-gray200: #A9A9B2;
        --colors-gray400: #7C7C8A;
        --colors-gray500: #505059;
        --colors-gray600: #323238;
        --colors-gray700: #29292E;
        --colors-gray800: #202024;
        --colors-gray900: #121214;
        --colors-iapp100: #E7DDEE;
        --colors-iapp200: #CFBBDD;
        --colors-iapp300: #AA88C4;
        --colors-iapp500: #775890;
        --colors-iapp700: #472B60;
        --colors-iapp900: #1C0033;
        --darkColors-white: #FFF;
        --darkColors-black: #000;
        --darkColors-gray100: #E1E1E6;
        --darkColors-gray200: #A9A9B2;
        --darkColors-gray400: #7C7C8A;
        --darkColors-gray500: #505059;
        --darkColors-gray600: #323238;
        --darkColors-gray700: #29292E;
        --darkColors-gray800: #202024;
        --darkColors-gray900: #121214;
      }
      @import url(https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);
      .WA_Chat_Widget * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
          z-index: 1000;
          pointer-events: none;
      }
      .WA_Chat_Widget .WA_FloatingButton {
          position: fixed;
          width: 45px;
          height: 45px;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 4px 10px 0px rgba(0, 0, 0, 0.185);
          border-radius: 50%;
          background: var(--colors-iapp500);
          cursor: pointer;
          z-index: 1000;
          transition: background-color 0.3s ease;
          pointer-events: all;
      }
      .WA_Chat_Widget .WA_FloatingButton:hover {
          background: var(--colors-iapp300);
      }
      .WA_Chat_Widget .WA_FloatingButton svg {
          width: 40px;
          height: 40px;
          fill: #4fce5d;
      }
      .WA_Chat_Widget[data-position^="top-"] .WA_FloatingButton {
          top: 20px;
      }
      .WA_Chat_Widget[data-position^="bottom-"] .WA_FloatingButton {
          bottom: 20px;
      }
      .WA_Chat_Widget[data-position$="-left"] .WA_FloatingButton {
          left: 20px;
      }
      .WA_Chat_Widget[data-position$="-right"] .WA_FloatingButton {
          right: 20px;
      }
      .WA_Chat_Widget[data-position$="-center"] .WA_FloatingButton {
          left: 50%;
          transform: translateX(-50%);
      }
      .WA_Chat_Widget[data-position^="top-"] .WA_ChatBox {
          top: 100px;
      }
      .WA_Chat_Widget[data-position^="bottom-"] .WA_ChatBox {
          bottom: 100px;
      }
      .WA_Chat_Widget[data-position$="-left"] .WA_ChatBox {
          left: 10px;
      }
      .WA_Chat_Widget[data-position$="-right"] .WA_ChatBox {
          right: 10px;
      }
      .WA_Chat_Widget[data-position$="-center"] .WA_ChatBox {
          left: 50%;
      }
      .WA_Chat_Widget .WA_ChatBox {
        position: fixed;
        width: 340px;
        max-height: 0; 
        height: 0; 
        overflow: hidden;
        border-radius: 14px;
        box-shadow: 0 1px 10px 0px rgba(0, 0, 0, 0.1);
        opacity: 0;
        height: 0;
        transform: translateY(50px);
        transition: opacity 0.3s ease, transform 0.3s ease;
      }

      .WA_Chat_Widget .WA_ChatBox.show {
        opacity: 1;
        max-height: 999px !important; 
        height: unset;
        transform: translateY(25px);
        transition: opacity 0.3s ease, transform 0.3s ease;
      }
      .WA_Chat_Widget .WA_ChatBox .WA_ChatBox_Header {
          width: auto;
          background: var(--colors-iapp500);
          padding: 20px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
      }
      .WA_Chat_Widget .WA_ChatBox .WA_ChatBox_Header .avatarBox {
          width: 65px;
          height: 65px;
          border-radius: 50%;
          padding: 8px;
          overflow: hidden;
          background: var(--colors-iapp500);
          border: 1px solid var(--colors-iapp100);
      }
      .WA_Chat_Widget .WA_ChatBox .WA_ChatBox_Header .avatarBox img {
          width: 100%;
          height: 100%;
          object-fit: cover;
      }
      .WA_Chat_Widget .WA_ChatBox .WA_ChatBox_Header .infoBox .name {
          color: var(--darkColors-white);
          font-weight: 600;
      }
      .WA_Chat_Widget .WA_ChatBox .WA_ChatBox_Header .infoBox .answer_time {
          color: var(--colors-iapp100);
          font-size: 14px;
      }
      .WA_Chat_Widget .WA_ChatBox .WA_ChatBox_Header .WA_Close {
          background: transparent;
          color: var(--darkColors-white);
          border: none;
          outline: none;
          font-size: 20px;
          position: absolute;
          top: 10px;
          right: 10px;
          cursor: pointer;
          pointer-events: all;
      }
      .WA_Chat_Widget .WA_ChatBox .WA_ChatBox_Header .WA_Close svg {
        fill: var(--darkColors-white);
      }
      .WA_Chat_Widget .WA_ChatBox .WA_ChatBox_Body {
          padding: 20px;
          background: var(--darkColors-gray700);
          position: relative;
      }
      .WA_Chat_Widget .WA_ChatBox .WA_ChatBox_Body::before {
          content: '';
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          /* background: url(./bg-pattern.png); */
          opacity: 0.1;
          z-index: 0;
      }
      .WA_Chat_Widget .WA_ChatBox .WA_ChatBox_Body .message {
          max-width: 280px;
          background: var(--darkColors-gray800);
          padding: 20px;
          padding-top: 10px;
          border-radius: 14px;
          z-index: 1;
          position: relative;
      }
      .WA_Chat_Widget .WA_ChatBox .WA_ChatBox_Body .message::before {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          background: var(--darkColors-gray800);
          left: -10px;
          top: 0px;
          border-radius: 3px;
          clip-path: polygon(100% 0, 0 0, 100% 100%);
      }
      .WA_Chat_Widget .WA_ChatBox .WA_ChatBox_Body .message .username {
          color: var(--colors-iapp300);
          font-weight: 500;
      }
      .WA_Chat_Widget .WA_ChatBox .WA_ChatBox_Body .message .message_content {
          font-size: 14px;
          color: var(--darkColors-white);
      }
      .WA_Chat_Widget .WA_ChatBox .WA_ChatBox_Footer {
          padding: 20px;
          background-color: var(--darkColors-gray800);
          width: 100%;
      }
      .WA_Chat_Widget .WA_ChatBox .WA_ChatBox_Footer .btn {
          width: 100%;
          outline: none;
          border: none;
          padding: 10px;
          border-radius: 1000px;
          font-size: 16px;
          cursor: pointer;
          text-decoration: none;
          pointer-events: all;
      }
      .WA_Chat_Widget .WA_ChatBox .WA_ChatBox_Footer .btn.btn-whatsapp {
          background: var(--colors-iapp500);
          color: var(--darkColors-white);
          display: block;
          text-align: center;
          transition: background-color 0.3s ease;
      }

      .WA_Chat_Widget .WA_ChatBox .WA_ChatBox_Footer .btn.btn-whatsapp:hover {
          background: var(--colors-iapp300);
      }
      
      .help-message {
          z-index: 1;
          height: 45px;
          display: none;
          position: fixed;
          align-items: center;
          bottom: 20px;
          right: 80px;
          background: var(--colors-iapp500);
          font-family: "Poppins", sans-serif;
          color: white;
          padding: 0px 10px;
          font-size: 14px;
          color: var(--darkColors-white);
          border-radius: 20px;
          border-top-right-radius: 0px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.185);
          animation: slide-up 0.5s ease forwards;
      }
      
      .help-message::before {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          background: var(--colors-iapp500);
          right: -10px;
          top: 0px;
          border-radius: 3px;
          clip-path: polygon(0 0, 100% 0, 0 100%);
      }

      
      @keyframes slide-up {
          0% {
              transform: translateX(50px);
              opacity: 0;
          }
          100% {
              transform: translateX(0);
              opacity: 1;
          }
      }
      
      
      @media screen and (max-width: 400px) {
          .WA_ChatBox {
              width: 90%;
              max-width: 90%;
          }

          .WA_ChatBox.show {
              height: unset !important;
          }
          
      }
    `;
    document.head.appendChild(style);

    // HTML Structure
    const widgetHTML = `
    <div>
        <div class="WA_Chat_Widget" data-position="bottom-right">
            <div class="WA_ChatBox">
                <div class="WA_ChatBox_Header">
                    <div class="avatarBox">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/IAppLogo.png" alt="Chat Avatar">
                    </div>
                    <div class="infoBox">
                        <h4 class="name">iApper</h4>
                        <span class="answer_time">Geralmente response na hora.</span>
                    </div>
                    <button class="WA_Close" onclick="hideChatbox()"><svg xmlns="http://www.w3.org/2000/svg" height="1em"
                            viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
                        </svg></button>
                </div>
                <div class="WA_ChatBox_Body">
                    <div class="message">
                        <h4 class="username">iApper</h4>
                        <div class="message_content">
                            <p>Olá! Como posso te ajudar?</p>
                        </div>
                    </div>
                </div>
                <div class="WA_ChatBox_Footer">
                    <a class="btn btn-whatsapp" href="http://wa.me/553175769447" target="_blank">Iniciar Chat</a>
                </div>
            </div>
            <div class="WA_FloatingButton" onclick="toggleChatbox()">
                <img width="30" height="30" src="https://upload.wikimedia.org/wikipedia/commons/e/e7/IAppLogo.png" alt="Chat Avatar">
            </div>
        </div>
        <div class="help-message">
            <p>
            Precisa de ajuda?
            </p>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', widgetHTML);

    // Script Functionality
    let isChatboxVisible = false;
    let countChatVisible = 0;
    const chatbox = document.querySelector(".WA_Chat_Widget .WA_ChatBox");

    function hideChatbox() {
      isChatboxVisible = false;
      chatbox.classList.remove("show");
    }

    function toggleChatbox() {
      isChatboxVisible = !isChatboxVisible;
      if (isChatboxVisible) {
        countChatVisible++;
        chatbox.classList.add("show");
        const helpMessage = document.querySelector('.help-message'); 
        helpMessage.style.display = 'none';
      } else {
        chatbox.classList.remove("show");
      }
    }

    setTimeout(() => {
      if(countChatVisible === 0) {
        const helpMessage = document.querySelector('.help-message');
        helpMessage.style.display = 'flex';
      }
    }, 5000);

    window.hideChatbox = hideChatbox;
    window.toggleChatbox = toggleChatbox;
})();
