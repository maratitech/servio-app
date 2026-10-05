import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

type TimerProps = {
    inicio: Date;           // quando o atendimento começou
    duracaoMinutos: number; // quanto tempo foi pago
};

function corDoText (minutos: number) {
    if (minutos <= 0) return "#E44D4D";
    if (minutos <= 2) return "#D88920";
    return "#1BA784";
}

function corDoBadge (minutos: number) {
    if (minutos <= 0) return "#FFE5E5";
    if (minutos <= 2) return "#FFF0D8";
    return "#E8EBEA";
}

function textDoBadge (minutos: number) {
    if (minutos <= 0) return "Tempo Finalizado";
    if (minutos <= 2) return "Quase Acabando";
    return "Em Andamento";
}

export default function StatusBadge({ inicio, duracaoMinutos }: TimerProps) {
    const [agora, setAgora] = useState(new Date());

    useEffect(() => {
        const intervalo = setInterval(() => setAgora(new Date()), 1000);
        return () => clearInterval(intervalo) //limpeza
    }, []);

    const segundosPassados = (agora.getTime() - inicio.getTime()) / 1000;
    const segundosRestantes = duracaoMinutos * 60 - segundosPassados;
    const minutosRestantes = Math.ceil(segundosRestantes / 60);

    const corText = corDoText(minutosRestantes);
    const corBadge = corDoBadge (minutosRestantes); 
    const textoBadge = textDoBadge (minutosRestantes);

    return (
        <View style={[styles.statusBadge, {backgroundColor: corBadge}]}>
            <Text style={[styles.statusText, {color: corText}]}>{textoBadge}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    // STATUS

    statusBadge: {
        alignSelf: "flex-start",
        paddingHorizontal: 7,
        paddingVertical: 2,
        borderRadius: 8,
        marginTop: 6,
    },

    statusText: {
        fontSize: 11,
        fontWeight: "700",
    },

});
