const logged__in = document.querySelectorAll('.logged-in');
const logged__out = document.querySelectorAll('.logged-out');
const accDetails = document.querySelector('.account__details');

class chatUI {
    constructor(chats){
        this.chats = chats;
    }

    render(dataChat){
        const time = dateFns.format( dataChat.created_at.toDate(), 'HH:mm A');

        let template = `
            <li>
                <span class="time">${time}</span>
                <span class="username">${dataChat.username}</span>
                <span class="message">${dataChat.message}</span>
            </li>
        `;
        this.chats.innerHTML += template;
    }

    clear(){
        this.chats.innerHTML = '';
    }

    setupUI(user){
        if(user) {
            const html = `
                <h6 class="white-text">Logged in as : ${user.email}</h6>
            `;

            accDetails.innerHTML = html;
            
            logged__out.forEach(change => change.style.display = 'none');
            logged__in.forEach(change => change.style.display = '');
        } else {
            accDetails.innerHTML = '';

            logged__out.forEach(change => change.style.display = '');
            logged__in.forEach(change => change.style.display = 'none');
        }
    }

}

export { chatUI as default }