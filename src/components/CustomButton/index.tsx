import { Button, ButtonProps } from "@rneui/themed";
import useStyles from "./styles";

export function CustomButton(props: ButtonProps) {
  const styles = useStyles()

  return (
    <Button
      {...props}
      buttonStyle={styles.button}
    />
  )
}