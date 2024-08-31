import { makeStyles } from '@rneui/themed';

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
    marginHorizontal: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  errorText: {
    color: "red",
    fontSize: 14,
  }
}));

export default useStyles