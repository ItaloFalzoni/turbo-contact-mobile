import { makeStyles } from '@rneui/themed';

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
    marginTop: 16,
  },
  userBadge: {
    flexDirection: "row",
    marginBottom: 16,
    marginHorizontal: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18
  },
  greetings: {
    fontSize: 18
  },
  addButton: {
    borderRadius: 8,
  },
  list: {
    paddingHorizontal: 16,
    paddingTop: 16
  }
}));

export default useStyles