import { getMobileOperatingSystem } from "utils/common";

type Links = {
  appStoreLink?: string;
  googlePlayLink?: string;
};

export function redirectToStore({ appStoreLink, googlePlayLink }: Links) {
  const platform = getMobileOperatingSystem();
  if (platform === "ios" && appStoreLink) {
    window.location.href = appStoreLink;
    return;
  }
  if (platform === "android" && googlePlayLink) {
    window.location.href = googlePlayLink;
    return;
  }
  window.location.href = "/";
}
