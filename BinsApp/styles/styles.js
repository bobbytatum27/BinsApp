import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  center: {
    flex: 1,
    backgroundColor: '#261136',
    padding: 25,
  },
  title: {
    fontSize: 20,
    marginBottom: 16
  },
  header: {
    fontSize: 60,
    textAlign: 'center',
    color: 'white',
    marginTop: 100,
  },
  intro: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    margin: 15
  },
  intro3: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 150,
  },
  box: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 15,
  },
  sectionHeader: {
    color: '#AAB5E0',
    fontSize: 25,
    marginLeft: 15,
  },
  menuFilter: {
    color: 'white',
    fontSize: 10,
    marginLeft: 15,
  },
  button: {
   alignItems: 'center',
   backgroundColor: '#7B1FA2',
   padding: 10,
   marginTop: 15,
   marginLeft: 15,
   marginRight: 15,
 },
});
