import {atom} from "recoil";
import {LightTheme} from "@/constants/themes/LightTheme.js";
import {StoreKey} from "@/constants/keys/StoreKey";

export const themeState = atom({
    key: StoreKey.theme,
    default: new LightTheme()
});