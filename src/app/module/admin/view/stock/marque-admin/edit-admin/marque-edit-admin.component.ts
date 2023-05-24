import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MarqueService} from 'src/app/controller/service/Marque.service';
import {MarqueDto} from 'src/app/controller/model/Marque.model';
import {MarqueCriteria} from 'src/app/controller/criteria/MarqueCriteria.model';



@Component({
  selector: 'app-marque-edit-admin',
  templateUrl: './marque-edit-admin.component.html'
})
export class MarqueEditAdminComponent extends AbstractEditController<MarqueDto, MarqueCriteria, MarqueService>   implements OnInit {


    private _validMarqueLibelle = true;
    private _validMarqueCode = true;




    constructor(private datePipe: DatePipe, private marqueService: MarqueService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, marqueService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}

    public setValidation(value : boolean){
        this.validMarqueLibelle = value;
        this.validMarqueCode = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateMarqueLibelle();
        this.validateMarqueCode();
    }
    public validateMarqueLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validMarqueLibelle = false;
        } else {
            this.validMarqueLibelle = true;
        }
    }
    public validateMarqueCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validMarqueCode = false;
        } else {
            this.validMarqueCode = true;
        }
    }






    get validMarqueLibelle(): boolean {
        return this._validMarqueLibelle;
    }
    set validMarqueLibelle(value: boolean) {
        this._validMarqueLibelle = value;
    }
    get validMarqueCode(): boolean {
        return this._validMarqueCode;
    }
    set validMarqueCode(value: boolean) {
        this._validMarqueCode = value;
    }

}
