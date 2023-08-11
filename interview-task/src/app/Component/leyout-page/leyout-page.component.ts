import { Component } from '@angular/core';

@Component({
  selector: 'app-leyout-page',
  templateUrl: './leyout-page.component.html',
  styleUrls: ['./leyout-page.component.css']
})
export class LeyoutPageComponent {
  progress = 0;
  interval: any;
  toasterCls:  string = '';
  hideProgress:boolean =true;
  constructor() {

  }

   ProgressBar() {
    this.hideProgress=true;
    this.progress = 0;
    this.interval = setInterval(() => {
      this.progress += 10;
      if (this.progress >= 100) {
        clearInterval(this.interval);
        this.showToaster()
        this.hideProgress = false;
      }
    }, 300);
  }
  showToaster() {
    this.toasterCls = "show";
    setTimeout(() => {
      this.toasterCls = "";
    }, 2000);

  }


}






