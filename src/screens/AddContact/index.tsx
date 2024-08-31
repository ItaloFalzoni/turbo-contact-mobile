import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { showMessage } from "react-native-flash-message";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-native-date-picker";

import { useContacts } from "../../hooks/useContacts";
import { Contact } from "../../interfaces/contact";

import { validateEmail, validatePhone } from "../../utils/validate";

import { CustomButton } from "../../components/CustomButton";
import { CustomInput } from "../../components/CustomInput";
import { Separator } from "../../components/Separator";
import { Header } from "../../components/Header";

import useMainStyles from "../../styles";

function AddContact({ navigation }: { navigation: NavigationProp<any> }): JSX.Element {
  const styles = useMainStyles()
  const { addContact } = useContacts()

  const [birthDate, setBirthDate] = useState<Date>(new Date("2000-01-01"))
  const [isOpenDateDialog, setIsOpenDateDialog] = useState<boolean>(false)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Contact>({
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      phone: "",
      address: "",
    }
  })

  const fields = [
    {
      name: "name",
      label: "Nome",
      placeholder: "Digite o primeiro nome aqui",
      rules: { required: true },
      errorMessage: "Campo obrigatório",
    },
    {
      name: "surname",
      label: "Sobrenome",
      placeholder: "Digite o sobrenome aqui",
      rules: { required: true },
      errorMessage: "Campo obrigatório",
    },
    {
      name: "email",
      label: "E-mail",
      placeholder: "Digite o email aqui",
      rules: {
        required: true,
        validate: validateEmail
      },
      errorMessage: "Digite um e-mail válido",
    },
    {
      name: "phone",
      label: "Telefone",
      placeholder: "Digite o telefone aqui",
      rules: {
        required: true,
        validate: validatePhone
      },
      errorMessage: "Digite um telefone válido",
    },
    {
      name: "address",
      label: "Endereço",
      placeholder: "Digite o endereço aqui",
      rules: { required: true },
      errorMessage: "Campo obrigatório",
    }
  ]

  function handleVerifyContact(data: Contact) {
    if (!data.name || !data.surname || !data.email || !data.phone || !data.address || !birthDate) {
      return showMessage({
        message: "Preencha todos os campos",
        type: "danger",
      })
    }

    handleAddContact({
      ...data,
      birthDate: birthDate.toISOString()
    })
  }

  async function handleAddContact(data: Contact) {
    const success = await addContact({
      name: data.name,
      surname: data.surname,
      email: data.email,
      phone: data.phone,
      address: data.address,
      birthDate: data.birthDate
    })

    if (success) {
      navigation.navigate("Home")
    }
  }

  return (
    <View style={styles.container}>
      <Header
        title="Adicionar Contato"
        navigation={navigation}
      />
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        {fields.map((field, index) => (
          <React.Fragment key={index}>
            <Controller
              control={control}
              rules={field.rules}
              name={field.name as "name" | "surname" | "email" | "phone" | "address"}
              render={({ field: { onChange, onBlur, value } }) => (
                <CustomInput
                  label={field.label}
                  placeholder={field.placeholder}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors[field.name as "name" | "surname" | "email" | "phone" | "address"] && (
              <Text style={styles.errorText}>{field.errorMessage}</Text>
            )}

            {index < fields.length - 1 && <Separator />}
          </React.Fragment>
        ))}

        <Separator />

        {!isOpenDateDialog && (
          <CustomInput
            label="Data de Nascimento"
            placeholder="Selecione a data de nascimento"
            value={birthDate.toLocaleDateString()}
            onPress={() => setIsOpenDateDialog(true)}
          />
        )}

        <DatePicker
          modal
          open={isOpenDateDialog}
          date={birthDate}
          mode="date"
          onConfirm={(date) => {
            setIsOpenDateDialog(false)
            setBirthDate(date)
          }}
          onCancel={() => {
            setIsOpenDateDialog(false)
          }}
        />

        <Separator full />

        <CustomButton
          title="Adicionar"
          onPress={handleSubmit(handleVerifyContact)}
        />
      </ScrollView>
    </View>
  )
}

export default AddContact