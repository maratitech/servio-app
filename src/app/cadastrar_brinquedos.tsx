import Header from "@/components/Header";
import { Input } from "@/components/Input";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function MsgSalvar() {
    Alert.alert("Sucesso", "Novo brinquedo salvo com sucesso!");
    return router.push("/listagem_brinquedos");
}

export default function CadastrarBrinquedos () {

    const CORES = [
    { nome: "Azul", hex: "#3B82F6" },
    { nome: "Vermelho", hex: "#EF4444" },
    { nome: "Amarelo", hex: "#FACC15" },
    { nome: "Verde", hex: "#22C55E" },
    { nome: "Rosa", hex: "#EC4899" },
    { nome: "Laranja", hex: "#F97316" },
    { nome: "Roxo", hex: "#8B5CF6" },
    ];

    const insets = useSafeAreaInsets();         //tamanho exato que as barras ocupam no aparelho
    const [nome, setNome] = useState("");
    const [cor, setCor] = useState<string | null>(null);
    const [idadeMin, setIdadeMin] = useState("");
    const [idadeMax, setIdadeMax] = useState("");
    const [capacidade, setCapacidade] = useState("");
    const [valorMinuto, setValorMinuto] = useState("");
    const [valorLocacao, setValorLocacao] = useState("");
     
    return (
        
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
            <Header tipo="back" titulo="Novo Brinquedo" paginaAnterior={"/listagem_brinquedos"}/> 

            <View style={styles.form}>
                {/* FOTO */}
                <TouchableOpacity style={styles.foto} onPress={() => console.log("foto")}>
                    <Ionicons name="camera" size={28} color="#4263D4" />
                    <Text style={styles.fotoTexto}>Adicionar foto do brinquedo</Text>
                </TouchableOpacity>
                
                {/* IDENTIFICAÇÃO */}
                <Text style={styles.secao}>IDENTIFICAÇÃO</Text>

                <Text style={styles.label}>Nome do brinquedo *</Text>
                <TextInput
                    style={styles.input}
                    value={nome}
                    onChangeText={setNome}
                    placeholder="Ex: Triciclo elétrico rosa"
                    placeholderTextColor="#9CA3AF"
                />

                <Text style={styles.label}>Cor predominante</Text>
                <View style={styles.chips}>
                    {CORES.map((c) => {
                        const selecionada = cor === c.nome;
                        return (
                            <TouchableOpacity
                                key={c.nome}
                                style={[styles.chip, selecionada && styles.chipSelecionado]}
                                onPress={() => setCor(c.nome)}
                            >
                                <View style={[styles.bolinha, { backgroundColor: c.hex }]} />
                                <Text style={[styles.chipTexto, selecionada && styles.chipTextoSelecionado]}>
                                    {c.nome}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>

                <Input placeholder="Capacidade Máxima (crinças)" keyboardType="number-pad"/>
                <Input placeholder="Valor por minuto (ex: 1,20)" keyboardType="number-pad"/>
                <Input placeholder="Valor por locação (ex: 150,00)" keyboardType="number-pad"/>
                <Input placeholder="Cor predominante"/>


            </View>
            
            <TouchableOpacity style={styles.newServiceButton} onPress={MsgSalvar}>
                <Ionicons name="save-outline" size={24} color="#FFFFFF" />
                <Text style={styles.newServiceText}> Salvar</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "#f0eded",
        paddingTop: 30,
    },

    scrollContent: {
        paddingHorizontal: 14,
        paddingTop: 30,
    },

    // BOTÃO

    newServiceButton: {
        height: 55,
        backgroundColor: "#4263D4",
        borderRadius: 14,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
    },

    newServiceText: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "700",
    },

    //FORM

    form: {
        gap: 5,
        margin: 15,
    },

    tituloForm: {
        padding: 10,
        fontWeight: "700",
    },

    //FOTO

    foto: {
        height: 110,
        borderRadius: 14,
        borderWidth: 1.5,
        borderStyle: "dashed",
        borderColor: "#4263D4",
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
    },

    fotoTexto: {
        color: "#4263D4",
        fontSize: 14,
        fontWeight: "700",
    },

    secao: {
        fontSize: 12,
        fontWeight: "700",
        color: "#707782",
        letterSpacing: 1,
        marginTop: 20,
        marginBottom: 4,
    },

    label: {
        fontSize: 13,
        fontWeight: "600",
        color: "#172033",
        marginTop: 10,
        marginBottom: 4,
    },

    input: {
        height: 48,
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        paddingHorizontal: 12,
        fontSize: 15,
        color: "#172033",
    },

    //botão cor predominante

    chips: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
    },
    chip: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        backgroundColor: "#FFFFFF",
    },

    chipSelecionado: {
        backgroundColor: "#4263D4",
        borderColor: "#4263D4",
    },

    bolinha: {
        width: 12,
        height: 12,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#FFFFFF",
    },

    chipTexto: {
        fontSize: 13,
        fontWeight: "600",
        color: "#172033",
    },

    chipTextoSelecionado: {
        color: "#FFFFFF",
    },

})