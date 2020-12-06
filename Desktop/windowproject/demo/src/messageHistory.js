import byte from './../assets/byte.png';

export default [
  {type: 'text', author: 'me', data: { text: "Hi, I'm Sarah! I am advocating for environmental issues!"} },
  {type: 'text', author: 'them', data: { text: 'Im Max, and I am also advocating for environmental issues!'} },
  {type: 'text', author: 'me', data: { text: 'I would love to collaborate to help make changes in environmental policies'} },
  {type: 'text', author: 'them', data: { text: "That would be awesome! Do you have a twitter so we can connect?"} },
  {type: 'text', author: 'me', data: { text: " Yep! Its @environmentalist123 "} },
  {type: 'text', author: 'them', data: { text: "It was great connecting with you, Im looking forward to working with you on advocating for a change with our local representatives!"} },
  {type: 'text', author: 'me', data: { text: 'Me too! Working as a group will definitely help! Talk to you later! '} },
  {type: 'emoji', author: 'me', data: { emoji: '😋'} },
  {type: 'file', author: 'me',
    data: {
      //url: ContactInfo,
      fileName: 'ContactInfo'
   }},
];
