import {Component, OnInit} from '@angular/core';
import {ProduitService} from 'src/app/controller/service/Produit.service';
import {ProduitDto} from 'src/app/controller/model/Produit.model';
import {ProduitCriteria} from 'src/app/controller/criteria/ProduitCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { CategorieProduitService } from 'src/app/controller/service/CategorieProduit.service';
import { UniteMesureService } from 'src/app/controller/service/UniteMesure.service';
import { MarqueService } from 'src/app/controller/service/Marque.service';
import { StoreService } from 'src/app/controller/service/Store.service';

import {MarqueDto} from 'src/app/controller/model/Marque.model';
import {CategorieProduitDto} from 'src/app/controller/model/CategorieProduit.model';
import {StoreDto} from 'src/app/controller/model/Store.model';
import {UniteMesureDto} from 'src/app/controller/model/UniteMesure.model';
import {StockProduitDto} from 'src/app/controller/model/StockProduit.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-produit-list-admin',
  templateUrl: './produit-list-admin.component.html'
})
export class ProduitListAdminComponent extends AbstractListController<ProduitDto, ProduitCriteria, ProduitService>  implements OnInit {

    fileName = 'Produit';

    categorieProduits :Array<CategorieProduitDto>;
    uniteMesures :Array<UniteMesureDto>;
    marques :Array<MarqueDto>;
    stores :Array<StoreDto>;
  
    constructor(datePipe: DatePipe, produitService: ProduitService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private categorieProduitService: CategorieProduitService, private uniteMesureService: UniteMesureService, private marqueService: MarqueService, private storeService: StoreService) {
        super(datePipe, produitService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadCategorieProduit();
      this.loadUniteMesure();
      this.loadMarque();
      this.loadStore();
    }

    public async loadProduits(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Produit', 'list');
        isPermistted ? this.service.findAll().subscribe(produits => this.items = produits,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'reference', header: 'Reference'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'categorieProduit?.libelle', header: 'Categorie produit'},
            {field: 'barcode', header: 'Barcode'},
            {field: 'description', header: 'Description'},
            {field: 'prixAchatMoyen', header: 'Prix achat moyen'},
            {field: 'quantite', header: 'Quantite'},
            {field: 'seuilAlert', header: 'Seuil alert'},
            {field: 'uniteMesure?.libelle', header: 'Unite mesure'},
            {field: 'marque?.libelle', header: 'Marque'},
            {field: 'store?.libelle', header: 'Store'},
            {field: 'photoProduits', header: 'Photo produits'},
        ];
    }


    public async loadCategorieProduit(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Produit', 'list');
        isPermistted ? this.categorieProduitService.findAll().subscribe(categorieProduits => this.categorieProduits = categorieProduits,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadUniteMesure(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Produit', 'list');
        isPermistted ? this.uniteMesureService.findAll().subscribe(uniteMesures => this.uniteMesures = uniteMesures,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadMarque(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Produit', 'list');
        isPermistted ? this.marqueService.findAll().subscribe(marques => this.marques = marques,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadStore(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Produit', 'list');
        isPermistted ? this.storeService.findAll().subscribe(stores => this.stores = stores,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: ProduitDto) {
        if (res.stockProduits != null) {
             res.stockProduits.forEach(d => { d.produit = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Reference': e.reference ,
                 'Libelle': e.libelle ,
                'Categorie produit': e.categorieProduit?.libelle ,
                 'Barcode': e.barcode ,
                 'Description': e.description ,
                 'Prix achat moyen': e.prixAchatMoyen ,
                 'Quantite': e.quantite ,
                 'Seuil alert': e.seuilAlert ,
                'Unite mesure': e.uniteMesure?.libelle ,
                'Marque': e.marque?.libelle ,
                'Store': e.store?.libelle ,
                 'Photo produits': e.photoProduits ,
            }
        });

        this.criteriaData = [{
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        //'Categorie produit': this.criteria.categorieProduit?.libelle ? this.criteria.categorieProduit?.libelle : environment.emptyForExport ,
            'Barcode': this.criteria.barcode ? this.criteria.barcode : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
            'Prix achat moyen Min': this.criteria.prixAchatMoyenMin ? this.criteria.prixAchatMoyenMin : environment.emptyForExport ,
            'Prix achat moyen Max': this.criteria.prixAchatMoyenMax ? this.criteria.prixAchatMoyenMax : environment.emptyForExport ,
            'Quantite Min': this.criteria.quantiteMin ? this.criteria.quantiteMin : environment.emptyForExport ,
            'Quantite Max': this.criteria.quantiteMax ? this.criteria.quantiteMax : environment.emptyForExport ,
            'Seuil alert Min': this.criteria.seuilAlertMin ? this.criteria.seuilAlertMin : environment.emptyForExport ,
            'Seuil alert Max': this.criteria.seuilAlertMax ? this.criteria.seuilAlertMax : environment.emptyForExport ,
        //'Unite mesure': this.criteria.uniteMesure?.libelle ? this.criteria.uniteMesure?.libelle : environment.emptyForExport ,
        //'Marque': this.criteria.marque?.libelle ? this.criteria.marque?.libelle : environment.emptyForExport ,
        //'Store': this.criteria.store?.libelle ? this.criteria.store?.libelle : environment.emptyForExport ,
            'Photo produits': this.criteria.photoProduits ? this.criteria.photoProduits : environment.emptyForExport ,
        }];
      }
}
