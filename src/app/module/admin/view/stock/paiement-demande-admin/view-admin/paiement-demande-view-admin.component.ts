import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {PaiementDemandeService} from 'src/app/controller/service/PaiementDemande.service';
import {PaiementDemandeDto} from 'src/app/controller/model/PaiementDemande.model';
import {PaiementDemandeCriteria} from 'src/app/controller/criteria/PaiementDemandeCriteria.model';

import {ModePaiementDto} from 'src/app/controller/model/ModePaiement.model';
import {ModePaiementService} from 'src/app/controller/service/ModePaiement.service';
import {DemandeDto} from 'src/app/controller/model/Demande.model';
import {DemandeService} from 'src/app/controller/service/Demande.service';
@Component({
  selector: 'app-paiement-demande-view-admin',
  templateUrl: './paiement-demande-view-admin.component.html'
})
export class PaiementDemandeViewAdminComponent extends AbstractViewController<PaiementDemandeDto, PaiementDemandeCriteria, PaiementDemandeService> implements OnInit {


    constructor(private datePipe: DatePipe, private paiementDemandeService: PaiementDemandeService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private modePaiementService: ModePaiementService, private demandeService: DemandeService
    ){
        super(datePipe, paiementDemandeService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.demande = new DemandeDto();
        this.demandeService.findAll().subscribe((data) => this.demandes = data);
        this.modePaiement = new ModePaiementDto();
        this.modePaiementService.findAll().subscribe((data) => this.modePaiements = data);
    }


    get demande(): DemandeDto {
       return this.demandeService.item;
    }
    set demande(value: DemandeDto) {
        this.demandeService.item = value;
    }
    get demandes():Array<DemandeDto> {
       return this.demandeService.items;
    }
    set demandes(value: Array<DemandeDto>) {
        this.demandeService.items = value;
    }
    get modePaiement(): ModePaiementDto {
       return this.modePaiementService.item;
    }
    set modePaiement(value: ModePaiementDto) {
        this.modePaiementService.item = value;
    }
    get modePaiements():Array<ModePaiementDto> {
       return this.modePaiementService.items;
    }
    set modePaiements(value: Array<ModePaiementDto>) {
        this.modePaiementService.items = value;
    }


}
