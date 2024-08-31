import { makeStyles } from '@rneui/themed';

const useStyles = makeStyles(() => ({
  container: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "gray",
    flexDirection: "row",
  },
  label: {
    color: "gray",
    marginLeft: 12,
    marginTop: 12,
  },
  textInput: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  column: {
    flexDirection: "column",
    flex: 1,
  }
}));

export default useStyles