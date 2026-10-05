import { StyleSheet, TextInput, TextInputProps } from "react-native"

export function Input({...rest}: TextInputProps) { //maneira que faz o componente reconhecer toda propriedade
    return (
        <TextInput style={styles.input} {...rest} />
    )
}

const styles = StyleSheet.create ({
    input: {
        width: "100%",
        height: 48,
        borderWidth: 2,
        borderColor: "#DCDCDC",
        borderRadius: 8,
        fontSize: 16,
        paddingLeft: 12,
    },
})