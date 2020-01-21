import { Component, OnInit } from '@angular/core';
import { GitrepoService } from '../repo/gitrepo.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  resume: any = {};

  constructor (private _repo: GitrepoService) {}

  ngOnInit () {
    this._repo.getResume().subscribe(
      response => {
        this.resume = response; console.log(this.resume);
      }
    );
  }

}
