import { Link } from "expo-router"
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native"

import { Button } from "@/components/Button"
import { Input } from "@/components/Input"

export default function SignUp() {
    return(
        <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === "ios" ? "padding" : "height" }>
            <ScrollView 
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.conteiner}>
                    <Image
                        source={require("@/assets/logo_servio.png")}
                        style={styles.tinyLogo}
                    />

                    <Text style={styles.titulo}>Criar uma conta</Text>
                    <Text style={styles.subtitulo}>Preencha os dados abaixo</Text>
                                        
                    <View style={styles.form}>
                        
                        <Text style={styles.tituloForm}>Dados Empresa</Text>

                        <Input placeholder="Razão Social" />
                        <Input placeholder="Nome Fantasia"/>
                        <Input placeholder="CNPJ" keyboardType="numeric" />
                        <Input placeholder="Responsável Legal"/>
                        <Input placeholder="Senha" secureTextEntry />

                        <Text style={styles.tituloForm}>Dados Gestor</Text>

                        <Input placeholder="Nome" />
                        <Input placeholder="e-mail" keyboardType="email-address"/>
                        <Input placeholder="Telefone" />
                        <Input placeholder="Senha" secureTextEntry />
                        <Input placeholder="Confirmar Senha" secureTextEntry />

                        <Button label="Salvar" />
                    </View>

                    <Text style={styles.footerText}>
                            Já possui uma conta? 
                            <Link href="/" style={styles.footerLink}> Entrar</Link>
                    </Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        //flex: 1,
        backgroundColor: "#FDFDFD",
        padding: 28,
    },
    
    tinyLogo: {
        width: 100,
        height: 100,
        alignSelf: "center", //alinha imagem no centro
    },

    titulo: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold" //deixa fonte em negrito
    },

    subtitulo: {
        textAlign: "center",
        marginTop: 10,
    },

    illustration: {
        width: "100%",
        height: 280,
        marginTop: 48,
    },

    form: {
        marginTop: 24,
        gap: 12,
    },

    footerText: {
        textAlign: "center",
        marginTop: 26,
        marginBottom: 30,
        color: "#585860",
    },

    footerLink:{
        color: "#0a28aa",
        fontWeight: 700,
    },
    
    tituloForm: {
        textAlign: "left",
        fontWeight: "bold",
        fontSize: 15,
    },

    scrollContent: {
        flexGrow: 1,
    },
})