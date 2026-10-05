import Header from "@/components/Header";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet, Switch, Text,
    TouchableOpacity,
    View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ListagemBrinquedos () {
    
    const [ativo, setAtivo] = useState(true);
    const insets = useSafeAreaInsets();         //tamanho exato que as barras ocupam no aparelho
     
    return (
        <View style={styles.container}>

            {/* HEADER */}
            <Header tipo="back" titulo="Brinquedo" paginaAnterior={"/home"} />               

            {/* TÍTULO TELA */}
            <View style={styles.tituloTela}>
                
                <View style={styles.greeting}>
                    <Text style={styles.greetingTitle}>
                        {/* adicionar os comandos para ficar dinâmico */}
                        Brinquedos Cadastrados 
                    </Text>

                    <Text style={styles.greetingSubtitle}>
                        {/* adicionar os comandos para ficar dinâmico */}
                        Toque em um brinquedo para visualizar. Use o interruptor para ativar/desativar.  
                    </Text>
                </View>
            </View>

            {/* INICIO DA LISTA */}

            <ScrollView
                style={styles.scroll}
                showsVerticalScrollIndicator = {false}
                contentContainerStyle = {styles.scrollContent}
            >
                {/* BRINQUEDO 1 */}
                <View style={styles.serviceCard}>

                    <Image 
                        source={require("@/assets/triciclo_eletrico_rosa.jpg")}
                        style={styles.serviceImage}
                    />

                    <View style={styles.serviceInfo}>
                        <Text style={styles.serviceName}>
                            Triciclo Elétrico Rosa
                        </Text>

                        <Text style={styles.serviceDescription}>
                            R$ 1,20/min - locação R$ 150,00
                        </Text>
                    </View>

                    <View style={styles.serviceAction}>

                        <TouchableOpacity onPress={() => console.log("Editar brinquedo")}>
                            <Ionicons 
                                name="pencil" 
                                size={20} 
                                color="#a09b9b" 
                            />
                        </TouchableOpacity>

                        <Switch
                            value={ativo}
                            onValueChange={setAtivo}
                            trackColor={{
                                false: "#D1D5DB",
                                true: "#009B6A",
                            }}
                            thumbColor="#FFFFFF"
                        />

                    </View>

                    
                </View>

                {/* BRINQUEDO 2 */}
                <View style={styles.serviceCard}>

                    <Image 
                        source={require("@/assets/castelo_pula_pula.jpg")}
                        style={styles.serviceImage}
                    />

                    <View style={styles.serviceInfo}>
                        <Text style={styles.serviceName}>
                            Castelo Pula-Pula
                        </Text>

                        <Text style={styles.serviceDescription}>
                            R$ 1,20/min - locação R$ 300,00
                        </Text>
                    </View>

                    <View style={styles.serviceAction}>

                        <TouchableOpacity onPress={() => console.log("Editar brinquedo")}>
                            <Ionicons 
                                name="pencil" 
                                size={20} 
                                color="#a09b9b" 
                            />
                        </TouchableOpacity>

                        <Switch
                            value={ativo}
                            onValueChange={setAtivo}
                            trackColor={{
                                false: "#D1D5DB",
                                true: "#009B6A",
                            }}
                            thumbColor="#FFFFFF"
                        />

                    </View>
                </View>

                {/* BRINQUEDO 3 */}
                <View style={styles.serviceCard}>

                    <Image 
                        source={require("@/assets/pula-pula.jpg")}
                        style={styles.serviceImage}
                    />

                    <View style={styles.serviceInfo}>
                        <Text style={styles.serviceName}>
                            Cama Elástica
                        </Text>

                        <Text style={styles.serviceDescription}>
                            R$ 1,00/min - locação R$ 150,00
                        </Text>
                    </View>

                    <View style={styles.serviceAction}>

                        <TouchableOpacity onPress={() => console.log("Editar brinquedo")}>
                            <Ionicons 
                                name="pencil" 
                                size={20} 
                                color="#a09b9b" 
                            />
                        </TouchableOpacity>

                        <Switch
                            value={ativo}
                            onValueChange={setAtivo}
                            trackColor={{
                                false: "#D1D5DB",
                                true: "#009B6A",
                            }}
                            thumbColor="#FFFFFF"
                        />

                    </View>                    
                </View>

                {/* BRINQUEDO 4 */}
                <View style={styles.serviceCard}>

                    <Image 
                        source={require("@/assets/escorregador_vermelho_azul.png")}
                        style={styles.serviceImage}
                    />

                    <View style={styles.serviceInfo}>
                        <Text style={styles.serviceName}>
                            Escorregador Vermelho com Azul
                        </Text>

                        <Text style={styles.serviceDescription}>
                            R$ 1,20/min - locação R$ 150,00
                        </Text>
                    </View>

                    <View style={styles.serviceAction}>

                        <TouchableOpacity onPress={() => console.log("Editar brinquedo")}>
                            <Ionicons 
                                name="pencil" 
                                size={20} 
                                color="#a09b9b" 
                            />
                        </TouchableOpacity>

                        <Switch
                            value={ativo}
                            onValueChange={setAtivo}
                            trackColor={{
                                false: "#D1D5DB",
                                true: "#009B6A",
                            }}
                            thumbColor="#FFFFFF"
                        />

                    </View>                    
                </View>

                {/* BRINQUEDO 5 */}
                <View style={styles.serviceCard}>

                    <Image 
                        source={require("@/assets/escorregador_rosa_roxa.png")}
                        style={styles.serviceImage}
                    />

                    <View style={styles.serviceInfo}>
                        <Text style={styles.serviceName}>
                            Escorregador Rosa com Roxa
                        </Text>

                        <Text style={styles.serviceDescription}>
                            R$ 1,20/min - locação R$ 150,00
                        </Text>
                    </View>

                    <View style={styles.serviceAction}>

                        <TouchableOpacity onPress={() => console.log("Editar brinquedo")}>
                            <Ionicons 
                                name="pencil" 
                                size={20} 
                                color="#a09b9b" 
                            />
                        </TouchableOpacity>

                        <Switch
                            value={ativo}
                            onValueChange={setAtivo}
                            trackColor={{
                                false: "#D1D5DB",
                                true: "#009B6A",
                            }}
                            thumbColor="#FFFFFF"
                        />

                    </View>                    
                </View>

                {/* BRINQUEDO 6 */}
                <View style={styles.serviceCard}>

                    <Image 
                        source={require("@/assets/casinha_bolinha.png")}
                        style={styles.serviceImage}
                    />

                    <View style={styles.serviceInfo}>
                        <Text style={styles.serviceName}>
                            Casinha de Bolinha
                        </Text>

                        <Text style={styles.serviceDescription}>
                            R$ 1,20/min - locação R$ 150,00
                        </Text>
                    </View>

                    <View style={styles.serviceAction}>

                        <TouchableOpacity onPress={() => console.log("Editar brinquedo")}>
                            <Ionicons 
                                name="pencil" 
                                size={20} 
                                color="#a09b9b" 
                            />
                        </TouchableOpacity>

                        <Switch
                            value={ativo}
                            onValueChange={setAtivo}
                            trackColor={{
                                false: "#D1D5DB",
                                true: "#009B6A",
                            }}
                            thumbColor="#FFFFFF"
                        />

                    </View>                    
                </View>

                {/* BRINQUEDO 7 */}
                <View style={styles.serviceCard}>

                    <Image 
                        source={require("@/assets/motinha_branca.png")}
                        style={styles.serviceImage}
                    />

                    <View style={styles.serviceInfo}>
                        <Text style={styles.serviceName}>
                            Motinha Elétrica Branca
                        </Text>

                        <Text style={styles.serviceDescription}>
                            R$ 1,20/min - locação R$ 150,00
                        </Text>
                    </View>

                    <View style={styles.serviceAction}>

                        <TouchableOpacity onPress={() => console.log("Editar brinquedo")}>
                            <Ionicons 
                                name="pencil" 
                                size={20} 
                                color="#a09b9b" 
                            />
                        </TouchableOpacity>

                        <Switch
                            value={ativo}
                            onValueChange={setAtivo}
                            trackColor={{
                                false: "#D1D5DB",
                                true: "#009B6A",
                            }}
                            thumbColor="#FFFFFF"
                        />

                    </View>                    
                </View>

                {/* BRINQUEDO 8 */}
                <View style={styles.serviceCard}>

                    <Image 
                        source={require("@/assets/motinha_eletrica_preta.png")}
                        style={styles.serviceImage}
                    />

                    <View style={styles.serviceInfo}>
                        <Text style={styles.serviceName}>
                            Motinha Elétrica Preta
                        </Text>

                        <Text style={styles.serviceDescription}>
                            R$ 1,20/min - locação R$ 150,00
                        </Text>
                    </View>

                    <View style={styles.serviceAction}>

                        <TouchableOpacity onPress={() => console.log("Editar brinquedo")}>
                            <Ionicons 
                                name="pencil" 
                                size={20} 
                                color="#a09b9b" 
                            />
                        </TouchableOpacity>

                        <Switch
                            value={ativo}
                            onValueChange={setAtivo}
                            trackColor={{
                                false: "#D1D5DB",
                                true: "#009B6A",
                            }}
                            thumbColor="#FFFFFF"
                        />

                    </View>                    
                </View>


            </ScrollView>

            {/* RODAPÉ */}
            <View style={[styles.footer, { paddingBottom: insets.bottom + 10 }]}>
                <TouchableOpacity style={styles.newServiceButton} onPress={() => router.push("/cadastrar_brinquedos")}>
                    <Ionicons name="add" size={24} color="#FFFFFF" />
                    <Text style={styles.newServiceText}>Novo Brinquedo</Text>
                </TouchableOpacity>
            </View>
            
                   
        </View>   
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
        paddingTop: 6,
        paddingBottom: 10,
    },

    scroll: {
       flex: 1,
    },

    //TÍTULO DA TELA

    tituloTela:{
        padding: 10,
    },

    greeting:{
        marginTop: 2,
        marginBottom: 0,
    },

    greetingTitle:{
        fontSize: 18,
        fontWeight: "700",
        color: "#172033",
    },

    greetingSubtitle:{
        fontSize: 13,
        color: "#707782",
        marginTop: 2,
    },

    //CARD LISTAGEM BRINQUEDOS

    serviceCard: {
        backgroundColor: "#FFFFFF",
        borderRadius: 14,
        minHeight: 55,
        marginBottom: 5,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        borderWidth: 1,
        borderColor: "#E5E7EB",
    },

    serviceImage: {
        width: 55,
        height: 55,
        resizeMode: "contain",
        marginRight: 8,
    },

    serviceInfo: {
        flex: 1,
    },

    serviceName: {
        fontSize: 14,
        fontWeight: "700",
        color: "#172033",
    },

    serviceDescription: {
        fontSize: 13,
        color: "#555",
        marginTop: 1,
    },

    //BOTÕES DE AÇÕES
    serviceAction: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },


    // BOTÃO

    newServiceButton: {
        height: 55,
        backgroundColor: "#4263D4",
        borderRadius: 14,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderStyle: 'dashed',
        gap: 5,
    },

    newServiceText: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "700",
    },

    // FOOTER
    footer: {
        paddingHorizontal: 14,
        paddingTop: 5,
},

})