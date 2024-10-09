import React, {useState} from 'react';
import {View, TextInput, Button, FlatList, Text} from 'react-native';
import {useEffect} from 'react';

const ws = new WebSocket('ws://your-websocket-server-url');

// useEffect(() => {
//   ws.onmessage = event => {
//     const newMessage = event.data;
//     setMessages(prevMessages => [...prevMessages, newMessage]);
//   };

//   return () => {
//     ws.close();
//   };
// }, []);

// const sendMessage = () => {
//   ws.send(input);
//   setInput('');
// };

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    setMessages([...messages, input]);
    setInput('');
  };

  return (
    <View style={{marginTop: 50, alignSelf: 'center'}}>
      <FlatList data={messages} renderItem={({item}) => <Text>{item}</Text>} />
      <TextInput
        style={{borderWidth: 1, width: 200, height: 40, fontSize: 16}}
        placeholder="Type a message"
        value={input}
        onChangeText={setInput}
      />
      <Button title="Send" style={{fontSize: 16}} onPress={sendMessage} />
    </View>
  );
};

export default Chat;
