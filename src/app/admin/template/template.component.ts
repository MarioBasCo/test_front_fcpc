import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent{
  isSidebarOpen = false;
  role = '';

  constructor(
    private router: Router
  ){

  }

  ngOnInit(){
    const user = JSON.parse(localStorage.getItem('userf')!)
    if(user.role){
      this.role = user.role;
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  cerrarSesion(){
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
