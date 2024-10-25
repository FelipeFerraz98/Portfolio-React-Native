import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3a3a3a',
        paddingTop: 20,
      },
      list: {
        paddingHorizontal: 10,
      },
      card: {
        backgroundColor: '#282c34',
        borderRadius: 8,
        padding: 20,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 350,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
      },
      cardTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: '#fff',
        marginBottom: 10,
        textAlign: 'center',
      },
      cardDetail: {
        fontSize: 14,
        color: '#c9d1d9',
        textAlign: 'center',
        marginTop: 10,
      },
      image: {
        width: '90%',
        height: 150,
        resizeMode: 'contain',
        marginBottom: 10,
      },
      errorText: {
        color: 'red',
        fontSize: 18,
        textAlign: 'center',
      },
});

  