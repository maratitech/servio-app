import Header from "@/components/Header";
import StatusBadge from "@/components/StatusBadge";
import Timer from "@/components/Timer";
import { Ionicons } from "@expo/vector-icons"; //precisa instalar via terminal npx expo install @expo/vector-icons
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

// Dados de teste: calculados UMA vez, quando o arquivo é carregado
const AGORA = Date.now();
const INICIO_ATENDIMENTO_1 = new Date(AGORA - 10 * 60 * 1000);
const INICIO_ATENDIMENTO_2 = new Date(AGORA - 8 * 60 * 1000);
const INICIO_ATENDIMENTO_3 = new Date(AGORA - 10 * 60 * 1000);

export default function Home () {
      
    return (
        <View style={styles.container}>

            {/* HEADER */}
            <Header/>

            {/* SAUDAÇÃO */}
            <View style={styles.saudacao}>
                
                <View style={styles.greeting}>
                    <Text style={styles.greetingTitle}>
                        {/* adicionar os comandos para ficar dinâmico */}
                        Boa Tarde, Edmara     
                    </Text>

                    <Text style={styles.greetingSubtitle}>
                        {/* adicionar os comandos para ficar dinâmico */}
                        Sábado, 17 de agosto  · Praça do Arco · Sobral-CE  
                    </Text>
                </View>

                {/* FATURAMENTO */}
                <View style={styles.revenueCard}>

                    <View style={styles.revenueTitle}>
                        <Ionicons
                            name="wallet"
                            size={14}
                            color= "#FFFFFF"
                        />

                        <Text style={styles.revenueLabel}>
                            FATURADO HOJE
                        </Text>
                    </View>

                    <Text style={styles.revenueValue}>
                        R$ 640
                    </Text>
                </View>

                {/* RESUMO */}
                <View style={styles.summaryRow}>

                    {/* ATENDIMENTOS */}
                    <View style={styles.summaryCard}>

                        <View style={styles.summaryHeader}>
                            <Ionicons 
                                name="people"
                                size={14}
                                color= "#555"
                            />

                            <Text style={styles.summaryLabel}>
                                Atendimentos
                            </Text>
                        </View>

                        <View style={styles.summaryValueRow}>
                            <Text style={styles.summaryValue}>
                                14
                            </Text>

                            <Text style={styles.summarySmall}>
                                Hoje
                            </Text>
                        </View>

                    </View>

                    {/* EM ANDAMENTO */}
                    <View style={styles.summaryCard}>

                        <View style={styles.summaryHeader}>

                            <Ionicons
                                name="time"
                                size={14}
                                color="#D88920"
                            />

                            <Text 
                                style={[
                                    styles.summaryLabel, 
                                    {color:"#D88920"},
                                ]}
                            >
                                Em andamento
                            </Text>
                        </View>

                        <View style={styles.summaryValueRow}>

                            <Text 
                                style={[ 
                                    styles.summaryValue,
                                    { color: "#D88920" }, 
                                ]} 
                            >
                                4
                            </Text>

                            <Text style={styles.summarySmall}>
                                Ativos
                            </Text>
                        </View>

                    </View>

                </View>

                {/* TÍTULO DA LISTA */}
                <View style={styles.sectionHeader}>

                    <Text style={styles.sectionTitle}>
                        Atendimentos Ativos
                    </Text>

                    <TouchableOpacity>
                        <Text style={styles.sectionseeAll}>
                                ver todos
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
            
            <ScrollView 
                style={styles.scroll}
                showsVerticalScrollIndicator = {false}
                contentContainerStyle = {styles.scrollContent}
            >           
                {/* ATENDIMENTO 1 */}
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
                            Cliente: Sofia (cabelo cacheado)
                        </Text>

                        <Text style={styles.serviceDescription}>
                            Iniciado às 15:52 · 10 min
                        </Text>

                        <View style={styles.serviceStatus}>
                            <Text style={styles.serviceMonitor}>
                                Ana Paula
                            </Text>

                            {/* chama o componente "StatusBadge" */}
                            <StatusBadge inicio={INICIO_ATENDIMENTO_1} duracaoMinutos={10}/>      
                        </View>

                    </View>

                    {/* chama o componente "Timer" */}
                    <Timer inicio={INICIO_ATENDIMENTO_1} duracaoMinutos={10}/>      
        
                </View>

                {/* ATENDIMENTO 2 */}
                <View style={styles.serviceCard}>

                    <Image
                        source={require("@/assets/pula-pula.jpg")}
                        style={styles.serviceImage}
                    />

                    <View style={styles.serviceInfo}>

                        <Text style={styles.serviceName}>
                            Pula-Pula - Cama Elastica
                        </Text>

                        <Text style={styles.serviceDescription}>
                            Cliente: não identificado
                        </Text>

                        <Text style={styles.serviceDescription}>
                            Iniciado às 15:45 - 30 min
                        </Text>

                        <View style={styles.serviceStatus}>
                            <Text style={styles.serviceMonitor}>
                                Ana Paula
                            </Text>

                            {/* chama o componente "Timer" */}        
                            <StatusBadge inicio={INICIO_ATENDIMENTO_2} duracaoMinutos={10}/>      
                        </View>

                    </View>
                    
                    {/* chama o componente "Timer" */}
                    <Timer inicio={INICIO_ATENDIMENTO_2} duracaoMinutos={10}/>      

                </View>


                {/* ATENDIMENTO 3 */}
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
                            Cliente: João (criança de blusa azul)
                        </Text>

                        <Text style={styles.serviceDescription}>
                            Iniciado às 16:04 · 15 min
                        </Text>

                        <View style={styles.serviceStatus}>
                            <Text style={styles.serviceMonitor}>
                                Carlos Silva
                            </Text>

                            {/* chama o componente "Timer" */}
                            <StatusBadge inicio={INICIO_ATENDIMENTO_3} duracaoMinutos={14}/>      
                        </View>
        
                    </View>

                    {/* chama o componente "Timer" */}
                    <Timer inicio={INICIO_ATENDIMENTO_3} duracaoMinutos={14}/>      

                </View>
                                
            </ScrollView>

            {/* NOVO ATENDIMENTO */}
            <TouchableOpacity style={styles.newServiceButton}>

                <Ionicons
                    name="add"
                    size={24}
                    color="#FFFFFF"
                />

                <Text style={styles.newServiceText}>
                    Novo Atendimento
                </Text>
            </TouchableOpacity>

             {/* MENU INFERIOR */}
             <View style={styles.bottomMenu}>

                <TouchableOpacity style={styles.menuItemInferior}>
                    <Ionicons 
                        name="home"
                        size={22}
                        color="#4263D4"
                    />

                    <Text style={styles.menuText}>
                        Início
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItemInferior}>
                    <Ionicons
                        name="time-outline"
                        size={22}
                        color="#999"
                    />

                    <Text style={styles.menuText}>
                        Atendim.
                    </Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.menuItemInferior}>
                    <Ionicons
                        name="briefcase-outline"
                        size={22}
                        color="#999"
                    />

                    <Text style={styles.menuText}>
                        Locações
                    </Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.menuItemInferior}>
                    <Ionicons
                        name="bar-chart-outline"
                        size={22}
                        color="#999"
                    />

                    <Text style={styles.menuText}>
                        Caixa
                    </Text>
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
        padding: 14,
        paddingBottom: 30,
    },

    scroll: {
        flex: 1,
    },

    //SAUDAÇÃO

    saudacao:{
        padding: 10,
    },

    greeting:{
        marginTop: 2,
        marginBottom: 10,
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

    // FATURAMENTO
    
    revenueCard:{
        backgroundColor: "#4263d4",
        borderRadius: 16,
        padding: 16,
        height: 80,
        justifyContent: "center",
        marginBottom: 10,
    },

    revenueTitle:{
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },

    revenueLabel:{
        color: "#FFFFFF",
        fontSize: 13,
        fontWeight: "700",
        letterSpacing: 2,  //aumenta o espaçamento entre as letras
    },

    revenueValue:{
        color: "#FFFFFF",
        fontSize: 35,
        fontWeight: "900",
        marginTop: 5,
        letterSpacing: 1,
    },

    //RESUMO

    summaryRow: {
        flexDirection: "row",
        gap: 10,
        marginBottom: 12,
    },

    summaryCard: {
        flex:1,
        backgroundColor: "#FFFFFF",
        borderRadius: 14,
        padding: 12,
        height: 65,
        borderWidth: 1,
        borderColor: "#E3E5EA",
        justifyContent: "center",
    },

    summaryHeader: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },

    summaryLabel: {
        fontSize: 14,
        color: "#555",
    },

    summaryValue: {
        fontSize: 25,
        fontWeight: "800",
        color: "#172033",
    },

    summaryValueRow:{
        flexDirection: "row",
        alignItems: "baseline",
        gap: 5,
        marginTop: 1,
    },

    summarySmall: {
        fontSize: 13,
        color: "#555",
    },

    // TÍTULO DA LISTA

    sectionHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 2,
    },

    sectionTitle: {
        fontSize: 14,
        color: "#172033",
        fontWeight: "700",
       
    },

    sectionseeAll: {
        fontSize: 12,
        fontWeight: "700",
        color: "#4263D4",
    },

    //CARD ATENDIMENTO

    serviceCard: {
        backgroundColor: "#FFFFFF",
        borderRadius: 14,
        minHeight: 92,
        marginBottom: 5,
        padding: 10,
        flexDirection: "row",
        alignItems:"center",
        borderWidth: 1,
        borderColor: "#E5E7EB",
    },

    serviceImage: {
        width: 70,
        height: 70,
        resizeMode: "contain",
        marginRight: 8,
    },

    serviceInfo: {
        flex: 1,
    },

    serviceName: {
        fontSize: 13,
        fontWeight: "700",
        color: "#172033",
    },

    serviceDescription: {
        fontSize: 11,
        color: "#555",
        marginTop: 3,
    },

    serviceStatus: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },

    serviceMonitor: {
        fontSize: 11,
        color: "#4263D4",
        fontWeight: "700",
        marginTop: 3,
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

    // MENU INFERIOR

    bottomMenu: {
        height: 60,
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginBlockEnd: 40,
        paddingLeft: 25,
        paddingRight: 25,
    },

    menuItemInferior: {
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
    },

    menuText: {
        fontSize: 9,
        color: "#999",
    },

    menuTextActive: {
        fontSize: 9,
        color: "#4263D4",
        fontWeight: "700",
    },

})