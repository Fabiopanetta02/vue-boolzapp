const root = new Vue({
    name: 'Boolzapp',
    el: '#root',
    data:{
        currentIndex: 0,
        currentMessage: null,
        messageText: "",
        search: "",
        user: {
            name: 'Nome Utente',
            avatar: '_io'
        },
        contacts: [
            {
              name: 'Michele',
              avatar: '_1',
              visible: true,
              messages: [{
                date: '10/01/2020 15:30:55',
                text: 'Hai portato a spasso il cane?',
                status: 'sent'
              },
              {
                date: '10/01/2020 15:50:00',
                text: 'Ricordati di dargli da mangiare',
                status: 'sent'
              },
              {
                date: '10/01/2020 16:15:22',
                text: 'Tutto fatto!',
                status: 'received'
              }
              ],
             
            },
            {
              name: 'Fabio',
              avatar: '_2',
              visible: true,
              messages: [{
                date: '20/03/2020 16:30:00',
                text: 'Ciao come stai?',
                status: 'sent'
              },
              {
                date: '20/03/2020 16:30:55',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
              },
              {
                date: '20/03/2020 16:35:00',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'received'
              }
              ],
             
            },
            {
              name: 'Samuele',
              avatar: '_3',
              visible: true,
              messages: [{
                date: '28/03/2020 10:10:40',
                text: 'La Marianna va in campagna',
                status: 'received'
              },
              {
                date: '28/03/2020 10:20:10',
                text: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
              },
              {
                date: '28/03/2020 16:15:22',
                text: 'Ah scusa!',
                status: 'received'
              }
              ],
            },
            {
              name: 'Luisa',
              avatar: '_4',
              visible: true,
              messages: [{
                date: '10/01/2020 15:30:55',
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
              },
              {
                date: '10/01/2020 15:50:00',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received'
              }
              ],
            },
        ],
    },
    computed: {
      // funzione per filtrare i contatti
      filteredContacts() {
          return this.contacts.filter(
              element => {
                  return element.name.toLocaleLowerCase().includes(this.search.toLowerCase());
              }
          );
      }
  },
    methods: {
        // funzione per impostare l'index del contatto cliccato
        goToIndex(index) {
            this.currentIndex = index;
        },

        // funzione che inserisci messaggio scritto nell'array e da la risposta
        newMessage(contact) {
          let newSentMessage = {
            date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
            text: this.messageText,
            status: 'sent'
        };

        this.filteredContacts[contact].messages.push(newSentMessage);

        this.messageText = "";

        setTimeout(
            ()=> {
                let newReceivedMessage = {
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: "Ok",
                    status: 'received'
                };

                this.filteredContacts[contact].messages.push(newReceivedMessage);

            },1000
        );
        }
    }

})
