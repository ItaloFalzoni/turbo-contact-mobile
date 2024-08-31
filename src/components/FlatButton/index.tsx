import { TouchableOpacity } from "react-native";
import { Icon, IconProps } from "@rneui/themed";

import useStyles from "./styles";

interface Props {
  onPress: () => void
  iconName: IconProps['name']
}

export function FlatButton({ onPress, iconName }: Props) {
  const styles = useStyles()

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={onPress}
    >
      <Icon name={iconName} size={24} type="feather" />
    </TouchableOpacity>
  )
}