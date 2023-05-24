import {Component, OnInit} from '@angular/core';
import {AchatService} from 'src/app/controller/service/Achat.service';
import {AchatDto} from 'src/app/controller/model/Achat.model';
import {AchatCriteria} from 'src/app/controller/criteria/AchatCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { FournisseurService } from 'src/app/controller/service/Fournisseur.service';
import { StoreService } from 'src/app/controller/service/Store.service';

import {FournisseurDto} from 'src/app/controller/model/Fournisseur.model';
import {AchatItemDto} from 'src/app/controller/model/AchatItem.model';
import {StoreDto} from 'src/app/controller/model/Store.model';
import {PaiementAchatDto} from 'src/app/controller/model/PaiementAchat.model';
import {AvoirAchatDto} from 'src/app/controller/model/AvoirAchat.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-achat-list-admin',
  templateUrl: './achat-list-admin.component.html'
})
export class AchatListAdminComponent extends AbstractListController<AchatDto, AchatCriteria, AchatService>  implements OnInit {

    fileName = 'Achat';

    fournisseurs :Array<FournisseurDto>;
    stores :Array<StoreDto>;
  
    constructor(datePipe: DatePipe, achatService: AchatService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private fournisseurService: FournisseurService, private storeService: StoreService) {
        super(datePipe, achatService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadFournisseur();
      this.loadStore();
      this.loadAchats();
    }

    public async loadAchats(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Achat', 'list');
        isPermistted ? this.service.findAll().subscribe(achats => this.items = achats,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }



    public initCol() {
        this.cols = [
            {field: 'reference', header: 'Reference'},
            {field: 'dateAchat', header: 'Date achat'},
            {field: 'total', header: 'Total'},
            {field: 'totalPaye', header: 'Total paye'},
            {field: 'fournisseur?.nom', header: 'Fournisseur'},
            {field: 'store?.libelle', header: 'Store'},
        ];
    }


    public async loadFournisseur(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Achat', 'list');
        isPermistted ? this.fournisseurService.findAll().subscribe(fournisseurs => this.fournisseurs = fournisseurs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadStore(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Achat', 'list');
        isPermistted ? this.storeService.findAll().subscribe(stores => this.stores = stores,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: AchatDto) {
        if (res.paiementAchats != null) {
             res.paiementAchats.forEach(d => { d.achat = null; d.id = null; });
        }
        if (res.achatItems != null) {
             res.achatItems.forEach(d => { d.achat = null; d.id = null; });
        }
        if (res.avoirAchats != null) {
             res.avoirAchats.forEach(d => { d.achat = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Reference': e.reference ,
                'Date achat': this.datePipe.transform(e.dateAchat , 'dd/MM/yyyy hh:mm'),
                 'Total': e.total ,
                 'Total paye': e.totalPaye ,
                 'Description': e.description ,
                'Fournisseur': e.fournisseur?.nom ,
                'Store': e.store?.libelle ,
            }
        });

        this.criteriaData = [{
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
            'Date achat Min': this.criteria.dateAchatFrom ? this.datePipe.transform(this.criteria.dateAchatFrom , this.dateFormat) : environment.emptyForExport ,
            'Date achat Max': this.criteria.dateAchatTo ? this.datePipe.transform(this.criteria.dateAchatTo , this.dateFormat) : environment.emptyForExport ,
            'Total Min': this.criteria.totalMin ? this.criteria.totalMin : environment.emptyForExport ,
            'Total Max': this.criteria.totalMax ? this.criteria.totalMax : environment.emptyForExport ,
            'Total paye Min': this.criteria.totalPayeMin ? this.criteria.totalPayeMin : environment.emptyForExport ,
            'Total paye Max': this.criteria.totalPayeMax ? this.criteria.totalPayeMax : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
        //'Fournisseur': this.criteria.fournisseur?.nom ? this.criteria.fournisseur?.nom : environment.emptyForExport ,
        //'Store': this.criteria.store?.libelle ? this.criteria.store?.libelle : environment.emptyForExport ,
        }];
      }
}
