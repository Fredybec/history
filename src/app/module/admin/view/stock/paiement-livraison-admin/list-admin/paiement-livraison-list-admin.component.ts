import {Component, OnInit} from '@angular/core';
import {PaiementLivraisonService} from 'src/app/controller/service/PaiementLivraison.service';
import {PaiementLivraisonDto} from 'src/app/controller/model/PaiementLivraison.model';
import {PaiementLivraisonCriteria} from 'src/app/controller/criteria/PaiementLivraisonCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { LivraisonService } from 'src/app/controller/service/Livraison.service';
import { VenteService } from 'src/app/controller/service/Vente.service';
import { ModePaiementService } from 'src/app/controller/service/ModePaiement.service';

import {VenteDto} from 'src/app/controller/model/Vente.model';
import {LivraisonDto} from 'src/app/controller/model/Livraison.model';
import {ModePaiementDto} from 'src/app/controller/model/ModePaiement.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-paiement-livraison-list-admin',
  templateUrl: './paiement-livraison-list-admin.component.html'
})
export class PaiementLivraisonListAdminComponent extends AbstractListController<PaiementLivraisonDto, PaiementLivraisonCriteria, PaiementLivraisonService>  implements OnInit {

    fileName = 'PaiementLivraison';

    livraisons :Array<LivraisonDto>;
    ventes :Array<VenteDto>;
    modePaiements :Array<ModePaiementDto>;
  
    constructor(datePipe: DatePipe, paiementLivraisonService: PaiementLivraisonService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private livraisonService: LivraisonService, private venteService: VenteService, private modePaiementService: ModePaiementService) {
        super(datePipe, paiementLivraisonService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadLivraison();
      this.loadVente();
      this.loadModePaiement();
    }

    public async loadPaiementLivraisons(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('PaiementLivraison', 'list');
        isPermistted ? this.service.findAll().subscribe(paiementLivraisons => this.items = paiementLivraisons,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'reference', header: 'Reference'},
            {field: 'dateLivraison', header: 'Date livraison'},
            {field: 'montant', header: 'Montant'},
            {field: 'livraison?.id', header: 'Livraison'},
            {field: 'vente?.reference', header: 'Vente'},
            {field: 'modePaiement?.libelle', header: 'Mode paiement'},
        ];
    }


    public async loadLivraison(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('PaiementLivraison', 'list');
        isPermistted ? this.livraisonService.findAll().subscribe(livraisons => this.livraisons = livraisons,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadVente(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('PaiementLivraison', 'list');
        isPermistted ? this.venteService.findAll().subscribe(ventes => this.ventes = ventes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadModePaiement(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('PaiementLivraison', 'list');
        isPermistted ? this.modePaiementService.findAll().subscribe(modePaiements => this.modePaiements = modePaiements,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: PaiementLivraisonDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Reference': e.reference ,
                'Date livraison': this.datePipe.transform(e.dateLivraison , 'dd/MM/yyyy hh:mm'),
                 'Montant': e.montant ,
                'Livraison': e.livraison?.id ,
                'Vente': e.vente?.reference ,
                'Mode paiement': e.modePaiement?.libelle ,
                 'Description': e.description ,
            }
        });

        this.criteriaData = [{
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
            'Date livraison Min': this.criteria.dateLivraisonFrom ? this.datePipe.transform(this.criteria.dateLivraisonFrom , this.dateFormat) : environment.emptyForExport ,
            'Date livraison Max': this.criteria.dateLivraisonTo ? this.datePipe.transform(this.criteria.dateLivraisonTo , this.dateFormat) : environment.emptyForExport ,
            'Montant Min': this.criteria.montantMin ? this.criteria.montantMin : environment.emptyForExport ,
            'Montant Max': this.criteria.montantMax ? this.criteria.montantMax : environment.emptyForExport ,
        //'Livraison': this.criteria.livraison?.id ? this.criteria.livraison?.id : environment.emptyForExport ,
        //'Vente': this.criteria.vente?.reference ? this.criteria.vente?.reference : environment.emptyForExport ,
        //'Mode paiement': this.criteria.modePaiement?.libelle ? this.criteria.modePaiement?.libelle : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
        }];
      }
}
