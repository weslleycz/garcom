import AsyncStorage from "@react-native-async-storage/async-storage";

export class Database {
  public async setItem(kay: string, value: any) {
    value.date = new Date().toString();
    const valueJSON = JSON.stringify(value);
    await AsyncStorage.setItem(kay, valueJSON);
  }
  public async getItem(kay: string) {
    const value = await AsyncStorage.getItem(kay);
    return value != null ? JSON.parse(value) : null;
  }

  public async deleteItem(kay: string) {
    await AsyncStorage.removeItem(kay);
  }

  public async clear() {
    await AsyncStorage.clear();
  }
}
