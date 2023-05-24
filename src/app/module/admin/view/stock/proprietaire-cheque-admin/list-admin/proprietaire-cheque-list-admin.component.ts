import {Component, OnInit} from '@angular/core';
import {ProprietaireChequeService} from 'src/app/controller/service/ProprietaireCheque.service';
import {ProprietaireChequeDto} from 'src/app/controller/model/ProprietaireCheque.model';
import {ProprietaireChequeCriteria} from 'src/app/controller/criteria/ProprietaireChequeCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';



import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-proprietaire-cheque-list-admin',
  templateUrl: './proprietaire-cheque-list-admin.component.html'
})
export class ProprietaireChequeListAdminComponent extends AbstractListController<ProprietaireChequeDto, ProprietaireChequeCriteria, ProprietaireChequeService>  implements OnInit {

    fileName = 'ProprietaireCheque';

  
    constructor(datePipe: DatePipe, proprietaireChequeService: ProprietaireChequeService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
) {
        super(datePipe, proprietaireChequeService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadProprietaireCheques(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ProprietaireCheque', 'list');
        isPermistted ? this.service.findAll().subscribe(proprietaireCheques => this.items = proprietaireCheques,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'nom', header: 'Nom'},
            {field: 'code', header: 'Code'},
        ];
    }



	public initDuplicate(res: ProprietaireChequeDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Nom': e.nom ,
                 'Code': e.code ,
            }
        });

        this.criteriaData = [{
            'Nom': this.criteria.nom ? this.criteria.nom : environment.emptyForExport ,
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
        }];
      }
}
