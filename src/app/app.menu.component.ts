import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';

import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { RoleService } from 'src/app/zynerator/security/Role.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
  animations: [
    trigger('inline', [
      state(
        'hidden',
        style({
          height: '0px',
          overflow: 'hidden',
        })
      ),
      state(
        'visible',
        style({
          height: '*',
        })
      ),
      state(
        'hiddenAnimated',
        style({
          height: '0px',
          overflow: 'hidden',
        })
      ),
      state(
        'visibleAnimated',
        style({
          height: '*',
        })
      ),
      transition(
        'visibleAnimated => hiddenAnimated',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
      transition(
        'hiddenAnimated => visibleAnimated',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
    ]),
  ],
})
export class AppMenuComponent implements OnInit {
  model: any[];
  modelsuperadmin:any[];
  modelanonymous: any[];
    modeladmin : any[];
  constructor(public app: AppComponent,
   public appMain: AppMainComponent,
   private roleService: RoleService,
   private authService:AuthService,
  private router: Router) {}

  ngOnInit() {


    this.modeladmin =
      [
              {
                label: 'Gestion Vente',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste vente',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/stock/vente/list']
                    },
                    {
                      label: 'Liste avoir vente',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/stock/avoir-vente/list']
                    },
                    {
                      label: 'Liste paiement vente',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/stock/paiement-vente/list']
                    },
                ]
              },
              {
                label: 'Gestion Collaborateur',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste fournisseur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/stock/fournisseur/list']
                    },
                    {
                      label: 'Liste client',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/stock/client/list']
                    },
                ]
              },
              {
                label: 'Configuration',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste marque',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/stock/marque/list']
                    },
                    {
                      label: 'Liste etat paiement',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/stock/etat-paiement/list']
                    },
                    {
                      label: 'Liste unite mesure',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/stock/unite-mesure/list']
                    },
                    {
                      label: 'Liste mode paiement',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/stock/mode-paiement/list']
                    },
                ]
              },
              {
                label: 'Gestion Demande',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste demande',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/stock/demande/list']
                    },
                    {
                      label: 'Liste etat livraison',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/stock/etat-livraison/list']
                    },
                    {
                      label: 'Liste livraison',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/stock/livraison/list']
                    },
                    {
                      label: 'Liste etat demande',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/stock/etat-demande/list']
                    },
                    {
                      label: 'Liste paiement demande',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/stock/paiement-demande/list']
                    },
                    {
                      label: 'Liste paiement livraison',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/stock/paiement-livraison/list']
                    },
                ]
              },
              {
                label: 'Gestion Abonne',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste store',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/stock/store/list']
                    },
                    {
                      label: 'Liste magasin',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/stock/magasin/list']
                    },
                    {
                      label: 'Liste abonne',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/stock/abonne/list']
                    },
                ]
              },
              {
                label: 'Gestion Commande',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste paiement commande',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/stock/paiement-commande/list']
                    },
                    {
                      label: 'Liste reception',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/stock/reception/list']
                    },
                    {
                      label: 'Liste etat reception',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/stock/etat-reception/list']
                    },
                    {
                      label: 'Liste etat commande',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/stock/etat-commande/list']
                    },
                    {
                      label: 'Liste commande',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/stock/commande/list']
                    },
                ]
              },
              {
                label: 'Gestion Cheque',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste proprietaire cheque banque',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/stock/proprietaire-cheque-banque/list']
                    },
                    {
                      label: 'Liste proprietaire cheque',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/stock/proprietaire-cheque/list']
                    },
                    {
                      label: 'Liste banque',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/stock/banque/list']
                    },
                ]
              },
              {
                label: 'Gestion Produit',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste categorie produit',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/stock/categorie-produit/list']
                    },
                    {
                      label: 'Liste produit',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/stock/produit/list']
                    },
                    {
                      label: 'Liste stock produit',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/stock/stock-produit/list']
                    },
                ]
              },
              {
                label: 'Gestion Achat',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste avoir achat',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/stock/avoir-achat/list']
                    },
                    {
                      label: 'Liste paiement achat',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/stock/paiement-achat/list']
                    },
                    {
                      label: 'Liste achat',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/stock/achat/list']
                    },
                    {
                        label: 'Liste history achat',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/stock/achat/list-history']
                    },
                ]
              },
    ]
        if (this.authService.authenticated) {
      if (this.authService.authenticatedUser.roles) {

        this.authService.authenticatedUser.roles.forEach(role => {
          const roleName: string = this.getRole(role);
          this.roleService._role.next(roleName.toUpperCase());
          eval('this.model = this.model' + this.getRole(role));
        })
      }

    }
  }
  getRole(text){
  const [role, ...rest] = text.split('_');
  return rest.join('').toLowerCase();
}
  onMenuClick(event) {
    this.appMain.onMenuClick(event);
  }
}
