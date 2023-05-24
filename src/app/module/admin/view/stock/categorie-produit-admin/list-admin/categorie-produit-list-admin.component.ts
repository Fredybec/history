import {Component, OnInit} from '@angular/core';
import {CategorieProduitService} from 'src/app/controller/service/CategorieProduit.service';
import {CategorieProduitDto} from 'src/app/controller/model/CategorieProduit.model';
import {CategorieProduitCriteria} from 'src/app/controller/criteria/CategorieProduitCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';



import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-categorie-produit-list-admin',
  templateUrl: './categorie-produit-list-admin.component.html'
})
export class CategorieProduitListAdminComponent extends AbstractListController<CategorieProduitDto, CategorieProduitCriteria, CategorieProduitService>  implements OnInit {

    fileName = 'CategorieProduit';

  
    constructor(datePipe: DatePipe, categorieProduitService: CategorieProduitService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
) {
        super(datePipe, categorieProduitService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadCategorieProduits(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('CategorieProduit', 'list');
        isPermistted ? this.service.findAll().subscribe(categorieProduits => this.items = categorieProduits,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'reference', header: 'Reference'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }



	public initDuplicate(res: CategorieProduitDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Reference': e.reference ,
                 'Libelle': e.libelle ,
            }
        });

        this.criteriaData = [{
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        }];
      }
}
