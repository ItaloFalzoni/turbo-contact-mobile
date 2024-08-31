import { useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { Button, Icon } from "@rneui/themed";

import { useContacts } from "../../hooks/useContacts";

import { ContactCard } from "../../components/ContactCard";
import { Separator } from "../../components/Separator";

import useStyles from "./styles";

function Contacts({ navigation }: { navigation: NavigationProp<any> }): React.JSX.Element {
  const styles = useStyles()

  const { contacts, getContacts } = useContacts()

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", getContacts)
    return unsubscribe
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.userBadge}>
        <Text style={styles.greetings}>
          Bem vindo, Usuário
        </Text>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Settings")}
        >
          <Icon name="user" size={40} type="feather" />
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>
          Contatos
        </Text>

        <Button
          title="Novo"
          icon={{ name: "add", color: "#FFF" }}
          iconPosition="right"
          buttonStyle={styles.addButton}
          onPress={() => navigation.navigate("AddContact")}
        />
      </View>

      <FlatList
        data={contacts}
        keyExtractor={(item, index) => item?._id || index.toString()}
        ItemSeparatorComponent={() => <Separator />}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => <ContactCard {...item} />}
      />
    </View>
  )
}

export default Contacts