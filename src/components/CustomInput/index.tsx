import { useRef } from "react";
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";

import { FlatButton } from "../FlatButton";
import useStyles from "./styles";

interface Props extends TextInputProps {
  label: string
  iconName?: string
  iconOnPress?: () => void
}

export function CustomInput(props: Props) {
  const styles = useStyles()
  const ref = useRef<TextInput>(null)

  return (
    <TouchableOpacity
      onPress={() => ref.current?.focus()}
      style={styles.container}
      activeOpacity={1}
    >
      <View style={styles.column}>
        <Text style={styles.label}>{props.label}</Text>

        <TextInput
          {...props}
          ref={ref}
          style={styles.textInput}
        />
      </View>

      {!!props.iconName && !!props.iconOnPress && (
        <View style={{ justifyContent: "center", alignItems: "center", marginRight: 12 }}>
          <FlatButton
            iconName={props.iconName}
            onPress={props.iconOnPress}
          />
        </View>
      )}
    </TouchableOpacity>
  )
}