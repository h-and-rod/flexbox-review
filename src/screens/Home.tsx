import React, { useState } from "react";
import { View, Image, Text } from "react-native";

import { styles } from './HomeStyles';
import { Profile } from "../components/profile/Profile";
import { CardDetalhamento } from "../components/card/CardDetalhamento";
import { CardSeguindo } from "../components/card/CardSeguindo";
import { CardSeguidores } from "../components/card/CardSeguidores";
import { Botao } from "../components/botao/Botao";

export function Home() {

    return (
        <View style={styles.container}>
            <View style={styles.perfil}>
                <View style={styles.cardsColuna}>
                    <Profile/>
                    <CardDetalhamento></CardDetalhamento>
                </View>
                <View style={styles.cardsLinha}>               
                    <CardSeguindo></CardSeguindo>
                    <CardSeguidores></CardSeguidores>
                </View>
            </View>
            <View style={styles.rodape}>
                <Botao />
            </View>
        </View>
    )
}