import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {EtatDemandeService} from 'src/app/controller/service/EtatDemande.service';
import {EtatDemandeDto} from 'src/app/controller/model/EtatDemande.model';
import {EtatDemandeCriteria} from 'src/app/controller/criteria/EtatDemandeCriteria.model';



@Component({
  selector: 'app-etat-demande-edit-admin',
  templateUrl: './etat-demande-edit-admin.component.html'
})
export class EtatDemandeEditAdminComponent extends AbstractEditController<EtatDemandeDto, EtatDemandeCriteria, EtatDemandeService>   implements OnInit {


    private _validEtatDemandeLibelle = true;
    private _validEtatDemandeCode = true;




    constructor(private datePipe: DatePipe, private etatDemandeService: EtatDemandeService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, etatDemandeService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}

    public setValidation(value : boolean){
        this.validEtatDemandeLibelle = value;
        this.validEtatDemandeCode = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateEtatDemandeLibelle();
        this.validateEtatDemandeCode();
    }
    public validateEtatDemandeLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validEtatDemandeLibelle = false;
        } else {
            this.validEtatDemandeLibelle = true;
        }
    }
    public validateEtatDemandeCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validEtatDemandeCode = false;
        } else {
            this.validEtatDemandeCode = true;
        }
    }






    get validEtatDemandeLibelle(): boolean {
        return this._validEtatDemandeLibelle;
    }
    set validEtatDemandeLibelle(value: boolean) {
        this._validEtatDemandeLibelle = value;
    }
    get validEtatDemandeCode(): boolean {
        return this._validEtatDemandeCode;
    }
    set validEtatDemandeCode(value: boolean) {
        this._validEtatDemandeCode = value;
    }

}
