// App.js
import React from 'react';
import {StyleSheet, View, Text, Dimensions, Image} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const Home = () => {
  
  const tianguaCoords = {
    latitude: -3.7327,
    longitude: -40.9917,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  
  const pontosDeInteresse = [
    {
      id: 1,
      nome: "Centro de Tianguá",
      descricao: "Área central da cidade",
      coordenadas: {
        latitude: -3.7327,
        longitude: -40.9917
      },
      imagem: require('../../assets/images/logo_verde.png')

    },
    {
      id: 2,
      nome: "Parque Municipal",
      descricao: "Área de lazer",
      coordenadas: {
        latitude: -3.7350,
        longitude: -40.9950
      },

    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo a Tianguá-CE</Text>
      
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={tianguaCoords}
          showsUserLocation={true}
          showsMyLocationButton={true}
          mapPadding={{top: 0, right: 0, bottom: 50, left: 0}}>
          
          {pontosDeInteresse.map((ponto) => (
            <Marker
              key={ponto.id}
              coordinate={ponto.coordenadas}
              title={ponto.nome}
              description={ponto.descricao}>
              <Image 
                source={ponto.imagem} 
                style={styles.customMarker}
                resizeMode="contain"
              />
            </Marker>
          ))}
          
          <Marker
            coordinate={tianguaCoords}
            title="Tianguá"
            description="Cidade no Ceará, Brasil">
            <View style={styles.defaultMarker}>
              <View style={styles.markerPin} />
            </View>
          </Marker>
        </MapView>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>Mapa de Tianguá-CE</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    
  },
  mapContainer: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 10,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  footer: {
    padding: 10,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  customMarker: {
    width: 40,
    height: 40,
  },
  defaultMarker: {
    alignItems: 'center',
  },
  markerPin: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'red',
    borderWidth: 2,
    borderColor: 'white',
  },
});

export default Home;