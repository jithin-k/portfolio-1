import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  private _myServicesJsonURL = 'assets/resources/my-services.json';
  private _projectsJsonURL = 'assets/resources/projects.json';
  private _workJsonURL = 'assets/resources/work.json';
  private _educationJsonURL = 'assets/resources/education.json';
  private _contactJsonURL = 'assets/resources/contact.json';

  public projects;
  public myServices;
  public workHistory;
  public educationHistory;
  public contact;

  constructor(private http: HttpClient) {
    this.getMyServices();
    this.getProjects();
    this.getWorkHistory();
    this.getEducationHistory();
    this.getContact();
   }

   private getWorkHistory() {
    this.getJSON(this._workJsonURL).subscribe(data => {
      this.workHistory = data;
      console.log(this.workHistory)
     });
   }

   private getEducationHistory() {
    this.getJSON(this._educationJsonURL).subscribe(data => {
      this.educationHistory = data;
      console.log(this.educationHistory)
     });
   }

   private getContact() {
    this.getJSON(this._contactJsonURL).subscribe(data => {
      this.contact = data;
      console.log(this.contact);
     });
   }

   private getMyServices() {
    this.getJSON(this._myServicesJsonURL).subscribe(data => {
      this.myServices = data;
      console.log(this.myServices);
     });
   }

   private getProjects() {
    this.getJSON(this._projectsJsonURL).subscribe(data => {
      this.projects = data;
      console.log(this.projects);
     });
   }

   private getJSON(urlString: string): Observable<any> {
     return this.http.get(urlString);
   }

  ngOnInit(): void {
  }

}
