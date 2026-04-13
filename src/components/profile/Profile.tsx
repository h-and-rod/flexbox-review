import { View, Image, Text } from "react-native";

export function Profile() {

    return (
        <View>

            <Image
                source={{ uri: 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png' }}
                style={{ height: 200, width: 200 }}
            />
    
        </View>
    )
}