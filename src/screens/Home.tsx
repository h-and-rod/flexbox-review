import React, { useState } from "react";
import { View, Image, Text } from "react-native";

import { styles } from './HomeStyles';
import { Profile } from "../components/profile/Profile";

export function Home() {

    return (
        <View style={styles.container}>

            <Profile/>
            <Text>Open up App.tsx to start working on your app!</Text>
            <Text>Open up App.tsx to start working on your app!</Text>
            <Text>Open up App.tsx to start working on your app!</Text>
            <Text>Open up App.tsx to start working on your app!</Text>
        </View>
    )
}