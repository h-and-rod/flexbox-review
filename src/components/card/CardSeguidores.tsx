import { View, Text } from "react-native";
import { styles } from "./CardStyles";

export function CardSeguidores() {
    let titulo = "Seguidores"
    let numSeguidores = 220

    return (
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.textoCard}>
                    {`${titulo}`}
                </Text>
                <Text style={styles.texto}>
                    {numSeguidores}
                </Text>
            </View>
        </View>
    )
}