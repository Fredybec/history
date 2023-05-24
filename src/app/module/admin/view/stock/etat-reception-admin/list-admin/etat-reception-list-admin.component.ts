import {Component, OnInit} from '@angular/core';
import {EtatReceptionService} from 'src/app/controller/service/EtatReception.service';
import {EtatReceptionDto} from 'src/app/controller/model/EtatReception.model';
import {EtatReceptionCriteria} from 'src/app/controller/criteria/EtatReceptionCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';



import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-etat-reception-list-admin',
  templateUrl: './etat-reception-list-admin.component.html'
})
export class EtatReceptionListAdminComponent extends AbstractListController<EtatReceptionDto, EtatReceptionCriteria, EtatReceptionService>  implements OnInit {

    fileName = 'EtatReception';

  
    constructor(datePipe: DatePipe, etatReceptionService: EtatReceptionService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
) {
        super(datePipe, etatReceptionService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadEtatReceptions(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('EtatReception', 'list');
        isPermistted ? this.service.findAll().subscribe(etatReceptions => this.items = etatReceptions,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'code', header: 'Code'},
            {field: 'style', header: 'Style'},
        ];
    }



	public initDuplicate(res: EtatReceptionDto) {
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
