import {Component} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/icons/icons.html'
})
export class IconsPage {
  constructor(private navController: NavController,menu: MenuController) {
    menu.enable(true);
  }
}
