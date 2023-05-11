import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oishii_pizza';
  constructor(public translae: TranslateService){
    translae.addLangs(['en','vi','jp']);
    translae.setDefaultLang('en');
  }
  public doBeforeUnload(): void {
    localStorage.removeItem('Token');
  }
}
