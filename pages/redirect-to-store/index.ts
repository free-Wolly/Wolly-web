import { useEffect } from "react";
import Router from "next/router";

declare global {
  interface Window {
    opera: any;
    MSStream: any;
  }
}

const GetStore = () => {
  useEffect(() => {
    var userAgent =
      window.navigator.userAgent || window.navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      Router.push(
        "https://play.google.com/store/apps/details?id=com.wolly&pli=1"
      );
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      Router.push("https://apps.apple.com/ge/app/wolly/id1546265724");
    } else {
      Router.push("/");
    }
  }, []);
};

export default GetStore;
