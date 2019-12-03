import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../../services/token.service';
import { Usuario } from '../../datamodels/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private tokenService: TokenService
  ) { }

  UsuarioAuth: Usuario;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkLogin() && this.checknavigation(state.url);
  }

  checknavigation(url: string): boolean {
    this.UsuarioAuth = this.tokenService.getLoggedUser() as Usuario;
    const permisos = this.UsuarioAuth.Permisos.split(',');
    return (url === '/proveedor/pre-registro' || url.includes('/proveedor/corregir-proveedor'))  && permisos.includes('PRE-REGISTRO') ||
    url === '/proveedor/listar-proveedores' && permisos.includes('LISTAR PROVEEDORES') ||
    (url === '/proveedor/listar-solicitudes' || url.includes('/proveedor/visualizar-proveedor')) &&
    permisos.includes('LISTAR SOLICITUDES') ||
    (url === '/administracion/usuarios' || url === '/administracion/nuevo-usuario') && permisos.includes('ADMINISTRACION USUARIOS') ||
    (url === '/administracion/roles' || url === '/administracion/permisos-rol') && permisos.includes('ADMINISTRACION ROLES') ||
    url === '/seguridad/LDAP' && permisos.includes('CONFIGURACION LDAP') || url === '/home/principal';
  }

  checkLogin(): boolean {
    const token = this.tokenService.getToken();
    const isExpired = this.tokenService.isTokenExpired(token);


    if (token && !isExpired) {
      return true;
    }

    this.tokenService.setLoggedOut();
    if (token) {
      alert('El tiempo de sesion ha expirado');
    }
    
    this.router.navigate(['/authentication/login']);
    return false;
  }

}
