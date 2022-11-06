const {createApp} = Vue;

createApp({
    data(){
        return{
            currentIndex: 0,
            newMessage: '',
            searchContact: '',
            showChat: false,
            showEmoji: false,
            msgDelete: {
                index: null,
                show: false,
            },
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    id: 0,
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    id: 1,
                    visible: true,
                    messages: [
                        {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                        },
                        {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                        },
                        {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    id: 2,
                    visible: true,
                    messages: [
                        {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                        },
                        {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                        },
                        {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    id: 3,
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    id: 4,
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    id: 5,
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                        },
                        {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    id: 6,
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    id: 7,
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                        }
                    ],
                }
            ],
            answers: [
                'Sì',
                'No',
                'Forse',
                'Domani',
                'Certamente',
                'Santocielo',
                'Anche no',
                'Bella giornata',
                'Perchè?',
                'Santa pazienza',
                'Ho fame',
                'Bene grazie, tu?',
                'Organizziamo il weekend'
            ],
            icons:[
                '&#128512;',
                '&#128513;',
                '&#128514;',
                '&#128515;',
                '&#128516;',
                '&#128517;',
                '&#128518;',
                '&#128519;',
                '&#128521;',
                '&#128522;',
                '&#128523;',
                '&#128524;',
                '&#128525;',
                '&#128526;',
                '&#128528;',
                '&#128529;',
                '&#128530;',
                '&#128536;',
                '&#128545;',
                '&#128520;',
                '&#128548;',
                '&#128561;',
                '&#129315;',
                '&#129299;',
                '&#129319;',
                '&#129321;',
                '&#129325;',
                '&#129488;',
                '&#128558;',
                '&#128555;',
                '&#128557;',
                '&#129312;',
                '&#129313;',
                '&#127877;',
                '&#129409;',
                '&#128584;',
                '&#9996;',
                '&#9995;',
                '&#10024;',
                '&#10062;',
                '&#128064;',
                '&#128077;',
                '&#128079;',
                '&#128152;',
                '&#128149;',
                '&#128156;',
                '&#128158;',
                '&#129310;',
                '&#129505;',
                '&#127802;',
                '&#127801;',
                '&#127808;',
                '&#127804;',
                '&#127829;',
                '&#9749;',
                '&#127847;',
            ],
        }     
    },
    computed: {
        filteredContacts(){
            return this.contacts.filter((item)=>{
                const name = item.name.toLowerCase();
                return name.includes(this.searchContact.toLowerCase());
            })
        }
    },
    methods: {
        callChat(id){
            this.currentIndex = this.contacts.findIndex((item)=> id === item.id );
            this.backToContacts();
        },
        backToContacts(){
            this.showChat = !this.showChat;
        },
        sendMessage(){
            if(!this.newMessage) return;
            const d = new Date();
            let newDate = d.toDateString();
            const newSentMessage = {
                date: newDate,
                message: this.newMessage,
                status: 'sent'
            }
            this.contacts[this.currentIndex].messages.push(newSentMessage);
            this.newMessage = '';
            this.autoReply();
            this.$nextTick(()=> {
                const el =  this.$refs.msg[this.$refs.msg.length - 1 ];
                el.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
            })
        },
        autoReply(){
            setTimeout(()=>{
                let randomAnswerIndex = randomNumber(0, this.answers.length -1);
                let randomAnswer = this.answers[randomAnswerIndex];
                const d = new Date();
                let newDate = d.toDateString();
                const newSentMessage = {
                    date: newDate,
                    message: randomAnswer,
                    status: 'received'
                }
                this.contacts[this.currentIndex].messages.push(newSentMessage);
                this.$nextTick(()=> {
                    const el =  this.$refs.msg[this.$refs.msg.length - 1 ];
                    el.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
                })
            }, 1000)
        },
        getLastMessage(item){
            const msg = item.messages.filter((message)=>{
                return message.status === 'received';
            })
            if(msg.length < 1){
                return ''
            }
            return msg[msg.length -1];
        },
        deleteMessage(i){
            this.contacts[this.currentIndex].messages.splice(i, 1);
            this.msgDelete.show = false;
        },
        showOption(i){
            if(i === this.msgDelete.index && this.msgDelete.show){
                this.msgDelete.index = null;
                this.msgDelete.show = false;
            } else {
                this.msgDelete.index = i;
                this.msgDelete.show = true;
            }
        },
        showEmoticons(){
            this.showEmoji = !this.showEmoji;
        },
        addEmoji(i){
            this.newMessage += this.icons[i]
        }
    }
}).mount('#app')

// ---libreria
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}