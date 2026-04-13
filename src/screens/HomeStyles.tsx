import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 3,
    },
    perfil: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        paddingTop: 24,
    },
    cardsLinha: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 24,
    },
    cardsColuna: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    rodape: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 24,
    }
})