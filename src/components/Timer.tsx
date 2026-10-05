import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

type TimerProps = {
    inicio: Date;
    duracaoMinutos: number;
};

const TAMANHO = 50;  // largura e altura do anel
const ESPESSURA = 4; // grossura do traço

function corDoTimer(minutos: number) {
    if (minutos <= 0) return "#EF5350";
    if (minutos <= 2) return "#D88920";
    return "#1BA784";
}

export default function Timer({ inicio, duracaoMinutos }: TimerProps) {
    const [agora, setAgora] = useState(new Date());

    useEffect(() => {
        const intervalo = setInterval(() => setAgora(new Date()), 1000);
        return () => clearInterval(intervalo);
    }, []);

    // Cálculo do tempo
    const totalSegundos = duracaoMinutos * 60;
    const segundosPassados = Math.max((agora.getTime() - inicio.getTime()) / 1000, 0);
    const segundosRestantes = Math.max(totalSegundos - segundosPassados, 0);
    const minutosRestantes = Math.ceil(segundosRestantes / 60);

    // Anel enche um pedaço a cada minuto completo e termina cheio
    const minutosPassados = Math.floor(segundosPassados / 60);
    const progresso = Math.min(minutosPassados / duracaoMinutos, 1); // de 0 até 1

    // Cálculo do anel
    const raio = (TAMANHO - ESPESSURA) / 2;
    const circunferencia = 2 * Math.PI * raio;
    const offset = circunferencia * (1 - progresso);

    const cor = corDoTimer(minutosRestantes);
    const texto = String(minutosRestantes).padStart(2, "0") + "m";

    return (
        <View style={styles.container}>
            <Svg width={TAMANHO} height={TAMANHO} style={styles.svg}>
                {/* Trilho de fundo */}
                <Circle
                    cx={TAMANHO / 2}
                    cy={TAMANHO / 2}
                    r={raio}
                    stroke="#E5E7EB"
                    strokeWidth={ESPESSURA}
                    fill="none"
                />

                {/* Anel de progresso */}
                {progresso > 0 && (
                    <Circle
                        cx={TAMANHO / 2}
                        cy={TAMANHO / 2}
                        r={raio}
                        stroke={cor}
                        strokeWidth={ESPESSURA}
                        fill="none"
                        strokeDasharray={circunferencia}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                    />
                )}
            </Svg>

            <Text style={[styles.texto, { color: cor }]}>{texto}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: TAMANHO,
        height: TAMANHO,
        alignItems: "center",
        justifyContent: "center",
    },
    svg: {
        position: "absolute",
        transform: [{ rotate: "-90deg" }],
    },
    texto: {
        fontSize: 12,
        fontWeight: "700",
    },
});