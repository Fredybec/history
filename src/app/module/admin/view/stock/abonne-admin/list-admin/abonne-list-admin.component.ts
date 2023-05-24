import {Component, OnInit} from '@angular/core';
import {AbonneService} from 'src/app/controller/service/Abonne.service';
import {AbonneDto} from 'src/app/controller/model/Abonne.model';
import {AbonneCriteria} from 'src/app/controller/criteria/AbonneCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';



import {StoreDto} from 'src/app/controller/model/Store.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-abonne-list-admin',
  templateUrl: './abonne-list-admin.component.html'
})
export class AbonneListAdminComponent extends AbstractListController<AbonneDto, AbonneCriteria, AbonneService>  implements OnInit {

    fileName = 'Abonne';

     yesOrNoBloqued :any[] =[];
  
    constructor(datePipe: DatePipe, abonneService: AbonneService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
) {
        super(datePipe, abonneService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    this.yesOrNoBloqued =  [{label: 'Bloqued', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    }

    public async loadAbonnes(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Abonne', 'list');
        isPermistted ? this.service.findAll().subscribe(abonnes => this.items = abonnes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'adresse', header: 'Adresse'},
            {field: 'bloqued', header: 'Bloqued'},
            {field: 'dateCreation', header: 'Date creation'},
            {field: 'email', header: 'Email'},
            {field: 'tel', header: 'Tel'},
            {field: 'logo', header: 'Logo'},
            {field: 'nom', header: 'Nom'},
            {field: 'prenom', header: 'Prenom'},
            {field: 'nomSociete', header: 'Nom societe'},
            {field: 'pathBackUp', header: 'Path back up'},
            {field: 'patente', header: 'Patente'},
            {field: 'rc', header: 'Rc'},
            {field: 'cnss', header: 'Cnss'},
            {field: 'ifisc', header: 'Ifisc'},
            {field: 'ice', header: 'Ice'},
        ];
    }



	public initDuplicate(res: AbonneDto) {
        if (res.stores != null) {
             res.stores.forEach(d => { d.abonne = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Adresse': e.adresse ,
                'Bloqued': e.bloqued? 'Vrai' : 'Faux' ,
                'Date creation': this.datePipe.transform(e.dateCreation , 'dd/MM/yyyy hh:mm'),
                 'Email': e.email ,
                 'Tel': e.tel ,
                 'Logo': e.logo ,
                 'Nom': e.nom ,
                 'Prenom': e.prenom ,
                 'Nom societe': e.nomSociete ,
                 'Path back up': e.pathBackUp ,
                 'Patente': e.patente ,
                 'Rc': e.rc ,
                 'Cnss': e.cnss ,
                 'Ifisc': e.ifisc ,
                 'Ice': e.ice ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Adresse': this.criteria.adresse ? this.criteria.adresse : environment.emptyForExport ,
            'Bloqued': this.criteria.bloqued ? (this.criteria.bloqued ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Date creation Min': this.criteria.dateCreationFrom ? this.datePipe.transform(this.criteria.dateCreationFrom , this.dateFormat) : environment.emptyForExport ,
            'Date creation Max': this.criteria.dateCreationTo ? this.datePipe.transform(this.criteria.dateCreationTo , this.dateFormat) : environment.emptyForExport ,
            'Email': this.criteria.email ? this.criteria.email : environment.emptyForExport ,
            'Tel': this.criteria.tel ? this.criteria.tel : environment.emptyForExport ,
            'Logo': this.criteria.logo ? this.criteria.logo : environment.emptyForExport ,
            'Nom': this.criteria.nom ? this.criteria.nom : environment.emptyForExport ,
            'Prenom': this.criteria.prenom ? this.criteria.prenom : environment.emptyForExport ,
            'Nom societe': this.criteria.nomSociete ? this.criteria.nomSociete : environment.emptyForExport ,
            'Path back up': this.criteria.pathBackUp ? this.criteria.pathBackUp : environment.emptyForExport ,
            'Patente': this.criteria.patente ? this.criteria.patente : environment.emptyForExport ,
            'Rc': this.criteria.rc ? this.criteria.rc : environment.emptyForExport ,
            'Cnss': this.criteria.cnss ? this.criteria.cnss : environment.emptyForExport ,
            'Ifisc': this.criteria.ifisc ? this.criteria.ifisc : environment.emptyForExport ,
            'Ice': this.criteria.ice ? this.criteria.ice : environment.emptyForExport ,
        }];
      }
}
