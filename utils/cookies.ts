import Cookies from "js-cookie";

export function setTokenCookie(token: any) {
  Cookies.set("token", token, { expires: 7 });
}

export function removeTokenCookie() {
  Cookies.remove("token");
}
