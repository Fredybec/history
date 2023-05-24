import {Component, OnInit} from '@angular/core';
import {MagasinService} from 'src/app/controller/service/Magasin.service';
import {MagasinDto} from 'src/app/controller/model/Magasin.model';
import {MagasinCriteria} from 'src/app/controller/criteria/MagasinCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { StoreService } from 'src/app/controller/service/Store.service';

import {StoreDto} from 'src/app/controller/model/Store.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-magasin-list-admin',
  templateUrl: './magasin-list-admin.component.html'
})
export class MagasinListAdminComponent extends AbstractListController<MagasinDto, MagasinCriteria, MagasinService>  implements OnInit {

    fileName = 'Magasin';

    stores :Array<StoreDto>;
  
    constructor(datePipe: DatePipe, magasinService: MagasinService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private storeService: StoreService) {
        super(datePipe, magasinService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadStore();
    }

    public async loadMagasins(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Magasin', 'list');
        isPermistted ? this.service.findAll().subscribe(magasins => this.items = magasins,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'nom', header: 'Nom'},
            {field: 'adresse', header: 'Adresse'},
            {field: 'store?.libelle', header: 'Store'},
        ];
    }


    public async loadStore(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Magasin', 'list');
        isPermistted ? this.storeService.findAll().subscribe(stores => this.stores = stores,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: MagasinDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Nom': e.nom ,
                 'Adresse': e.adresse ,
                'Store': e.store?.libelle ,
            }
        });

        this.criteriaData = [{
            'Nom': this.criteria.nom ? this.criteria.nom : environment.emptyForExport ,
            'Adresse': this.criteria.adresse ? this.criteria.adresse : environment.emptyForExport ,
        //'Store': this.criteria.store?.libelle ? this.criteria.store?.libelle : environment.emptyForExport ,
        }];
      }
}
