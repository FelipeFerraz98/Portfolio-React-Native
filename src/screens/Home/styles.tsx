import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3a3a3a',
  },
  imageContainer: {
    overflow: 'hidden',
  },
  profileImage: {
    borderWidth: 2,
    borderColor: '#007BFF',
    width: 200,
    height: 200
  },
  title: {
    fontSize: 30,
    color: '#fff'
  },
  subTitle: {
    color: '#fff',
    borderBottomWidth: 2,
    borderBottomColor: '#000'
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#007BFF',
    backgroundColor: '#007BFF',
    borderRadius: 5,
    marginHorizontal: 5,
    marginBottom: 15,
    marginTop: 15,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
  },
});