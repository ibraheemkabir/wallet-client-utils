import { safeJsonParse, safeJsonStringify } from "./misc";
import { AsyncStorage } from 'react-native';

export function setLocal(key: string, data: any): void {
  const raw = safeJsonStringify(data);
  const local = AsyncStorage();
  if (local) {
    local?.setItem(key, raw);
  }
}

export function getLocal(key: string): any {
  let data: any = null;
  let raw: string | null = null;
  const local = AsyncStorage();
  if (local) {
    raw = local.getItem(key);
  }
  data = safeJsonParse(raw);
  return data;
}

export function removeLocal(key: string): void {
  const local = AsyncStorage();
  if (local) {
    local.removeItem(key);
  }
}
