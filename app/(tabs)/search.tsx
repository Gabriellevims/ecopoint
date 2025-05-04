import React from "react";
import { View, Image, StyleSheet, SafeAreaView, TouchableOpacity, Text, Dimensions, ScrollView } from "react-native";
import { useRouter, Slot } from 'expo-router';
import Svg, { Path } from 'react-native-svg';
const { width } = Dimensions.get('window');

const Search = () => {
    const router = useRouter();


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <Text style={styles.text_tilte}>O que você deseja?</Text>
                </View>
                <View style={styles.campos}>
                    <TouchableOpacity onPress={() => router.push('/ecopoints')}>
                        <View style={styles.quadrado}>
                            <Svg width={50} height={50} viewBox="0 0 24 24">
                                <Path fill="#000" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39M11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7" />
                            </Svg>
                            <Text style={styles.texto}>Pontos de coleta  EcoPoint</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => router.push('/cartime')}>
                        <View style={styles.quadrado}>
                            <Svg width={50} height={50} viewBox="0 0 24 24">
                                <Path fill="#000" d="M1 12.5v5a1 1 0 0 0 1 1h1a3 3 0 0 0 6 0h6a3 3 0 0 0 6 0h1a1 1 0 0 0 1-1v-12a3 3 0 0 0-3-3h-9a3 3 0 0 0-3 3v2H6a3 3 0 0 0-2.4 1.2l-2.4 3.2a.6.6 0 0 0-.07.14l-.06.11a1 1 0 0 0-.07.35m16 6a1 1 0 1 1 1 1a1 1 0 0 1-1-1m-7-13a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v11h-.78a3 3 0 0 0-4.44 0H10Zm-2 6H4l1.2-1.6a1 1 0 0 1 .8-.4h2Zm-3 7a1 1 0 1 1 1 1a1 1 0 0 1-1-1m-2-5h5v2.78a3 3 0 0 0-4.22.22H3Z" />
                            </Svg>
                            <Text style={styles.texto}>Horários de coleta nos bairros</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.campos}>
                    <TouchableOpacity onPress={() => router.push('/companies')}>
                        <View style={styles.quadrado}>
                            <Svg width={100} height={60} viewBox="0 0 24 24">
                                <Path fill="#000" d="M18 4.48a8.45 8.45 0 0 0-12 12l5.27 5.28a1 1 0 0 0 1.42 0L18 16.43a8.45 8.45 0 0 0 0-11.95M16.57 15L12 19.59L7.43 15a6.46 6.46 0 1 1 9.14 0M9 7.41a4.32 4.32 0 0 0 0 6.1a4.31 4.31 0 0 0 7.36-3a4.24 4.24 0 0 0-1.26-3.05A4.3 4.3 0 0 0 9 7.41m4.69 4.68a2.33 2.33 0 1 1 .67-1.63a2.33 2.33 0 0 1-.72 1.63Z" />
                            </Svg>
                            <Text style={styles.texto}>Pontos de Coleta empresas</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => router.push('/tips')}>
                        <View style={styles.quadrado}>
                            <Svg width={80} height={58} viewBox="0 0 24 24" style={{ marginTop: -20, marginBottom: 18 }}>
                                <Path fill="#000" d="M13 11H7a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m4-4H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2m2-5H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h11.59l3.7 3.71A1 1 0 0 0 21 22a.84.84 0 0 0 .38-.08A1 1 0 0 0 22 21V5a3 3 0 0 0-3-3m1 16.59l-2.29-2.3A1 1 0 0 0 17 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z" />
                            </Svg>
                            <Text style={styles.texto}> Dicas </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#01744E",
    },
    campos: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 4,
    },
    quadrado: {
        width: width * 0.4,
        height: width * 0.44,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        margin: 8,
    },
    text_tilte: {
        fontSize: 31,
        fontWeight: "bold",
        color: "#fff",
        padding: 25,
        marginBottom: 25,
        textAlign: "center",
    },
    texto: {
        fontSize: 20,
        fontFamily: "Pacifico",
        textAlign: "center",
    },
});