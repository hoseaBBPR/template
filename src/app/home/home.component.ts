import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, Title, Meta } from '@angular/platform-browser';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(
    public sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router,
    private contentfulService: ContentfulService,
  ) {
    if (document.getElementById("mainScript"))
          document.getElementById("mainScript").remove();
          var mainScript = document.createElement("script");
          mainScript.setAttribute("id", "mainScript");
          mainScript.setAttribute("src", "assets/main.js");
          document.body.appendChild(mainScript);
   }

  ngOnInit() {
    this.contentfulService.getPage();
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
    setTimeout(() => { }, 500);
  }

}
