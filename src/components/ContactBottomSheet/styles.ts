import { Dimensions } from 'react-native';
import { makeStyles } from '@rneui/themed';

const { height } = Dimensions.get('window')

const useStyles = makeStyles(() => ({
  container: {
    padding: 16,
    minHeight: height / 3 * 2,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16
  },
  title: {
    fontWeight: "bold",
    fontSize: 16
  },
  transparentButton: {
    width: 32
  }
}));

export default useStyles