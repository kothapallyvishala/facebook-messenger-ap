import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import { FormControl,Input} from '@mui/material';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import Flipmove from 'react-flip-move';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';


function App() {
  const [ input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc =>({id: doc.id, message: doc.data()})))
    });
  } ,[] )

  useEffect(() => {
    setUsername(prompt('please enter your name'));
  },[]
  )

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('');
  }

  return (
    <div className="App">
      <p>            </p>
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="Facebook-message-clone"></img>
      <h1>Hello World!</h1>
      <h2>Welcome {username}</h2>
      <form className="app__form">
      <FormControl className='app__formControl'>
         <Input className='app__input' placeholder='Enter a Messege...' value={input} onChange={event=> setInput(event.target.value)}/>


         <IconButton className='app__iconButton' disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
          <SendIcon />
         </IconButton>
      </FormControl> 
      </form>

      <Flipmove>

        { 
          messages.map(({id,message}) => (
          <Message key={id} username={username} message= {message} />
          ))
        }
      </Flipmove>
    </div>
  )
}

export default App;
