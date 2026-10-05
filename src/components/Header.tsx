import { Ionicons } from "@expo/vector-icons";
import { Href, router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MenuSuspenso from "./MenuSuspenso";

type HeaderProps = {
    tipo?: "main" | "back";
    titulo?: string;
    paginaAnterior?: Href;
};

export default function Header({ tipo = "main", titulo = "Servio", paginaAnterior = "/home"}: HeaderProps) {
    return (
        <View style={styles.header}>
            <View style={styles.esquerda}>
                {tipo === "main" ? (
                    <Image
                        source={require("@/assets/logo_servio_sem_nome.png")}
                        style={styles.logo}
                    />
                ) : (
                    <TouchableOpacity style={styles.voltar} onPress={() => router.push(paginaAnterior)}>
                        <Ionicons 
                            name="arrow-back-outline" 
                            size={25} 
                            color="#FFFFFF" 
                            />
                    </TouchableOpacity>
                )}

                <Text style={styles.titulo}>{titulo}</Text>
            </View>

            {tipo === "main" ? (
                <MenuSuspenso/>
            ) : (
                ""
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    //HEADER

    voltarTela:{
        paddingRight: 5,
    },
   
    header: {
        height:50,
        width: "100%",
        backgroundColor: "#4263D4",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
    },

    esquerda: {
        flexDirection: "row",
        alignItems: "center",
    },

    logo:{
        width: 35,
        height: 35,
        marginRight: 8,
    },

    voltar: {
        paddingRight: 5,
    },

    titulo: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "700",
    },
})