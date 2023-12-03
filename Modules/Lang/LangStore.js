import { makeAutoObservable } from "mobx";
import LangService from "./LangService";
import { LangType } from "./LangType";

export default class LangStore {
  langService;
  lang;
  isLoading;

  constructor() {
    this.langService = new LangService();
    this.setIsLoading(false);
    makeAutoObservable(this);
  };

  setLang = lang => {
    this.lang = lang;
  }

  changeLang = async (lang) => {
    this.setIsLoading(true);

    this.langService
      .changeLang(lang)
      .then(result => {
        this.setLang(lang)
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        this.setIsLoading(false);
      });
  }

  setIsLoading = isLoading => {
    this.isLoading = isLoading;
  }

  getLang = async () => {
    this.setLang(await this.langService.getLang());
  }
}
