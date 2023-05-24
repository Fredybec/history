import {Component, OnInit} from '@angular/core';
import {PaiementCommandeService} from 'src/app/controller/service/PaiementCommande.service';
import {PaiementCommandeDto} from 'src/app/controller/model/PaiementCommande.model';
import {PaiementCommandeCriteria} from 'src/app/controller/criteria/PaiementCommandeCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { CommandeService } from 'src/app/controller/service/Commande.service';
import { ModePaiementService } from 'src/app/controller/service/ModePaiement.service';

import {CommandeDto} from 'src/app/controller/model/Commande.model';
import {ModePaiementDto} from 'src/app/controller/model/ModePaiement.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-paiement-commande-list-admin',
  templateUrl: './paiement-commande-list-admin.component.html'
})
export class PaiementCommandeListAdminComponent extends AbstractListController<PaiementCommandeDto, PaiementCommandeCriteria, PaiementCommandeService>  implements OnInit {

    fileName = 'PaiementCommande';

    commandes :Array<CommandeDto>;
    modePaiements :Array<ModePaiementDto>;
  
    constructor(datePipe: DatePipe, paiementCommandeService: PaiementCommandeService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private commandeService: CommandeService, private modePaiementService: ModePaiementService) {
        super(datePipe, paiementCommandeService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadCommande();
      this.loadModePaiement();
    }

    public async loadPaiementCommandes(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('PaiementCommande', 'list');
        isPermistted ? this.service.findAll().subscribe(paiementCommandes => this.items = paiementCommandes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'reference', header: 'Reference'},
            {field: 'datePaiement', header: 'Date paiement'},
            {field: 'montant', header: 'Montant'},
            {field: 'commande?.reference', header: 'Commande'},
            {field: 'modePaiement?.libelle', header: 'Mode paiement'},
        ];
    }


    public async loadCommande(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('PaiementCommande', 'list');
        isPermistted ? this.commandeService.findAll().subscribe(commandes => this.commandes = commandes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadModePaiement(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('PaiementCommande', 'list');
        isPermistted ? this.modePaiementService.findAll().subscribe(modePaiements => this.modePaiements = modePaiements,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: PaiementCommandeDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Reference': e.reference ,
                'Date paiement': this.datePipe.transform(e.datePaiement , 'dd/MM/yyyy hh:mm'),
                 'Montant': e.montant ,
                'Commande': e.commande?.reference ,
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
        //'Commande': this.criteria.commande?.reference ? this.criteria.commande?.reference : environment.emptyForExport ,
        //'Mode paiement': this.criteria.modePaiement?.libelle ? this.criteria.modePaiement?.libelle : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
        }];
      }
}
