import {Component, OnInit} from '@angular/core';
import {MarqueService} from 'src/app/controller/service/Marque.service';
import {MarqueDto} from 'src/app/controller/model/Marque.model';
import {MarqueCriteria} from 'src/app/controller/criteria/MarqueCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';



import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-marque-list-admin',
  templateUrl: './marque-list-admin.component.html'
})
export class MarqueListAdminComponent extends AbstractListController<MarqueDto, MarqueCriteria, MarqueService>  implements OnInit {

    fileName = 'Marque';

  
    constructor(datePipe: DatePipe, marqueService: MarqueService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
) {
        super(datePipe, marqueService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadMarques(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Marque', 'list');
        isPermistted ? this.service.findAll().subscribe(marques => this.items = marques,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'code', header: 'Code'},
        ];
    }



	public initDuplicate(res: MarqueDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Code': e.code ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
        }];
      }
}
