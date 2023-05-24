import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {EtatCommandeService} from 'src/app/controller/service/EtatCommande.service';
import {EtatCommandeDto} from 'src/app/controller/model/EtatCommande.model';
import {EtatCommandeCriteria} from 'src/app/controller/criteria/EtatCommandeCriteria.model';



@Component({
  selector: 'app-etat-commande-edit-admin',
  templateUrl: './etat-commande-edit-admin.component.html'
})
export class EtatCommandeEditAdminComponent extends AbstractEditController<EtatCommandeDto, EtatCommandeCriteria, EtatCommandeService>   implements OnInit {


    private _validEtatCommandeLibelle = true;
    private _validEtatCommandeCode = true;




    constructor(private datePipe: DatePipe, private etatCommandeService: EtatCommandeService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, etatCommandeService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}

    public setValidation(value : boolean){
        this.validEtatCommandeLibelle = value;
        this.validEtatCommandeCode = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateEtatCommandeLibelle();
        this.validateEtatCommandeCode();
    }
    public validateEtatCommandeLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validEtatCommandeLibelle = false;
        } else {
            this.validEtatCommandeLibelle = true;
        }
    }
    public validateEtatCommandeCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validEtatCommandeCode = false;
        } else {
            this.validEtatCommandeCode = true;
        }
    }






    get validEtatCommandeLibelle(): boolean {
        return this._validEtatCommandeLibelle;
    }
    set validEtatCommandeLibelle(value: boolean) {
        this._validEtatCommandeLibelle = value;
    }
    get validEtatCommandeCode(): boolean {
        return this._validEtatCommandeCode;
    }
    set validEtatCommandeCode(value: boolean) {
        this._validEtatCommandeCode = value;
    }

}
