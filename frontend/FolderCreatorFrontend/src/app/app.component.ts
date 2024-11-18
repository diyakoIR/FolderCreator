import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; 


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    NgIf,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ]
})
export class AppComponent {
  title = 'My Angular App';
  folderName: string = '';
  message: string = '';
  constructor(private http: HttpClient) {}
  createFolder() {
    if (this.folderName.trim() === '') {
      this.message = 'Folder name cannot be empty!';
      return;
    }
    this.http.post('https://localhost:7141/api/folders', { name: this.folderName })
  .subscribe(
    () => (this.message = 'Folder created successfully!'),
    (error) => {
      if (error.status === 409) {
        this.message = 'Duplicate name!';
      } else {
        this.message = 'An error occurred.';
      }
    }
  );

  }
}
