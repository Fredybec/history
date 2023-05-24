import {Component, OnInit} from '@angular/core';
import {BanqueService} from 'src/app/controller/service/Banque.service';
import {BanqueDto} from 'src/app/controller/model/Banque.model';
import {BanqueCriteria} from 'src/app/controller/criteria/BanqueCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';



import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-banque-list-admin',
  templateUrl: './banque-list-admin.component.html'
})
export class BanqueListAdminComponent extends AbstractListController<BanqueDto, BanqueCriteria, BanqueService>  implements OnInit {

    fileName = 'Banque';

  
    constructor(datePipe: DatePipe, banqueService: BanqueService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
) {
        super(datePipe, banqueService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadBanques(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Banque', 'list');
        isPermistted ? this.service.findAll().subscribe(banques => this.items = banques,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'code', header: 'Code'},
        ];
    }



	public initDuplicate(res: BanqueDto) {
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
