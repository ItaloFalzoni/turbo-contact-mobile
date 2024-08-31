import SInfo from "react-native-sensitive-info";

export async function getItem(key: string) {
  try {
    return await SInfo.getItem(key, {
      sharedPreferencesName: 'mySharedPrefs',
      keychainService: 'myKeychain'
    })
  } catch (error) {
    console.error(error)
    return null
  }
}

export async function setItem(key: string, value: string) {
  try {
    return await SInfo.setItem(key, value, {
      sharedPreferencesName: 'mySharedPrefs',
      keychainService: 'myKeychain'
    })
  } catch (error) {
    console.error(error)
    return null
  }
}