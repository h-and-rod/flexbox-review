import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		alignItems: 'center',
	},
	botao: {
		minWidth: 180,
		paddingVertical: 14,
		paddingHorizontal: 24,
		borderRadius: 10,
		borderWidth: 3,
		borderColor: '#000',
		alignItems: 'center',
		justifyContent: 'center',
	},
	botaoInativo: {
		backgroundColor: '#fff',
	},
	botaoAtivo: {
		backgroundColor: '#000',
	},
	botaoPressionado: {
		opacity: 0.75,
	},
	texto: {
		fontSize: 20,
		fontWeight: 'bold',
		textTransform: 'capitalize',
	},
	textoInativo: {
		color: '#000',
	},
	textoAtivo: {
		color: '#fff',
	},
});
