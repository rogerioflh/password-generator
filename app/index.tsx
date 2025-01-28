import { useState } from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native'
import Slider from '@react-native-community/slider'
import { ModalPassword } from './src/components/modal'

let charset = "abdcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789Çç+=-_{}[]^~´`:;><.,/?|\!@#$%¨&*()ªº°"

export default function App(){
/*cria um estado mutavel que permite o usuário atulizar alguns 
valores na pagina sem que ele precise dar um refresh*/
/* size = nome do useState
seteSize = ação que pode alterar o valor do useState 
entre () esta o valor do useState*/
    const [size, seteSize] = useState(10)
    const [passwordValue, setPasswordValue] = useState("")
    const [modalVisible, setModalVisible] = useState(false)

    function generatePassword(){
        let password = "";
        for(let i=0, n = charset.length; i < size; i++){
            password += charset.charAt(Math.floor(Math.random() * n ))
        }
    
        setPasswordValue(password)
        setModalVisible(true);
    }

    return(
        <View style={styles.container}>
            <Image source={require("./src/assets/logo.png")}
            style={styles.logo}/>
        
            <Text style={styles.title}> {size} caracteres </Text>

            <View style={styles.area}>
                <Slider style={{height: 50}}
                minimumValue={6}
                maximumValue={20}
                minimumTrackTintColor='#000'
                maximumTrackTintColor='#FF0000'
                thumbTintColor= '#392de9'
                value={size}
                onValueChange={(value) => seteSize(Number(value.toFixed(0)))} />
            </View>

            <TouchableOpacity style={styles.button} onPress={generatePassword}>
                <Text style={styles.buttonText}> Gerar Senha </Text>
            </TouchableOpacity>

            <Modal visible={modalVisible} animationType='fade' transparent={true}>
                <ModalPassword/>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#F3F3FF",
        justifyContent: 'center', 
        alignItems: 'center'
    },
    logo:{
        marginBottom: 60
    },
    area: {
        marginTop: 14,
        marginBottom: 14,
        width: "80%",
        backgroundColor: "#FFF",
        borderRadius: 8,
        padding: 6,

    },
    button: {
        backgroundColor: '#392de9',
        width: '80%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginBottom: 18,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})
