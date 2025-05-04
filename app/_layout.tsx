
import React from "react";
import { View, Image, StyleSheet, SafeAreaView, TouchableOpacity, Text } from "react-native";
import { useRouter, Slot } from 'expo-router';
import Svg, { Path } from "react-native-svg";

const Layout = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.push('/home')}>
                    <Image
                        source={require("../assets/images/logo_branca.png")}
                        style={styles.logo}
                    ></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push('/profile/perfil')}>
                    <Image
                        source={require("../assets/images/foto_de_perfil.png")}
                        style={styles.logo}
                    ></Image>
                </TouchableOpacity>
            </View>

            {/* Linha branca */}
            <View style={styles.separator} />

            {/* Conteúdo principal */}
            <View style={styles.content}>
                {/* Conteúdo do app */}
                <Slot />
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <View style={styles.columnfooter}>
                    <TouchableOpacity onPress={() => router.push('/home')}>
                        <Svg width={38} height={38} viewBox="0 0 24 24"> 
                            <Path fill="#fff" d="m20 8l-6-5.26a3 3 0 0 0-4 0L4 8a3 3 0 0 0-1 2.26V19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-8.75A3 3 0 0 0 20 8m-6 12h-4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Zm5-1a1 1 0 0 1-1 1h-2v-5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v5H6a1 1 0 0 1-1-1v-8.75a1 1 0 0 1 .34-.75l6-5.25a1 1 0 0 1 1.32 0l6 5.25a1 1 0 0 1 .34.75Z" />
                        </Svg>
                    </TouchableOpacity>
                    <Text style={styles.fonte}>Casa</Text>
                </View>

                <View style={styles.columnfooter}>
                    <TouchableOpacity onPress={() => router.push('/search')}>
                        <Svg width={38} height={38} viewBox="0 0 24 24">
                            <Path fill="#fff" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39M11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7" />
                        </Svg>
                    </TouchableOpacity>
                    <Text style={styles.fonte}>Buscar</Text>
                </View>

                <View style={styles.columnfooter}>
                    <TouchableOpacity onPress={() => router.push('/notifications')}>
                        <Svg width={38} height={38} viewBox="0 0 24 24">
                            <Path fill="#fff" d="M18 13.18V10a6 6 0 0 0-5-5.91V3a1 1 0 0 0-2 0v1.09A6 6 0 0 0 6 10v3.18A3 3 0 0 0 4 16v2a1 1 0 0 0 1 1h3.14a4 4 0 0 0 7.72 0H19a1 1 0 0 0 1-1v-2a3 3 0 0 0-2-2.82M8 10a4 4 0 0 1 8 0v3H8Zm4 10a2 2 0 0 1-1.72-1h3.44A2 2 0 0 1 12 20m6-3H6v-1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Z" />
                        </Svg>
                    </TouchableOpacity>
                    <Text style={styles.fonte}>Notificação</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Layout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#01744E",
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 25,
        backgroundColor: '#01744E',
    },
    logo: {
        width: 60,
        height: 60,
        borderRadius: 8,
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    separator: {
        height: 1,
        backgroundColor: '#fff',
        marginHorizontal: 14,
    },
    content: {
        flex: 1,
        padding: 15,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#369D6A',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderTopLeftRadius: 23,
        borderTopRightRadius: 23,
    },
    columnfooter: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 50,
    },

    fonte: {
        color: '#fff',
        fontSize: 10,
        
    },
});