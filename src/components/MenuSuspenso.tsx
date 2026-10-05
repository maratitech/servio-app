import { Ionicons } from "@expo/vector-icons";
import { Href, router } from "expo-router";
import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Fora do componente: é fixo, não precisa ser recriado a cada renderização
const ITENS_MENU = [
    { icone: "shapes", texto: "Cadastrar brinquedos" },
    { icone: "bag-handle", texto: "Cadastrar pacotes" },
    { icone: "people", texto: "Cadastrar usuários" },
    { icone: "settings", texto: "Configurações gerais" },
] as const;

export default function MenuSuspenso() {
    const [aberto, setAberto] = useState(false);

    function fecharENavegar(rota: Href) {
        setAberto(false);
        setTimeout(() => router.push(rota), 250);
    }
    

    function escolher(texto: string) {
        switch(texto) {
            case "Cadastrar brinquedos":                    
                fecharENavegar("/listagem_brinquedos");
                break;
            case "Cadastrar pacotes":
                fecharENavegar("/home");
                break;
            case "Cadastrar usuários":
                fecharENavegar("/home");
                break;
            case "Configurações gerais":
                fecharENavegar("/home");
                break;
        }
    }

    function sair() {
        fecharENavegar("/");
    }

    return (
        <>
            {/* Botão dos três pontinhos */}
            <TouchableOpacity onPress={() => setAberto(true)} style={styles.botao}>
                <Ionicons name="ellipsis-vertical" size={22} color="#FFFFFF" />
            </TouchableOpacity>

            {/* Menu flutuante */}
            <Modal
                visible={aberto}
                transparent
                animationType="fade"
                onRequestClose={() => setAberto(false)}
            >
                <Pressable style={styles.overlay} onPress={() => setAberto(false)}>
                    <View style={styles.menu}>
                        {ITENS_MENU.map((item) => (
                            <TouchableOpacity
                                key={item.texto}
                                style={styles.item}
                                onPress={() => escolher(item.texto)}
                            >
                                <Ionicons name={item.icone} size={18} color="#6B7280" />
                                <Text style={styles.itemTexto}>{item.texto}</Text>
                            </TouchableOpacity>
                        ))}

                        <View style={styles.separador} />

                        <TouchableOpacity style={styles.item} onPress={sair}>
                            <Ionicons name="log-out-outline" size={18} color="#E53935" />
                            <Text style={[styles.itemTexto, { color: "#E53935" }]}>Sair</Text>
                        </TouchableOpacity>
                    </View>
                </Pressable>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    botao: {
        width: 34,
        height: 34,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
    },
    overlay: {
        flex: 1,
    },
    menu: {
        position: "absolute",
        top: 20,
        right: 3,
        width: 230,
        backgroundColor: "#FFFFFF",
        borderRadius: 14,
        paddingVertical: 6,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 8,
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    itemTexto: {
        fontSize: 15,
        fontWeight: "600",
        color: "#1F2937",
    },
    separador: {
        height: 1,
        backgroundColor: "#E5E7EB",
        marginVertical: 4,
        marginHorizontal: 12,
    },
});