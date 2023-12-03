import { Localization } from "./LangAdapter";
import LangLocalRepository from "./LangLocalRepository";
import { LangType } from "./LangType";

export default class LangService {
  langLocal

  constructor() {
    this.langLocal = new LangLocalRepository();
  }

  changeLang = async (lang) => {
    await this.langLocal.set(lang);
    if (lang) {
      await Localization.changeLanguage(lang); 
    }
  };
  getLang = async () => {
    return await this.langLocal.get();
  };
}
