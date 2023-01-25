import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  pruebaSubject = new Subject();

  ngOnInit(){
    this.pruebaSubject.subscribe((msg) => {
      console.log(msg)
    })

    this.pruebaSubject.next("Holaaa seme escuchaaa?")
    this.pruebaSubject.next("Eyy estas ahiii?")
    this.pruebaSubject.next("compadreeee")
  }

}
