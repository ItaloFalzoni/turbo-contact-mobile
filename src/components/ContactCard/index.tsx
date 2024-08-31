import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { ListItem, Icon } from '@rneui/themed';

import { Contact } from "../../interfaces/contact";

import { ContactBottomSheet } from "../ContactBottomSheet";
import useStyles from "./styles";

export function ContactCard(data: Contact) {
  const styles = useStyles()

  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => setIsVisible(true)}
        style={styles.container}
      >
        <ListItem containerStyle={styles.listItemContainer}>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>{data.name}</ListItem.Title>
            <ListItem.Subtitle style={styles.subtitle}>{data.email}</ListItem.Subtitle>
          </ListItem.Content>

          <Icon name="chevron-right" />
        </ListItem>
      </TouchableOpacity>

      <ContactBottomSheet
        data={data}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
    </>
  )
}