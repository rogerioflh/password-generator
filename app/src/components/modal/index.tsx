import { View, Text, StyleSheet, TouchableOpacity, Pressable, TouchableHighlight} from "react-native"

export function ModalPassword(){   
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}> Senha gerada </Text>
            
                <Pressable style={styles.innerPassword}>
                    <Text style={styles.text}></Text> 
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}> Voltar </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}> Salvar Senha </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        backgroundColor: "#FFF",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 24,
    },
    innerPassword: {
        backgroundColor: "0e0e0e",
        width: '90%',
        paddingTop: 14,
        paddingBottom: 14,
        borderRadius: 8
    },
    text: {
        color: "#FFF",
        textAlign: "center"
    },
    buttonArea: {

    },
    button: {

    },
    buttonText: {
        
    }
})