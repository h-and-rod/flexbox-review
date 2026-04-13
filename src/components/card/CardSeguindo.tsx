import { View, Text } from "react-native";
import { styles } from "./CardStyles";

export function CardSeguindo() {
    let titulo = "Seguindo"
    let numSeguindo = 120

    return (
        <View style={{ flex: 1, alignItems: 'flex-start' }}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.textoCard}>
                    {`${titulo}`}
                </Text>
                <Text style={styles.texto}>
                    {numSeguindo}
                </Text>
            </View>
        </View>
    )
}