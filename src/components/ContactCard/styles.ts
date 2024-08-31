import { makeStyles } from '@rneui/themed';

const useStyles = makeStyles(() => ({
  container: {
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  listItemContainer: {
    borderRadius: 8
  },
  title: {
    fontWeight: "bold",
  },
  subtitle: {
    color: "gray",
    marginTop: 4
  },
}));

export default useStyles