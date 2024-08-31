import { View } from "react-native";

export function Separator({ full = false }) {
  return (
    <View style={[{ margin: 4 }, full && { flex: 1 }]} />
  )
}