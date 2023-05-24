import {Component, OnInit} from '@angular/core';
import {StockProduitService} from 'src/app/controller/service/StockProduit.service';
import {StockProduitDto} from 'src/app/controller/model/StockProduit.model';
import {StockProduitCriteria} from 'src/app/controller/criteria/StockProduitCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { MagasinService } from 'src/app/controller/service/Magasin.service';
import { ProduitService } from 'src/app/controller/service/Produit.service';

import {MagasinDto} from 'src/app/controller/model/Magasin.model';
import {ProduitDto} from 'src/app/controller/model/Produit.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-stock-produit-list-admin',
  templateUrl: './stock-produit-list-admin.component.html'
})
export class StockProduitListAdminComponent extends AbstractListController<StockProduitDto, StockProduitCriteria, StockProduitService>  implements OnInit {

    fileName = 'StockProduit';

    magasins :Array<MagasinDto>;
    produits :Array<ProduitDto>;
  
    constructor(datePipe: DatePipe, stockProduitService: StockProduitService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private magasinService: MagasinService, private produitService: ProduitService) {
        super(datePipe, stockProduitService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadMagasin();
      this.loadProduit();
    }

    public async loadStockProduits(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('StockProduit', 'list');
        isPermistted ? this.service.findAll().subscribe(stockProduits => this.items = stockProduits,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'magasin?.id', header: 'Magasin'},
            {field: 'produit?.libelle', header: 'Produit'},
            {field: 'quantite', header: 'Quantite'},
            {field: 'quantiteDeffecteuse', header: 'Quantite deffecteuse'},
        ];
    }


    public async loadMagasin(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('StockProduit', 'list');
        isPermistted ? this.magasinService.findAll().subscribe(magasins => this.magasins = magasins,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadProduit(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('StockProduit', 'list');
        isPermistted ? this.produitService.findAll().subscribe(produits => this.produits = produits,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: StockProduitDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                'Magasin': e.magasin?.id ,
                'Produit': e.produit?.libelle ,
                 'Quantite': e.quantite ,
                 'Quantite deffecteuse': e.quantiteDeffecteuse ,
            }
        });

        this.criteriaData = [{
        //'Magasin': this.criteria.magasin?.id ? this.criteria.magasin?.id : environment.emptyForExport ,
        //'Produit': this.criteria.produit?.libelle ? this.criteria.produit?.libelle : environment.emptyForExport ,
            'Quantite Min': this.criteria.quantiteMin ? this.criteria.quantiteMin : environment.emptyForExport ,
            'Quantite Max': this.criteria.quantiteMax ? this.criteria.quantiteMax : environment.emptyForExport ,
            'Quantite deffecteuse Min': this.criteria.quantiteDeffecteuseMin ? this.criteria.quantiteDeffecteuseMin : environment.emptyForExport ,
            'Quantite deffecteuse Max': this.criteria.quantiteDeffecteuseMax ? this.criteria.quantiteDeffecteuseMax : environment.emptyForExport ,
        }];
      }
}
