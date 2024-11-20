import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';

import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';

import * as Clipboard from 'expo-clipboard'
import { useSelectionStore } from '../../store/store';

export function BatButton() {

  const [pass, setPass] = useState('')
  const { GenerationOfTwelveOrGenerationOfEight } = useSelectionStore() as { GenerationOfTwelveOrGenerationOfEight: { number: number } };

  function handleGenerateButton(){
    let generateToken = generatePass(GenerationOfTwelveOrGenerationOfEight.number)
    setPass(generateToken)
  }

  function handleCopyButton(){
    Clipboard.setStringAsync(pass)
  }

  return (
    <>
        <BatTextInput pass={pass} />
        <Pressable 
            style={styles.button}
            onPress={handleGenerateButton}
        >
            <Text style={styles.text}>GENERATE</Text>
        </Pressable>
        <Pressable 
            style={styles.button}
            onPress={handleCopyButton}
        >
            <Text style={styles.text}>COPY</Text>
        </Pressable>
    </>
  );
}