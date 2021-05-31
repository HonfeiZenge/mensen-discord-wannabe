import Chats from './chat';
import chatUI from './chatUI';
import Auth from './auth';

// defining dom variable
const mssgList = document.querySelector('.chat__pageList > ul');
const mssgForm = document.querySelector('.chat__messageForm > form');
const channel = document.querySelector('.sideber__channelList');
const currentChannel = document.querySelector('.header__leftSide h4');

const signupForm = document.querySelector('#signup-form');
const modal = document.querySelector('#modal-signup');
const logout = document.querySelector('#logout');
const loginForm = document.querySelector('#login-form');
const modalLogin = document.querySelector('#modal-login');
const userName = document.querySelector('.profile__info > h6');

// make instance for class
const chats = new Chats();
const renderUI= new chatUI(mssgList);
const pemeriksaan = new Auth(signupForm, logout, loginForm);

// load all the modal
document.addEventListener('DOMContentLoaded', () => {
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
});

// listen to user state
auth.onAuthStateChanged(user => {
    if(user){
        currentChannel.textContent = 'pick channel';
        renderUI.setupUI(user);
        userName.textContent = user.email;
        // selecting message room
        channel.addEventListener('click', (e) => {
            if (e.target.tagName === 'LI'){
                renderUI.clear();
                const roomName = e.target.getAttribute('id');
                chats.selectRoom(roomName);
                currentChannel.textContent = roomName;
                chats.getChat(chatData => renderUI.render(chatData));
            }
        });

        // adding new message
        mssgForm.addEventListener('submit', e => {
            e.preventDefault();
            const mssg = mssgForm.input__message.value.trim();

            chats.addChat(mssg, user.email);
            mssgForm.reset();
        });

        chats.getChat(chatData => renderUI.render(chatData));

    } else {
        chats.unsubscribe();
        renderUI.setupUI();
        currentChannel.textContent = 'you have to logged in';
    }
});

// register new user
pemeriksaan.regisUsr(modal);

// logout user
pemeriksaan.logoutUsr();

// login user
pemeriksaan.loginUsr(modalLogin);