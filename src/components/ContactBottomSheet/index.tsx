import { Text, View } from "react-native";
import { BottomSheet } from "@rneui/themed";

import { Contact } from "../../interfaces/contact";

import { FlatButton } from "../FlatButton";
import useStyles from "./styles";

interface Props {
  data: Contact;
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
}

export function ContactBottomSheet({ data, isVisible, setIsVisible }: Props) {
  const styles = useStyles()

  return (
    <BottomSheet
      onBackdropPress={() => setIsVisible(false)}
      isVisible={isVisible}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.transparentButton} />

          <Text style={styles.title}>Detalhes</Text>

          <FlatButton
            onPress={() => setIsVisible(false)}
            iconName="close"
          />
        </View>

        <Text>{data.name}</Text>
        <Text>{data.email}</Text>
        <Text>{data.phone}</Text>
      </View>
    </BottomSheet>
  )
}