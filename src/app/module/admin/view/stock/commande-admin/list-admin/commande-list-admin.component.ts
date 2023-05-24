import {Component, OnInit} from '@angular/core';
import {CommandeService} from 'src/app/controller/service/Commande.service';
import {CommandeDto} from 'src/app/controller/model/Commande.model';
import {CommandeCriteria} from 'src/app/controller/criteria/CommandeCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { ClientService } from 'src/app/controller/service/Client.service';
import { StoreService } from 'src/app/controller/service/Store.service';
import { EtatCommandeService } from 'src/app/controller/service/EtatCommande.service';

import {EtatCommandeDto} from 'src/app/controller/model/EtatCommande.model';
import {StoreDto} from 'src/app/controller/model/Store.model';
import {CommandeItemDto} from 'src/app/controller/model/CommandeItem.model';
import {ReceptionDto} from 'src/app/controller/model/Reception.model';
import {ClientDto} from 'src/app/controller/model/Client.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-commande-list-admin',
  templateUrl: './commande-list-admin.component.html'
})
export class CommandeListAdminComponent extends AbstractListController<CommandeDto, CommandeCriteria, CommandeService>  implements OnInit {

    fileName = 'Commande';

    clients :Array<ClientDto>;
    stores :Array<StoreDto>;
    etatCommandes :Array<EtatCommandeDto>;
  
    constructor(datePipe: DatePipe, commandeService: CommandeService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private clientService: ClientService, private storeService: StoreService, private etatCommandeService: EtatCommandeService) {
        super(datePipe, commandeService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadClient();
      this.loadStore();
      this.loadEtatCommande();
    }

    public async loadCommandes(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Commande', 'list');
        isPermistted ? this.service.findAll().subscribe(commandes => this.items = commandes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'reference', header: 'Reference'},
            {field: 'dateCommande', header: 'Date commande'},
            {field: 'total', header: 'Total'},
            {field: 'client?.nom', header: 'Client'},
            {field: 'totalePaye', header: 'Totale paye'},
            {field: 'store?.libelle', header: 'Store'},
            {field: 'etatCommande?.libelle', header: 'Etat commande'},
        ];
    }


    public async loadClient(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Commande', 'list');
        isPermistted ? this.clientService.findAll().subscribe(clients => this.clients = clients,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadStore(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Commande', 'list');
        isPermistted ? this.storeService.findAll().subscribe(stores => this.stores = stores,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadEtatCommande(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Commande', 'list');
        isPermistted ? this.etatCommandeService.findAll().subscribe(etatCommandes => this.etatCommandes = etatCommandes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: CommandeDto) {
        if (res.receptions != null) {
             res.receptions.forEach(d => { d.commande = null; d.id = null; });
        }
        if (res.commandeItems != null) {
             res.commandeItems.forEach(d => { d.commande = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Reference': e.reference ,
                'Date commande': this.datePipe.transform(e.dateCommande , 'dd/MM/yyyy hh:mm'),
                 'Total': e.total ,
                'Client': e.client?.nom ,
                 'Totale paye': e.totalePaye ,
                'Store': e.store?.libelle ,
                'Etat commande': e.etatCommande?.libelle ,
            }
        });

        this.criteriaData = [{
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
            'Date commande Min': this.criteria.dateCommandeFrom ? this.datePipe.transform(this.criteria.dateCommandeFrom , this.dateFormat) : environment.emptyForExport ,
            'Date commande Max': this.criteria.dateCommandeTo ? this.datePipe.transform(this.criteria.dateCommandeTo , this.dateFormat) : environment.emptyForExport ,
            'Total Min': this.criteria.totalMin ? this.criteria.totalMin : environment.emptyForExport ,
            'Total Max': this.criteria.totalMax ? this.criteria.totalMax : environment.emptyForExport ,
        //'Client': this.criteria.client?.nom ? this.criteria.client?.nom : environment.emptyForExport ,
            'Totale paye Min': this.criteria.totalePayeMin ? this.criteria.totalePayeMin : environment.emptyForExport ,
            'Totale paye Max': this.criteria.totalePayeMax ? this.criteria.totalePayeMax : environment.emptyForExport ,
        //'Store': this.criteria.store?.libelle ? this.criteria.store?.libelle : environment.emptyForExport ,
        //'Etat commande': this.criteria.etatCommande?.libelle ? this.criteria.etatCommande?.libelle : environment.emptyForExport ,
        }];
      }
}
