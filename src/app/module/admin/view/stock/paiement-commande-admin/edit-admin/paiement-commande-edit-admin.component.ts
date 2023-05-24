import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {PaiementCommandeService} from 'src/app/controller/service/PaiementCommande.service';
import {PaiementCommandeDto} from 'src/app/controller/model/PaiementCommande.model';
import {PaiementCommandeCriteria} from 'src/app/controller/criteria/PaiementCommandeCriteria.model';


import {ModePaiementDto} from 'src/app/controller/model/ModePaiement.model';
import {ModePaiementService} from 'src/app/controller/service/ModePaiement.service';
import {CommandeDto} from 'src/app/controller/model/Commande.model';
import {CommandeService} from 'src/app/controller/service/Commande.service';

@Component({
  selector: 'app-paiement-commande-edit-admin',
  templateUrl: './paiement-commande-edit-admin.component.html'
})
export class PaiementCommandeEditAdminComponent extends AbstractEditController<PaiementCommandeDto, PaiementCommandeCriteria, PaiementCommandeService>   implements OnInit {


    private _validPaiementCommandeReference = true;

    private _validCommandeReference = true;
    private _validModePaiementLibelle = true;
    private _validModePaiementCode = true;



    constructor(private datePipe: DatePipe, private paiementCommandeService: PaiementCommandeService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  
, private modePaiementService: ModePaiementService, private commandeService: CommandeService
    ) {
        super(datePipe, paiementCommandeService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    this.commande = new CommandeDto();
    this.commandeService.findAll().subscribe((data) => this.commandes = data);
    this.modePaiement = new ModePaiementDto();
    this.modePaiementService.findAll().subscribe((data) => this.modePaiements = data);
}

    public setValidation(value : boolean){
        this.validPaiementCommandeReference = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validatePaiementCommandeReference();
    }
    public validatePaiementCommandeReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
            this.errorMessages.push('Reference non valide');
            this.validPaiementCommandeReference = false;
        } else {
            this.validPaiementCommandeReference = true;
        }
    }



   public async openCreateCommande(commande: string) {
        const isPermistted = await this.roleService.isPermitted('Commande', 'edit');
        if(isPermistted) {
             this.commande = new CommandeDto();
             this.createCommandeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateModePaiement(modePaiement: string) {
        const isPermistted = await this.roleService.isPermitted('ModePaiement', 'edit');
        if(isPermistted) {
             this.modePaiement = new ModePaiementDto();
             this.createModePaiementDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get commande(): CommandeDto {
       return this.commandeService.item;
   }
  set commande(value: CommandeDto) {
        this.commandeService.item = value;
   }
   get commandes(): Array<CommandeDto> {
        return this.commandeService.items;
   }
   set commandes(value: Array<CommandeDto>) {
        this.commandeService.items = value;
   }
   get createCommandeDialog(): boolean {
       return this.commandeService.createDialog;
   }
  set createCommandeDialog(value: boolean) {
       this.commandeService.createDialog= value;
   }
   get modePaiement(): ModePaiementDto {
       return this.modePaiementService.item;
   }
  set modePaiement(value: ModePaiementDto) {
        this.modePaiementService.item = value;
   }
   get modePaiements(): Array<ModePaiementDto> {
        return this.modePaiementService.items;
   }
   set modePaiements(value: Array<ModePaiementDto>) {
        this.modePaiementService.items = value;
   }
   get createModePaiementDialog(): boolean {
       return this.modePaiementService.createDialog;
   }
  set createModePaiementDialog(value: boolean) {
       this.modePaiementService.createDialog= value;
   }


    get validPaiementCommandeReference(): boolean {
        return this._validPaiementCommandeReference;
    }
    set validPaiementCommandeReference(value: boolean) {
        this._validPaiementCommandeReference = value;
    }

    get validCommandeReference(): boolean {
        return this._validCommandeReference;
    }
    set validCommandeReference(value: boolean) {
        this._validCommandeReference = value;
    }
    get validModePaiementLibelle(): boolean {
        return this._validModePaiementLibelle;
    }
    set validModePaiementLibelle(value: boolean) {
        this._validModePaiementLibelle = value;
    }
    get validModePaiementCode(): boolean {
        return this._validModePaiementCode;
    }
    set validModePaiementCode(value: boolean) {
        this._validModePaiementCode = value;
    }
}
