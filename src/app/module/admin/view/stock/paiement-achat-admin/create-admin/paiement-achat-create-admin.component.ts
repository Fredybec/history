import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {PaiementAchatService} from 'src/app/controller/service/PaiementAchat.service';
import {PaiementAchatDto} from 'src/app/controller/model/PaiementAchat.model';
import {PaiementAchatCriteria} from 'src/app/controller/criteria/PaiementAchatCriteria.model';
import {ModePaiementDto} from 'src/app/controller/model/ModePaiement.model';
import {ModePaiementService} from 'src/app/controller/service/ModePaiement.service';
import {AchatDto} from 'src/app/controller/model/Achat.model';
import {AchatService} from 'src/app/controller/service/Achat.service';
@Component({
  selector: 'app-paiement-achat-create-admin',
  templateUrl: './paiement-achat-create-admin.component.html'
})
export class PaiementAchatCreateAdminComponent extends AbstractCreateController<PaiementAchatDto, PaiementAchatCriteria, PaiementAchatService>  implements OnInit {



   private _validPaiementAchatReference = true;
    private _validAchatReference = true;
    private _validModePaiementLibelle = true;
    private _validModePaiementCode = true;

    constructor(private datePipe: DatePipe, private paiementAchatService: PaiementAchatService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  
, private modePaiementService: ModePaiementService, private achatService: AchatService
    ) {
        super(datePipe, paiementAchatService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    this.achat = new AchatDto();
    this.achatService.findAll().subscribe((data) => this.achats = data);
    this.modePaiement = new ModePaiementDto();
    this.modePaiementService.findAll().subscribe((data) => this.modePaiements = data);
}





    public setValidation(value: boolean){
        this.validPaiementAchatReference = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validatePaiementAchatReference();
    }

    public validatePaiementAchatReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
        this.errorMessages.push('Reference non valide');
        this.validPaiementAchatReference = false;
        } else {
            this.validPaiementAchatReference = true;
        }
    }


    public async openCreateAchat(achat: string) {
    const isPermistted = await this.roleService.isPermitted('Achat', 'add');
    if(isPermistted) {
         this.achat = new AchatDto();
         this.createAchatDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateModePaiement(modePaiement: string) {
    const isPermistted = await this.roleService.isPermitted('ModePaiement', 'add');
    if(isPermistted) {
         this.modePaiement = new ModePaiementDto();
         this.createModePaiementDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get achat(): AchatDto {
        return this.achatService.item;
    }
    set achat(value: AchatDto) {
        this.achatService.item = value;
    }
    get achats(): Array<AchatDto> {
        return this.achatService.items;
    }
    set achats(value: Array<AchatDto>) {
        this.achatService.items = value;
    }
    get createAchatDialog(): boolean {
       return this.achatService.createDialog;
    }
    set createAchatDialog(value: boolean) {
        this.achatService.createDialog= value;
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



    get validPaiementAchatReference(): boolean {
        return this._validPaiementAchatReference;
    }

    set validPaiementAchatReference(value: boolean) {
         this._validPaiementAchatReference = value;
    }

    get validAchatReference(): boolean {
        return this._validAchatReference;
    }
    set validAchatReference(value: boolean) {
        this._validAchatReference = value;
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
