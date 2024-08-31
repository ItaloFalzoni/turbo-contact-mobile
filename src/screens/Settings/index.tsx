import { View } from "react-native";
import { NavigationProp } from "@react-navigation/native";

import { CustomButton } from "../../components/CustomButton";
import { Header } from "../../components/Header";

import useStyles from "./styles";

function Settings({ navigation }: { navigation: NavigationProp<any> }): JSX.Element {
  const styles = useStyles()

  return (
    <View style={styles.container}>
      <Header title="Configurações" navigation={navigation} />

      <View style={styles.content}>
        <CustomButton
          title="Logout"
          onPress={() => navigation.navigate('Signin')}
        />
      </View>
    </View>
  )
}

export default Settings