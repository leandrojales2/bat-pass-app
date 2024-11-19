import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from 'react-native';
import styles from './HomeStyles';
import { BatLogo } from '../../components/BatLogo/BatLogo';
import { BatButton } from "../../components/BatButton/BatButton";
import { SectionOption } from "../../components/SectionOption/SectionOption";


export default function Home() {

    const [selectedId, setSelectedId] = useState()

    function confere () {

    }
    return(
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <BatLogo />
            </View>
            <View style={styles.optionContainer}>
                <SectionOption />
            </View>
            <View style={styles.inputContainer}>
                <BatButton/>
            </View>
            <StatusBar style="light" />
        </View>
    )
}