import {Component, OnInit} from '@angular/core';
import {StoreService} from 'src/app/controller/service/Store.service';
import {StoreDto} from 'src/app/controller/model/Store.model';
import {StoreCriteria} from 'src/app/controller/criteria/StoreCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { AbonneService } from 'src/app/controller/service/Abonne.service';

import {AbonneDto} from 'src/app/controller/model/Abonne.model';
import {MagasinDto} from 'src/app/controller/model/Magasin.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-store-list-admin',
  templateUrl: './store-list-admin.component.html'
})
export class StoreListAdminComponent extends AbstractListController<StoreDto, StoreCriteria, StoreService>  implements OnInit {

    fileName = 'Store';

    abonnes :Array<AbonneDto>;
  
    constructor(datePipe: DatePipe, storeService: StoreService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private abonneService: AbonneService) {
        super(datePipe, storeService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadAbonne();
    }

    public async loadStores(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Store', 'list');
        isPermistted ? this.service.findAll().subscribe(stores => this.items = stores,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'reference', header: 'Reference'},
            {field: 'abonne?.code', header: 'Abonne'},
        ];
    }


    public async loadAbonne(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Store', 'list');
        isPermistted ? this.abonneService.findAll().subscribe(abonnes => this.abonnes = abonnes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: StoreDto) {
        if (res.magasins != null) {
             res.magasins.forEach(d => { d.store = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Reference': e.reference ,
                'Abonne': e.abonne?.code ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
        //'Abonne': this.criteria.abonne?.code ? this.criteria.abonne?.code : environment.emptyForExport ,
        }];
      }
}
