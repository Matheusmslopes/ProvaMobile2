import { Text, View, TextInput } from "react-native";;
import { Link } from "@react-navigation/native";
import { useState } from "react";
import styles from "./styles";

export default function ForgetPasswordPage() {

    let [email, onchangeEmail] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Esqueceu a senha?</Text>
            <View>
                <Text style={styles.txt}>Só precisamos do seu email cadastrado</Text>
                <TextInput style={styles.input}
                    value={email}
                    placeholder="email"
                    onChangeText={onchangeEmail}
                />
            </View>
            <Link
                style={styles.signin}
                to={{ screen: 'Página de login' }}>
                Resetar a senha
            </Link>
            <View>
                <Text style={styles.txt}>Ainda não tem uma conta?</Text>
                <Link
                    style={styles.signup}
                    to={{ screen: 'Página de login' }}>
                    Registre-se!
                </Link>
            </View>

        </View>
    );
}

