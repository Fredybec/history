import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {BanqueService} from 'src/app/controller/service/Banque.service';
import {BanqueDto} from 'src/app/controller/model/Banque.model';
import {BanqueCriteria} from 'src/app/controller/criteria/BanqueCriteria.model';



@Component({
  selector: 'app-banque-edit-admin',
  templateUrl: './banque-edit-admin.component.html'
})
export class BanqueEditAdminComponent extends AbstractEditController<BanqueDto, BanqueCriteria, BanqueService>   implements OnInit {


    private _validBanqueLibelle = true;
    private _validBanqueCode = true;




    constructor(private datePipe: DatePipe, private banqueService: BanqueService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, banqueService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}

    public setValidation(value : boolean){
        this.validBanqueLibelle = value;
        this.validBanqueCode = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateBanqueLibelle();
        this.validateBanqueCode();
    }
    public validateBanqueLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validBanqueLibelle = false;
        } else {
            this.validBanqueLibelle = true;
        }
    }
    public validateBanqueCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validBanqueCode = false;
        } else {
            this.validBanqueCode = true;
        }
    }






    get validBanqueLibelle(): boolean {
        return this._validBanqueLibelle;
    }
    set validBanqueLibelle(value: boolean) {
        this._validBanqueLibelle = value;
    }
    get validBanqueCode(): boolean {
        return this._validBanqueCode;
    }
    set validBanqueCode(value: boolean) {
        this._validBanqueCode = value;
    }

}
