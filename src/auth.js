class Auth {
    constructor(regisForm, logout, login){
        this.regisForm = regisForm;
        this.logout = logout;
        this.login = login;
    }

    regisUsr(modal){
        this.regisForm.addEventListener('submit', (e) => {
            e.preventDefault();
        
            // get user info
            const email = this.regisForm['signup-email'].value;
            const password = this.regisForm['signup-password'].value;
        
            // sign up the user
            auth.createUserWithEmailAndPassword(email, password)
                .then(cred => {
                    M.Modal.getInstance(modal).close();
                    this.regisForm.reset();
                }).catch(err => console.log(err.message));
        });
    }

    logoutUsr(){
        this.logout.addEventListener('click', e => {
            e.preventDefault();
            auth.signOut()
                .then(() => {})
                .catch(err => console.log(err.message));
        });
    }

    loginUsr(modalForm){
        this.login.addEventListener('submit', e => {
            e.preventDefault();

            const email = this.login['login-email'].value;
            const password = this.login['login-password'].value;
                auth.signInWithEmailAndPassword(email, password)
                .then(cred => {
                    M.Modal.getInstance(modalForm).close();
                    this.login.reset();
                }).catch(err => {
                    console.log(err.message);
                });
        });
    }
    
}

export { Auth as default }