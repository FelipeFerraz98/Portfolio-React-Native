import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#232323',
  },
  imageContainer: {
    overflow: 'hidden',
  },
  profileImage: {
    borderWidth: 2,
    borderColor: '#fff',
    width: 80,
    height: 80
  },
  title: {
    fontSize: 30,
  },
  subTitle: {
    color: '#232323',
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
    borderColor: '#fff',
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