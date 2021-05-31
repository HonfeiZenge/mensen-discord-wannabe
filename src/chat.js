class Chats {
    constructor(){
        this.response = db.collection('chats');
        this.room = 'general';
        this.unsub;
    }

    selectRoom(room){
        this.room = room;
        console.log(`this is room ${room}`)
        if(this.unsub){
            this.unsub();
        }
    }

    getChat(chatData) {
        this.unsub = this.response
            .where('room', '==', this.room)
            .orderBy('created_at')
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach( change => {
                    const doc = change.doc;
                        if(change.type === 'added'){
                            chatData(doc.data());
                        }
                });
            });
    }

    addChat(message, username) {
            const now = new Date();
            const addChat = {
                username: username,
                room: this.room,
                message,
                created_at: firebase.firestore.Timestamp.fromDate(now)
            }
            if(addChat.message.length){
                this.response.add(addChat)
                    .then( () => {
                        console.log('message added');
                    })
                    .catch( err => console.log(err.message) );
            } else {
                console.log('message cannot be empty');
            }
    }

    unsubscribe(){
        return this.unsub;
    }

}

export { Chats as default }