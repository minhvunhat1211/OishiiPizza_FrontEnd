import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  constructor(public translae: TranslateService) { }
  
  public switchLang(lang: string){
    this.translae.use(lang);
  }
}
