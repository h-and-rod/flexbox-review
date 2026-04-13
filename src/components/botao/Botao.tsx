import { useState } from "react";
import { Pressable, Text, View } from "react-native";

import { styles } from "./BotaoStyles";

export function Botao() {
	const [seguindo, setSeguindo] = useState(true);

	function alternarEstado() {
		setSeguindo((estadoAtual) => !estadoAtual);
	}

	return (
		<View style={styles.container}>
			<Pressable
				onPress={alternarEstado}
				style={({ pressed }) => [
					styles.botao,
					seguindo ? styles.botaoAtivo : styles.botaoInativo,
					pressed && styles.botaoPressionado,
				]}
			>
				<Text style={[styles.texto, seguindo ? styles.textoAtivo : styles.textoInativo]}>
					{seguindo ? "seguindo" : "Seguir"}
				</Text>
			</Pressable>
		</View>
	);
}
