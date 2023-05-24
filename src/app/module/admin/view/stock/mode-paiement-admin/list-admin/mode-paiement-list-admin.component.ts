import {Component, OnInit} from '@angular/core';
import {ModePaiementService} from 'src/app/controller/service/ModePaiement.service';
import {ModePaiementDto} from 'src/app/controller/model/ModePaiement.model';
import {ModePaiementCriteria} from 'src/app/controller/criteria/ModePaiementCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';



import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-mode-paiement-list-admin',
  templateUrl: './mode-paiement-list-admin.component.html'
})
export class ModePaiementListAdminComponent extends AbstractListController<ModePaiementDto, ModePaiementCriteria, ModePaiementService>  implements OnInit {

    fileName = 'ModePaiement';

  
    constructor(datePipe: DatePipe, modePaiementService: ModePaiementService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
) {
        super(datePipe, modePaiementService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadModePaiements(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ModePaiement', 'list');
        isPermistted ? this.service.findAll().subscribe(modePaiements => this.items = modePaiements,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'code', header: 'Code'},
            {field: 'style', header: 'Style'},
        ];
    }



	public initDuplicate(res: ModePaiementDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Code': e.code ,
                 'Style': e.style ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Style': this.criteria.style ? this.criteria.style : environment.emptyForExport ,
        }];
      }
}
