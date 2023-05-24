import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {UniteMesureService} from 'src/app/controller/service/UniteMesure.service';
import {UniteMesureDto} from 'src/app/controller/model/UniteMesure.model';
import {UniteMesureCriteria} from 'src/app/controller/criteria/UniteMesureCriteria.model';
@Component({
  selector: 'app-unite-mesure-create-admin',
  templateUrl: './unite-mesure-create-admin.component.html'
})
export class UniteMesureCreateAdminComponent extends AbstractCreateController<UniteMesureDto, UniteMesureCriteria, UniteMesureService>  implements OnInit {



   private _validUniteMesureLibelle = true;
   private _validUniteMesureCode = true;

    constructor(private datePipe: DatePipe, private uniteMesureService: UniteMesureService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, uniteMesureService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validUniteMesureLibelle = value;
        this.validUniteMesureCode = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateUniteMesureLibelle();
        this.validateUniteMesureCode();
    }

    public validateUniteMesureLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validUniteMesureLibelle = false;
        } else {
            this.validUniteMesureLibelle = true;
        }
    }
    public validateUniteMesureCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validUniteMesureCode = false;
        } else {
            this.validUniteMesureCode = true;
        }
    }






    get validUniteMesureLibelle(): boolean {
        return this._validUniteMesureLibelle;
    }

    set validUniteMesureLibelle(value: boolean) {
         this._validUniteMesureLibelle = value;
    }
    get validUniteMesureCode(): boolean {
        return this._validUniteMesureCode;
    }

    set validUniteMesureCode(value: boolean) {
         this._validUniteMesureCode = value;
    }



}
