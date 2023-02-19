import {atom} from "recoil";
import {LightTheme} from "@/constants/themes/LightTheme.js";
import {StoreKey} from "@/constants/keys/StoreKey";

const localStorageEffect = (key) => ({setSelf, onSet}) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
        isReset
            ? localStorage.removeItem(key)
            : localStorage.setItem(key, JSON.stringify(newValue));
    });
}

export const themeState = atom({
    key: StoreKey.theme,
    default: new LightTheme(),
    effects: [localStorageEffect("theme")]
});