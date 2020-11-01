import { IClientMeta } from "@walletconnect/types";
import * as windowMetadata from "window-metadata";
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

export const getFromWindow = undefined;

export const getFromWindowOrThrow = undefined;

export const getDocumentOrThrow = undefined;

export const getDocument = undefined;

export const getNavigatorOrThrow = undefined;

export const getNavigator = undefined;

export const getLocationOrThrow = undefined;

export const getLocation = undefined;

export const getCryptoOrThrow = undefined;

export const getCrypto = undefined;

export const getLocalStorageOrThrow = undefined;

export const getLocalStorage = undefined;

export function getClientMeta(): IClientMeta | null {
  return windowMetadata.getWindowMetadata();
}
