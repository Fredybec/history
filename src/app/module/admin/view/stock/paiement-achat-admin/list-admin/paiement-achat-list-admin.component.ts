import {Component, OnInit} from '@angular/core';
import {PaiementAchatService} from 'src/app/controller/service/PaiementAchat.service';
import {PaiementAchatDto} from 'src/app/controller/model/PaiementAchat.model';
import {PaiementAchatCriteria} from 'src/app/controller/criteria/PaiementAchatCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { AchatService } from 'src/app/controller/service/Achat.service';
import { ModePaiementService } from 'src/app/controller/service/ModePaiement.service';

import {AchatDto} from 'src/app/controller/model/Achat.model';
import {ModePaiementDto} from 'src/app/controller/model/ModePaiement.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-paiement-achat-list-admin',
  templateUrl: './paiement-achat-list-admin.component.html'
})
export class PaiementAchatListAdminComponent extends AbstractListController<PaiementAchatDto, PaiementAchatCriteria, PaiementAchatService>  implements OnInit {

    fileName = 'PaiementAchat';

    achats :Array<AchatDto>;
    modePaiements :Array<ModePaiementDto>;
  
    constructor(datePipe: DatePipe, paiementAchatService: PaiementAchatService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private achatService: AchatService, private modePaiementService: ModePaiementService) {
        super(datePipe, paiementAchatService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadAchat();
      this.loadModePaiement();
    }

    public async loadPaiementAchats(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('PaiementAchat', 'list');
        isPermistted ? this.service.findAll().subscribe(paiementAchats => this.items = paiementAchats,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'reference', header: 'Reference'},
            {field: 'datePaiement', header: 'Date paiement'},
            {field: 'montant', header: 'Montant'},
            {field: 'achat?.reference', header: 'Achat'},
            {field: 'modePaiement?.libelle', header: 'Mode paiement'},
        ];
    }


    public async loadAchat(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('PaiementAchat', 'list');
        isPermistted ? this.achatService.findAll().subscribe(achats => this.achats = achats,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadModePaiement(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('PaiementAchat', 'list');
        isPermistted ? this.modePaiementService.findAll().subscribe(modePaiements => this.modePaiements = modePaiements,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: PaiementAchatDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Reference': e.reference ,
                'Date paiement': this.datePipe.transform(e.datePaiement , 'dd/MM/yyyy hh:mm'),
                 'Montant': e.montant ,
                'Achat': e.achat?.reference ,
                'Mode paiement': e.modePaiement?.libelle ,
                 'Description': e.description ,
            }
        });

        this.criteriaData = [{
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
            'Date paiement Min': this.criteria.datePaiementFrom ? this.datePipe.transform(this.criteria.datePaiementFrom , this.dateFormat) : environment.emptyForExport ,
            'Date paiement Max': this.criteria.datePaiementTo ? this.datePipe.transform(this.criteria.datePaiementTo , this.dateFormat) : environment.emptyForExport ,
            'Montant Min': this.criteria.montantMin ? this.criteria.montantMin : environment.emptyForExport ,
            'Montant Max': this.criteria.montantMax ? this.criteria.montantMax : environment.emptyForExport ,
        //'Achat': this.criteria.achat?.reference ? this.criteria.achat?.reference : environment.emptyForExport ,
        //'Mode paiement': this.criteria.modePaiement?.libelle ? this.criteria.modePaiement?.libelle : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
        }];
      }
}
