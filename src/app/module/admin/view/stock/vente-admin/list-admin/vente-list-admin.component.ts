import {Component, OnInit} from '@angular/core';
import {VenteService} from 'src/app/controller/service/Vente.service';
import {VenteDto} from 'src/app/controller/model/Vente.model';
import {VenteCriteria} from 'src/app/controller/criteria/VenteCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { ClientService } from 'src/app/controller/service/Client.service';

import {VenteItemDto} from 'src/app/controller/model/VenteItem.model';
import {PaiementVenteDto} from 'src/app/controller/model/PaiementVente.model';
import {ClientDto} from 'src/app/controller/model/Client.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-vente-list-admin',
  templateUrl: './vente-list-admin.component.html'
})
export class VenteListAdminComponent extends AbstractListController<VenteDto, VenteCriteria, VenteService>  implements OnInit {

    fileName = 'Vente';

    clients :Array<ClientDto>;
  
    constructor(datePipe: DatePipe, venteService: VenteService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private clientService: ClientService) {
        super(datePipe, venteService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadClient();
    }

    public async loadVentes(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Vente', 'list');
        isPermistted ? this.service.findAll().subscribe(ventes => this.items = ventes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'reference', header: 'Reference'},
            {field: 'dateVente', header: 'Date vente'},
            {field: 'total', header: 'Total'},
            {field: 'totalPaye', header: 'Total paye'},
            {field: 'client?.nom', header: 'Client'},
        ];
    }


    public async loadClient(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Vente', 'list');
        isPermistted ? this.clientService.findAll().subscribe(clients => this.clients = clients,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: VenteDto) {
        if (res.paiementVentes != null) {
             res.paiementVentes.forEach(d => { d.vente = null; d.id = null; });
        }
        if (res.venteItems != null) {
             res.venteItems.forEach(d => { d.vente = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Reference': e.reference ,
                'Date vente': this.datePipe.transform(e.dateVente , 'dd/MM/yyyy hh:mm'),
                 'Total': e.total ,
                 'Total paye': e.totalPaye ,
                 'Description': e.description ,
                'Client': e.client?.nom ,
            }
        });

        this.criteriaData = [{
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
            'Date vente Min': this.criteria.dateVenteFrom ? this.datePipe.transform(this.criteria.dateVenteFrom , this.dateFormat) : environment.emptyForExport ,
            'Date vente Max': this.criteria.dateVenteTo ? this.datePipe.transform(this.criteria.dateVenteTo , this.dateFormat) : environment.emptyForExport ,
            'Total Min': this.criteria.totalMin ? this.criteria.totalMin : environment.emptyForExport ,
            'Total Max': this.criteria.totalMax ? this.criteria.totalMax : environment.emptyForExport ,
            'Total paye Min': this.criteria.totalPayeMin ? this.criteria.totalPayeMin : environment.emptyForExport ,
            'Total paye Max': this.criteria.totalPayeMax ? this.criteria.totalPayeMax : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
        //'Client': this.criteria.client?.nom ? this.criteria.client?.nom : environment.emptyForExport ,
        }];
      }
}
