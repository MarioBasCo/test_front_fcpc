import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){}

  /* canActivate():boolean{
    if(localStorage.getItem('userf')){
      this.router.navigate(['/login']); 
      return false;
    }
    return true;
  } */

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    
    // Verificar si la clave de usuario existe en el localStorage
    const userKey = localStorage.getItem('userf');
    
    // Si la clave de usuario existe, permitir el acceso a la ruta
    if (userKey) {
      return true;
    } else {
      // Redirigir a la página de login
      return this.router.parseUrl('/login');
    }
  }
  
}