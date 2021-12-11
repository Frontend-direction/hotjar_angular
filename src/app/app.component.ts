import { AfterContentInit, Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {
  title = 'hotjar';

  constructor(@Inject(DOCUMENT) private document: Document,) {

  }

  ngAfterContentInit(): void {
    ((h, o, t, j, a, r) => {
      h.hj =
        h.hj ||
        /* tslint:disable:only-arrow-functions */
        function () {
          (h.hj.q = h.hj.q || []).push(arguments);
        };
      h._hjSettings = { hjid:2743639,hjsv:6 };
      a = o.getElementsByTagName('head')[0];
      r = o.createElement('script');
      r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window as any, this.document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
  }
}
