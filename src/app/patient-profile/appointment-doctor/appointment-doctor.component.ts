import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-appointment-doctor',
  templateUrl: './appointment-doctor.component.html',
  styleUrls: ['./appointment-doctor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppointmentDoctorComponent implements OnInit {
  value;
  selectedFileImg: File = null;
  postimg: string ="null";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  PostonUpload() {
    const fd = new FormData();
    console.log(this.selectedFileImg);
    fd.append('audio', this.selectedFileImg, this.selectedFileImg.name);
    console.log(this.selectedFileImg.name);

    this.http.post('http://localhost:4000/api/upload', fd)
      .subscribe(res => {
        console.log(res);
      });
  }
  onFileChange(e) {
    console.log(e);
    this.selectedFileImg = <File>e.target.files[0];
    this.postimg = "http://localhost:4000/" + this.selectedFileImg.name;
    this.PostonUpload();
  }

}
