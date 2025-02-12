import AsyncStorage from '@react-native-async-storage/async-storage'
import { Passwords } from '../pages/passwords';

const useStorage = () => {
    //Busca de itens Salvos
    const getItem = async (key) => {
        try{
            const passwords = await AsyncStorage.getItem(key);
            return JSON.parse(passwords) || [];
        } catch (error){
            console.log("Erro de busca", error)
            return [];
        }
    }

    //Salva intem no storage
    const saveIntem = async (key, value) =>{
        try{
           let passwords = await getItem(key);
           passwords.push(value)
           await AsyncStorage.setItem(key, JSON.stringify(passwords))
        }catch (error){
            console.log("Erro ao salvar", error)
        }
    }

    //Remove item do storage
    const removeItem = async (key, item) => {
        try{
            let passwords = await getItem(key);
            let myPasswords = passwords.filter( (password) => {
                return (password !== item)
            })

            await AsyncStorage.setItem(key, JSON.stringify(myPasswords))
            return myPasswords;
        }catch (error){
            console.log("Erro ao deletar", error)
        }
    }

    return {
        getItem,
        saveIntem,
        removeItem
    }
}

export default useStorage;