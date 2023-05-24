import {Component, OnInit} from '@angular/core';
import {AvoirAchatService} from 'src/app/controller/service/AvoirAchat.service';
import {AvoirAchatDto} from 'src/app/controller/model/AvoirAchat.model';
import {AvoirAchatCriteria} from 'src/app/controller/criteria/AvoirAchatCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { AchatService } from 'src/app/controller/service/Achat.service';

import {AchatDto} from 'src/app/controller/model/Achat.model';
import {AvoirAchatItemDto} from 'src/app/controller/model/AvoirAchatItem.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-avoir-achat-list-admin',
  templateUrl: './avoir-achat-list-admin.component.html'
})
export class AvoirAchatListAdminComponent extends AbstractListController<AvoirAchatDto, AvoirAchatCriteria, AvoirAchatService>  implements OnInit {

    fileName = 'AvoirAchat';

    achats :Array<AchatDto>;
  
    constructor(datePipe: DatePipe, avoirAchatService: AvoirAchatService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private achatService: AchatService) {
        super(datePipe, avoirAchatService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadAchat();
    }

    public async loadAvoirAchats(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('AvoirAchat', 'list');
        isPermistted ? this.service.findAll().subscribe(avoirAchats => this.items = avoirAchats,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'dateAvoir', header: 'Date avoir'},
            {field: 'montant', header: 'Montant'},
            {field: 'achat?.reference', header: 'Achat'},
        ];
    }


    public async loadAchat(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('AvoirAchat', 'list');
        isPermistted ? this.achatService.findAll().subscribe(achats => this.achats = achats,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: AvoirAchatDto) {
        if (res.avoirAchatItems != null) {
             res.avoirAchatItems.forEach(d => { d.avoirAchat = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                'Date avoir': this.datePipe.transform(e.dateAvoir , 'dd/MM/yyyy hh:mm'),
                 'Montant': e.montant ,
                'Achat': e.achat?.reference ,
            }
        });

        this.criteriaData = [{
            'Date avoir Min': this.criteria.dateAvoirFrom ? this.datePipe.transform(this.criteria.dateAvoirFrom , this.dateFormat) : environment.emptyForExport ,
            'Date avoir Max': this.criteria.dateAvoirTo ? this.datePipe.transform(this.criteria.dateAvoirTo , this.dateFormat) : environment.emptyForExport ,
            'Montant Min': this.criteria.montantMin ? this.criteria.montantMin : environment.emptyForExport ,
            'Montant Max': this.criteria.montantMax ? this.criteria.montantMax : environment.emptyForExport ,
        //'Achat': this.criteria.achat?.reference ? this.criteria.achat?.reference : environment.emptyForExport ,
        }];
      }
}
