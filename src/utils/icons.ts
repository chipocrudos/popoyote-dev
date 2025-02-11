
import type { Icon } from "./types";

import githubIcon from "@assets/github.svg";
import telegramIcon from "@assets/telegram.svg";

export const Icons: { [key: string]: Icon } = {
    telegram: {
        name: "Telegram",
        assets: telegramIcon.src,
        url: "https://t.me/+6L0rqhl9rvtmNTQz",
        color: "#0088cc",
    },
    github: {
        name: "GitHub",
        assets: githubIcon.src,
        url: "https://github.com/popoyote-dev",
        color: "#000",
    }

}