import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {PaiementCommandeService} from 'src/app/controller/service/PaiementCommande.service';
import {PaiementCommandeDto} from 'src/app/controller/model/PaiementCommande.model';
import {PaiementCommandeCriteria} from 'src/app/controller/criteria/PaiementCommandeCriteria.model';

import {ModePaiementDto} from 'src/app/controller/model/ModePaiement.model';
import {ModePaiementService} from 'src/app/controller/service/ModePaiement.service';
import {CommandeDto} from 'src/app/controller/model/Commande.model';
import {CommandeService} from 'src/app/controller/service/Commande.service';
@Component({
  selector: 'app-paiement-commande-view-admin',
  templateUrl: './paiement-commande-view-admin.component.html'
})
export class PaiementCommandeViewAdminComponent extends AbstractViewController<PaiementCommandeDto, PaiementCommandeCriteria, PaiementCommandeService> implements OnInit {


    constructor(private datePipe: DatePipe, private paiementCommandeService: PaiementCommandeService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private modePaiementService: ModePaiementService, private commandeService: CommandeService
    ){
        super(datePipe, paiementCommandeService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.commande = new CommandeDto();
        this.commandeService.findAll().subscribe((data) => this.commandes = data);
        this.modePaiement = new ModePaiementDto();
        this.modePaiementService.findAll().subscribe((data) => this.modePaiements = data);
    }


    get commande(): CommandeDto {
       return this.commandeService.item;
    }
    set commande(value: CommandeDto) {
        this.commandeService.item = value;
    }
    get commandes():Array<CommandeDto> {
       return this.commandeService.items;
    }
    set commandes(value: Array<CommandeDto>) {
        this.commandeService.items = value;
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
