import { StatusBar, Text, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";

import useMainStyles from "../../styles";
import useStyles from "./styles";

import { FlatButton } from "../FlatButton";

interface Props {
  title: string,
  navigation: NavigationProp<any>
}

export function Header({ title, navigation }: Props) {
  const styles = useStyles()
  const mainStyles = useMainStyles()

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={mainStyles.row}>
        <View style={styles.row}>
          <FlatButton
            iconName="arrow-left"
            onPress={() => navigation.goBack()}
          />

          <Text style={styles.title}>
            {title}
          </Text>

          <View style={styles.transparentButton} />
        </View>
      </View>
    </View>
  )
}