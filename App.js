import React, { useState } from 'react';
import { StyleSheet, Button, TextInput, View } from 'react-native';

import { encrypt, decrypt } from './libs/xcrypt';

export default function App() {
  const [passwordOrCipher, setPasswordOrCipher] = useState('');
  const [masterKey, setMasterKey] = useState('');

  const _encrypt = () => setPasswordOrCipher(encrypt(passwordOrCipher, masterKey));

  const _decrypt = () => setPasswordOrCipher(decrypt(passwordOrCipher, masterKey));

  return (
    <View style={styles.container}>
      <View style={styles.passwordOrCipherContainer} >
        <TextInput
          style={styles.passwordOrCipher}
          placeholder="Password or Ciper"
          onChangeText={str => setPasswordOrCipher(str)}
          value={passwordOrCipher}
          multiline={true}
        />
      </View>
      <TextInput
        style={{height: 40}}
        placeholder="Master key."
        secureTextEntry={true}
        onChangeText={key => setMasterKey(key)}
        value={masterKey}
      />
      <Button title="Encrypt" onPress={_encrypt} />
      <Button title="Decrypt" onPress={_decrypt} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  passwordOrCipherContainer: {
    borderColor: '#ccc',
    borderWidth: 1,
    width: '98%',
  },
  passwordOrCipher: {
    margin: 15,
    height: 50,
    width: '98%',
    borderColor: '#7a42f4',
    borderWidth: 1,
    justifyContent: "flex-start",
  },
});
