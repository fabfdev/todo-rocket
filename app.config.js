import * as dotenv from "dotenv";

dotenv.config();

module.exports = {
  "expo": {
    "name": "Todo Rocket",
    "slug": "todo-rocket",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#0D0D0D"
    },
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#0D0D0D"
      },
      "package": "br.com.felipealexandre012.todorocket"
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      "eas": {
        "projectId": "1be46963-2d60-42c2-8e87-49d48d9e8f71"
      }
    },
    "runtimeVersion": {
      "policy": "appVersion"
    },
    "updates": {
      "url": "https://u.expo.dev/1be46963-2d60-42c2-8e87-49d48d9e8f71"
    }
  }
}
