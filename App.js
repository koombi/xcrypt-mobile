import React, { useState } from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';

import { encrypt, decrypt } from './libs/xcrypt';

export const ActionButton = ({ title, onPress, ...rest }) => (<View style={styles.actionButton}><Button title={title} onPress={onPress} {...rest} /></View>);

export default function App() {
  const [passwordOrCipher, setPasswordOrCipher] = useState('');
  const [masterKey, setMasterKey] = useState('');
  const [touchedEncrypt, setTouchedEncrypt] = useState(null);
  const [touchedDecrypt, setTouchedDecrypt] = useState(null);

  const _encrypt = () => {
    setPasswordOrCipher(encrypt(passwordOrCipher, masterKey));
    setTouchedEncrypt(true);
    setTouchedDecrypt(false);
  };

  const _decrypt = () => {
    setPasswordOrCipher(decrypt(passwordOrCipher, masterKey));
    setTouchedDecrypt(true);
    setTouchedEncrypt(false);
  };

  const _reset = () => {
    setPasswordOrCipher('');
    setMasterKey('');
    setTouchedEncrypt(null);
    setTouchedDecrypt(null);
  }

  return (
    <View style={styles.container}>
      <View style={styles.passwordOrCipherContainer} >
        <TextInput
          style={styles.passwordOrCipherInput}
          placeholder="Password or Ciper"
          onChangeText={str => setPasswordOrCipher(str)}
          value={passwordOrCipher}
          multiline={true}
          numberOfLines={15}
        />
        <TextInput
          style={styles.masterKeyInput}
          placeholder="Master key."
          secureTextEntry={true}
          onChangeText={key => setMasterKey(key)}
          value={masterKey}
        />
      </View>

      <View style={styles.buttonContainer}>
        <ActionButton title="Encrypt" disabled={touchedEncrypt} onPress={_encrypt} />
        <ActionButton title="Decrypt" disabled={touchedDecrypt} onPress={_decrypt} />
        <ActionButton title="Reset" onPress={_reset} />
      </View>

      <View style={styles.logoContainer}>
        <Text style={styles.textLogo}>XCRYPT</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#ffffff',
    marginTop: 25,
    padding: 10,
  },
  passwordOrCipherContainer: {
    display: 'flex',
    alignItems: 'stretch',
  },
  passwordOrCipherInput: {
    backgroundColor: '#e6dfe2',
    marginBottom: 5,
    padding: 10,
    textAlignVertical: 'top',
  },
  masterKeyInput: {
    backgroundColor: '#e6dfe2',
    marginBottom: 5,
    padding: 10,
  },
  buttonContainer: {
    display: 'flex',
  },
  actionButton: { marginTop: 5 },
  logoContainer: { padding: 20 },
  textLogo: { textAlign: 'center', color: '#ff0000', fontWeight: 'bold' }
});
