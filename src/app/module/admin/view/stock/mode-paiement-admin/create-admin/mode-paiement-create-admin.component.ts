import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {ModePaiementService} from 'src/app/controller/service/ModePaiement.service';
import {ModePaiementDto} from 'src/app/controller/model/ModePaiement.model';
import {ModePaiementCriteria} from 'src/app/controller/criteria/ModePaiementCriteria.model';
@Component({
  selector: 'app-mode-paiement-create-admin',
  templateUrl: './mode-paiement-create-admin.component.html'
})
export class ModePaiementCreateAdminComponent extends AbstractCreateController<ModePaiementDto, ModePaiementCriteria, ModePaiementService>  implements OnInit {



   private _validModePaiementLibelle = true;
   private _validModePaiementCode = true;

    constructor(private datePipe: DatePipe, private modePaiementService: ModePaiementService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, modePaiementService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validModePaiementLibelle = value;
        this.validModePaiementCode = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateModePaiementLibelle();
        this.validateModePaiementCode();
    }

    public validateModePaiementLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validModePaiementLibelle = false;
        } else {
            this.validModePaiementLibelle = true;
        }
    }
    public validateModePaiementCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validModePaiementCode = false;
        } else {
            this.validModePaiementCode = true;
        }
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
