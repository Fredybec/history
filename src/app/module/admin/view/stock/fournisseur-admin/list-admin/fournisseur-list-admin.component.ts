import {Component, OnInit} from '@angular/core';
import {FournisseurService} from 'src/app/controller/service/Fournisseur.service';
import {FournisseurDto} from 'src/app/controller/model/Fournisseur.model';
import {FournisseurCriteria} from 'src/app/controller/criteria/FournisseurCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';



import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-fournisseur-list-admin',
  templateUrl: './fournisseur-list-admin.component.html'
})
export class FournisseurListAdminComponent extends AbstractListController<FournisseurDto, FournisseurCriteria, FournisseurService>  implements OnInit {

    fileName = 'Fournisseur';

  
    constructor(datePipe: DatePipe, fournisseurService: FournisseurService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
) {
        super(datePipe, fournisseurService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadFournisseurs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Fournisseur', 'list');
        isPermistted ? this.service.findAll().subscribe(fournisseurs => this.items = fournisseurs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'ice', header: 'Ice'},
            {field: 'nom', header: 'Nom'},
            {field: 'tel', header: 'Tel'},
            {field: 'email', header: 'Email'},
            {field: 'adresse', header: 'Adresse'},
            {field: 'creance', header: 'Creance'},
        ];
    }



	public initDuplicate(res: FournisseurDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Ice': e.ice ,
                 'Nom': e.nom ,
                 'Tel': e.tel ,
                 'Email': e.email ,
                 'Adresse': e.adresse ,
                 'Description': e.description ,
                 'Creance': e.creance ,
            }
        });

        this.criteriaData = [{
            'Ice': this.criteria.ice ? this.criteria.ice : environment.emptyForExport ,
            'Nom': this.criteria.nom ? this.criteria.nom : environment.emptyForExport ,
            'Tel': this.criteria.tel ? this.criteria.tel : environment.emptyForExport ,
            'Email': this.criteria.email ? this.criteria.email : environment.emptyForExport ,
            'Adresse': this.criteria.adresse ? this.criteria.adresse : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
            'Creance Min': this.criteria.creanceMin ? this.criteria.creanceMin : environment.emptyForExport ,
            'Creance Max': this.criteria.creanceMax ? this.criteria.creanceMax : environment.emptyForExport ,
        }];
      }
}
