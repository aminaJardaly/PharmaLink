import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { getColors } from '../../../constants/Colors';
import { useRouter } from 'expo-router';

export default function ChatScreen() {
  const colors = getColors();
  const router = useRouter();

  const [messages, setMessages] = useState([
    { id: '1', sender: 'Support', text: 'Hello there! Need help? Reach out to us right here, and we’ll get back to you as soon as we can!', timestamp: 'Dec 2024' },
    { id: '2', sender: 'You', text: 'Hello, why is there a minus 800 thousand in my wallet?', timestamp: 'Dec 2024' },
    { id: '3', sender: 'Marcelle', text: 'We are away now. Please contact the store phone number provided for any instant updates or requirements about your order. If you would like to report an unsolved issue with the store, kindly leave a message here and our team will get back to you as soon as possible during working hours. 💚', timestamp: 'Dec 2024' },
    { id: '4', sender: 'Rim', text: 'Hello Amina 😊 I will check with the tech team department and will get back to you as soon as possible 🙏', timestamp: 'Dec 2024' },
    { id: '5', sender: 'Rim', text: 'They resolved this issue. Don’t worry, there is no minus now in your wallet 💚', timestamp: 'Dec 2024' },
  ]);

  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { id: Date.now().toString(), sender: 'You', text: message, timestamp: 'Now' }]);
      setMessage('');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Chat Header with Go Back Arrow */}
      <View style={[styles.header, { borderColor: colors.borderColor }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <View>
          <Text style={[styles.headerText, { color: colors.text }]}>Inbox</Text>
          <Text style={[styles.subHeaderText, { color: colors.secondaryText }]}>Typically replies within 4 minutes</Text>
        </View>
      </View>

      {/* Chat Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.messageBubble, item.sender === 'You' ? styles.youBubble : styles.supportBubble]}>
            <Text style={[styles.messageText, { color: colors.text }]}>{item.text}</Text>
            <Text style={[styles.timestamp, { color: colors.secondaryText }]}>{item.timestamp}</Text>
          </View>
        )}
      />

      {/* Chat Input */}
      <View style={[styles.inputContainer, { backgroundColor: colors.background }]}>
        <TextInput
          style={[styles.input, { borderColor: colors.borderColor, color: colors.text }]}
          placeholder="Type a message"
          placeholderTextColor={colors.secondaryText}
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={[styles.sendButton, { backgroundColor: colors.primary }]} onPress={handleSendMessage}>
          <Text style={[styles.sendButtonText, { color: colors.buttonText }]}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
  },
  backButton: {
    marginRight: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subHeaderText: {
    fontSize: 14,
  },
  messageBubble: {
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 12,
    borderRadius: 8,
    maxWidth: '80%',
  },
  youBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#E1FFC7',
  },
  supportBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#E8F5FF',
  },
  messageText: {
    fontSize: 16,
  },
  timestamp: {
    fontSize: 12,
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginRight: 8,
  },
  sendButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  sendButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
