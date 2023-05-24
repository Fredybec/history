import {Component, OnInit} from '@angular/core';
import {ReceptionService} from 'src/app/controller/service/Reception.service';
import {ReceptionDto} from 'src/app/controller/model/Reception.model';
import {ReceptionCriteria} from 'src/app/controller/criteria/ReceptionCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { CommandeService } from 'src/app/controller/service/Commande.service';
import { EtatReceptionService } from 'src/app/controller/service/EtatReception.service';

import {CommandeDto} from 'src/app/controller/model/Commande.model';
import {ReceptionItemDto} from 'src/app/controller/model/ReceptionItem.model';
import {EtatReceptionDto} from 'src/app/controller/model/EtatReception.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-reception-list-admin',
  templateUrl: './reception-list-admin.component.html'
})
export class ReceptionListAdminComponent extends AbstractListController<ReceptionDto, ReceptionCriteria, ReceptionService>  implements OnInit {

    fileName = 'Reception';

    commandes :Array<CommandeDto>;
    etatReceptions :Array<EtatReceptionDto>;
  
    constructor(datePipe: DatePipe, receptionService: ReceptionService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private commandeService: CommandeService, private etatReceptionService: EtatReceptionService) {
        super(datePipe, receptionService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadCommande();
      this.loadEtatReception();
    }

    public async loadReceptions(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Reception', 'list');
        isPermistted ? this.service.findAll().subscribe(receptions => this.items = receptions,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'commande?.reference', header: 'Commande'},
            {field: 'dateReception', header: 'Date reception'},
            {field: 'etatReception?.libelle', header: 'Etat reception'},
        ];
    }


    public async loadCommande(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Reception', 'list');
        isPermistted ? this.commandeService.findAll().subscribe(commandes => this.commandes = commandes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadEtatReception(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Reception', 'list');
        isPermistted ? this.etatReceptionService.findAll().subscribe(etatReceptions => this.etatReceptions = etatReceptions,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: ReceptionDto) {
        if (res.receptionItems != null) {
             res.receptionItems.forEach(d => { d.reception = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                'Commande': e.commande?.reference ,
                 //'Date reception': e.dateReception ,
                 'Description': e.description ,
                'Etat reception': e.etatReception?.libelle ,
            }
        });

        this.criteriaData = [{
        //'Commande': this.criteria.commande?.reference ? this.criteria.commande?.reference : environment.emptyForExport ,
            //'Date reception': this.criteria.dateReception ? this.criteria.dateReception : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
        //'Etat reception': this.criteria.etatReception?.libelle ? this.criteria.etatReception?.libelle : environment.emptyForExport ,
        }];
      }
}
