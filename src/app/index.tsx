import { Link, router } from "expo-router"
import { useState } from "react"
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native"

import { Button } from "@/components/Button"
import { Input } from "@/components/Input"

export default function Index() {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")


    function handleSignIn() {
        if(!email.trim() || !password.trim()) {
            return Alert.alert("Entrar", "Preencha e-mail e senha para continuar")
        } else {
            return router.push("/home")
        }
    }
    
    return(
        <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.select({ios: "padding", android: "height" })}>
            <ScrollView contentContainerStyle={ {flexGrow: 1}} keyboardShouldPersistTaps="handled">
                <View style={styles.conteiner}>
                    <Image
                        source={require("@/assets/logo_servio.png")}
                        style={styles.illustration}
                    />

                    <Text style={styles.subtitulo}>Entre com seu usuário e senha para continuar</Text>
                    
                    <View style={styles.form}>
                        <Input placeholder="E-mail" keyboardType="email-address" onChangeText={setEmail} />

                        <Input placeholder="Senha" secureTextEntry onChangeText={setPassword}/>

                        <Button 
                            label="Entrar"
                            onPress={handleSignIn} 
                        />
                    </View>

                    <Text style={styles.footerText}>
                        Não tem uma conta?
                        <Link href="/signup" style={styles.footerLink}> Cadastre-se aqui.</Link>
                    </Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: "#FDFDFD",
        padding: 28,
    },
    subtitulo: {
        textAlign: "center",
    },
    illustration: {
        width: 200,
        height: 200,
        alignSelf: "center", //centraliza a imagem no centro
        marginTop: 35,
    },
    form: {
        marginTop: 24,
        gap: 12,
    },
    footerText: {
        textAlign: "center",
        marginTop: 26,
        color: "#585860",
    },
    footerLink:{
        color: "#0a28aa",
        fontWeight: 700,
    },
})