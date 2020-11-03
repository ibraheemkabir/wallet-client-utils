import { safeJsonParse, safeJsonStringify } from "./misc";
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setLocal(key: string, data: any): Promise<void> {
  const raw = safeJsonStringify(data);
  try {
    await AsyncStorage.setItem(key, raw);
  } catch (e) {
    throw e
  }
}

export async function getLocal(key: string): Promise<any> {
  let data: any = null;
  let raw: string | null = null;
  const local = AsyncStorage;
  if (local) {
    raw = await local.getItem(key);
  }
  data = safeJsonParse(raw);
  return data;
}

export async function removeLocal(key: string): Promise<void> {
  const local = AsyncStorage;
  if (local) {
    await local.removeItem(key);
  }
}
