import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {PaiementVenteService} from 'src/app/controller/service/PaiementVente.service';
import {PaiementVenteDto} from 'src/app/controller/model/PaiementVente.model';
import {PaiementVenteCriteria} from 'src/app/controller/criteria/PaiementVenteCriteria.model';


import {ModePaiementDto} from 'src/app/controller/model/ModePaiement.model';
import {ModePaiementService} from 'src/app/controller/service/ModePaiement.service';
import {VenteDto} from 'src/app/controller/model/Vente.model';
import {VenteService} from 'src/app/controller/service/Vente.service';

@Component({
  selector: 'app-paiement-vente-edit-admin',
  templateUrl: './paiement-vente-edit-admin.component.html'
})
export class PaiementVenteEditAdminComponent extends AbstractEditController<PaiementVenteDto, PaiementVenteCriteria, PaiementVenteService>   implements OnInit {


    private _validPaiementVenteReference = true;

    private _validVenteReference = true;
    private _validModePaiementLibelle = true;
    private _validModePaiementCode = true;



    constructor(private datePipe: DatePipe, private paiementVenteService: PaiementVenteService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  
, private modePaiementService: ModePaiementService, private venteService: VenteService
    ) {
        super(datePipe, paiementVenteService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    this.vente = new VenteDto();
    this.venteService.findAll().subscribe((data) => this.ventes = data);
    this.modePaiement = new ModePaiementDto();
    this.modePaiementService.findAll().subscribe((data) => this.modePaiements = data);
}

    public setValidation(value : boolean){
        this.validPaiementVenteReference = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validatePaiementVenteReference();
    }
    public validatePaiementVenteReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
            this.errorMessages.push('Reference non valide');
            this.validPaiementVenteReference = false;
        } else {
            this.validPaiementVenteReference = true;
        }
    }



   public async openCreateVente(vente: string) {
        const isPermistted = await this.roleService.isPermitted('Vente', 'edit');
        if(isPermistted) {
             this.vente = new VenteDto();
             this.createVenteDialog = true;
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

   get vente(): VenteDto {
       return this.venteService.item;
   }
  set vente(value: VenteDto) {
        this.venteService.item = value;
   }
   get ventes(): Array<VenteDto> {
        return this.venteService.items;
   }
   set ventes(value: Array<VenteDto>) {
        this.venteService.items = value;
   }
   get createVenteDialog(): boolean {
       return this.venteService.createDialog;
   }
  set createVenteDialog(value: boolean) {
       this.venteService.createDialog= value;
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


    get validPaiementVenteReference(): boolean {
        return this._validPaiementVenteReference;
    }
    set validPaiementVenteReference(value: boolean) {
        this._validPaiementVenteReference = value;
    }

    get validVenteReference(): boolean {
        return this._validVenteReference;
    }
    set validVenteReference(value: boolean) {
        this._validVenteReference = value;
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
