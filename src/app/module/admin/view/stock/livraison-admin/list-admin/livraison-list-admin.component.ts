import {Component, OnInit} from '@angular/core';
import {LivraisonService} from 'src/app/controller/service/Livraison.service';
import {LivraisonDto} from 'src/app/controller/model/Livraison.model';
import {LivraisonCriteria} from 'src/app/controller/criteria/LivraisonCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { DemandeService } from 'src/app/controller/service/Demande.service';
import { EtatLivraisonService } from 'src/app/controller/service/EtatLivraison.service';
import { ClientService } from 'src/app/controller/service/Client.service';

import {LivraisonItemDto} from 'src/app/controller/model/LivraisonItem.model';
import {EtatLivraisonDto} from 'src/app/controller/model/EtatLivraison.model';
import {DemandeDto} from 'src/app/controller/model/Demande.model';
import {ClientDto} from 'src/app/controller/model/Client.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-livraison-list-admin',
  templateUrl: './livraison-list-admin.component.html'
})
export class LivraisonListAdminComponent extends AbstractListController<LivraisonDto, LivraisonCriteria, LivraisonService>  implements OnInit {

    fileName = 'Livraison';

    demandes :Array<DemandeDto>;
    etatLivraisons :Array<EtatLivraisonDto>;
    clients :Array<ClientDto>;
  
    constructor(datePipe: DatePipe, livraisonService: LivraisonService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private demandeService: DemandeService, private etatLivraisonService: EtatLivraisonService, private clientService: ClientService) {
        super(datePipe, livraisonService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadDemande();
      this.loadEtatLivraison();
      this.loadClient();
    }

    public async loadLivraisons(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Livraison', 'list');
        isPermistted ? this.service.findAll().subscribe(livraisons => this.items = livraisons,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'demande?.id', header: 'Demande'},
            {field: 'dateLivraison', header: 'Date livraison'},
            {field: 'etatLivraison?.libelle', header: 'Etat livraison'},
            {field: 'client?.nom', header: 'Client'},
        ];
    }


    public async loadDemande(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Livraison', 'list');
        isPermistted ? this.demandeService.findAll().subscribe(demandes => this.demandes = demandes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadEtatLivraison(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Livraison', 'list');
        isPermistted ? this.etatLivraisonService.findAll().subscribe(etatLivraisons => this.etatLivraisons = etatLivraisons,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadClient(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Livraison', 'list');
        isPermistted ? this.clientService.findAll().subscribe(clients => this.clients = clients,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: LivraisonDto) {
        if (res.livraisonItems != null) {
             res.livraisonItems.forEach(d => { d.livraison = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                'Demande': e.demande?.id ,
                'Date livraison': this.datePipe.transform(e.dateLivraison , 'dd/MM/yyyy hh:mm'),
                'Etat livraison': e.etatLivraison?.libelle ,
                'Client': e.client?.nom ,
            }
        });

        this.criteriaData = [{
        //'Demande': this.criteria.demande?.id ? this.criteria.demande?.id : environment.emptyForExport ,
            'Date livraison Min': this.criteria.dateLivraisonFrom ? this.datePipe.transform(this.criteria.dateLivraisonFrom , this.dateFormat) : environment.emptyForExport ,
            'Date livraison Max': this.criteria.dateLivraisonTo ? this.datePipe.transform(this.criteria.dateLivraisonTo , this.dateFormat) : environment.emptyForExport ,
        //'Etat livraison': this.criteria.etatLivraison?.libelle ? this.criteria.etatLivraison?.libelle : environment.emptyForExport ,
        //'Client': this.criteria.client?.nom ? this.criteria.client?.nom : environment.emptyForExport ,
        }];
      }
}
