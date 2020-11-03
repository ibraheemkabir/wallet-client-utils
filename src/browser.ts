import { IClientMeta } from "@walletconnect/types";
import * as Device from 'expo-device';

export function detectOS() {
  const env = Device;
  return env && env.osName ? env.osName : undefined;
}

export function isIOS(): boolean {
  const os = detectOS();
  return os ? os.toLowerCase().includes("ios") : false;
}

export function isMobile(): boolean {
  const os = detectOS();
  return os ? os.toLowerCase().includes("android") || os.toLowerCase().includes("ios") : false;
}

export function isNode(): boolean {
  return false;
}

export function isBrowser(): boolean {
  const os = detectOS();
  let browser = os ? os.toLowerCase().includes("web") : false;
  const result = !isNode() && !!browser;
  return result;
}


export function getWindow() {
  return undefined;
}

export const getFromWindow = getWindow;

export const getFromWindowOrThrow = getWindow;

export const getDocumentOrThrow = getWindow;

export const getDocument = getWindow;

export const getNavigatorOrThrow = getWindow;

export const getNavigator = getWindow;

export const getLocationOrThrow = getWindow;

export const getLocation = getWindow;

export const getCryptoOrThrow = getWindow;

export const getCrypto = getWindow;

export const getLocalStorageOrThrow = getWindow;

export const getLocalStorage = getWindow;

export function getClientMeta(): IClientMeta | undefined {
  return undefined;
}
