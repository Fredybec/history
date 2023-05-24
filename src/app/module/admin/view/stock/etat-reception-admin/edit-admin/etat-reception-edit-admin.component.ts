import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {EtatReceptionService} from 'src/app/controller/service/EtatReception.service';
import {EtatReceptionDto} from 'src/app/controller/model/EtatReception.model';
import {EtatReceptionCriteria} from 'src/app/controller/criteria/EtatReceptionCriteria.model';



@Component({
  selector: 'app-etat-reception-edit-admin',
  templateUrl: './etat-reception-edit-admin.component.html'
})
export class EtatReceptionEditAdminComponent extends AbstractEditController<EtatReceptionDto, EtatReceptionCriteria, EtatReceptionService>   implements OnInit {


    private _validEtatReceptionLibelle = true;
    private _validEtatReceptionCode = true;




    constructor(private datePipe: DatePipe, private etatReceptionService: EtatReceptionService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, etatReceptionService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}

    public setValidation(value : boolean){
        this.validEtatReceptionLibelle = value;
        this.validEtatReceptionCode = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateEtatReceptionLibelle();
        this.validateEtatReceptionCode();
    }
    public validateEtatReceptionLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validEtatReceptionLibelle = false;
        } else {
            this.validEtatReceptionLibelle = true;
        }
    }
    public validateEtatReceptionCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validEtatReceptionCode = false;
        } else {
            this.validEtatReceptionCode = true;
        }
    }






    get validEtatReceptionLibelle(): boolean {
        return this._validEtatReceptionLibelle;
    }
    set validEtatReceptionLibelle(value: boolean) {
        this._validEtatReceptionLibelle = value;
    }
    get validEtatReceptionCode(): boolean {
        return this._validEtatReceptionCode;
    }
    set validEtatReceptionCode(value: boolean) {
        this._validEtatReceptionCode = value;
    }

}
