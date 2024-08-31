import { makeStyles } from '@rneui/themed';

const useStyles = makeStyles(() => ({
  container: {
    alignItems: "center",
    marginVertical: 16
  },
  title: {
    fontSize: 18,
    fontWeight: "bold"
  },
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backButton: {
    padding: 4,
  },
  transparentButton: {
    width: 32
  }
}));

export default useStyles