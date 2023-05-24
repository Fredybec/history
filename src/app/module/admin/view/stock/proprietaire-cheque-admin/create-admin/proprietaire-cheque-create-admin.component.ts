import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {ProprietaireChequeService} from 'src/app/controller/service/ProprietaireCheque.service';
import {ProprietaireChequeDto} from 'src/app/controller/model/ProprietaireCheque.model';
import {ProprietaireChequeCriteria} from 'src/app/controller/criteria/ProprietaireChequeCriteria.model';
@Component({
  selector: 'app-proprietaire-cheque-create-admin',
  templateUrl: './proprietaire-cheque-create-admin.component.html'
})
export class ProprietaireChequeCreateAdminComponent extends AbstractCreateController<ProprietaireChequeDto, ProprietaireChequeCriteria, ProprietaireChequeService>  implements OnInit {



   private _validProprietaireChequeNom = true;
   private _validProprietaireChequeCode = true;

    constructor(private datePipe: DatePipe, private proprietaireChequeService: ProprietaireChequeService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, proprietaireChequeService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validProprietaireChequeNom = value;
        this.validProprietaireChequeCode = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateProprietaireChequeNom();
        this.validateProprietaireChequeCode();
    }

    public validateProprietaireChequeNom(){
        if (this.stringUtilService.isEmpty(this.item.nom)) {
        this.errorMessages.push('Nom non valide');
        this.validProprietaireChequeNom = false;
        } else {
            this.validProprietaireChequeNom = true;
        }
    }
    public validateProprietaireChequeCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validProprietaireChequeCode = false;
        } else {
            this.validProprietaireChequeCode = true;
        }
    }






    get validProprietaireChequeNom(): boolean {
        return this._validProprietaireChequeNom;
    }

    set validProprietaireChequeNom(value: boolean) {
         this._validProprietaireChequeNom = value;
    }
    get validProprietaireChequeCode(): boolean {
        return this._validProprietaireChequeCode;
    }

    set validProprietaireChequeCode(value: boolean) {
         this._validProprietaireChequeCode = value;
    }



}
