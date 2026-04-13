import { View, Text } from "react-native";
import { styles } from "./CardStyles";

export function CardDetalhamento(){
    let nome = "Leandro"
    let bio = "Rapper"

    return(
        <View>

            <Text style={styles.textoCard}>
                {`${nome},\n${bio}`}
            </Text>

        </View>
    )
}