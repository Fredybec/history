import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {AbonneService} from 'src/app/controller/service/Abonne.service';
import {AbonneDto} from 'src/app/controller/model/Abonne.model';
import {AbonneCriteria} from 'src/app/controller/criteria/AbonneCriteria.model';


import {MagasinDto} from 'src/app/controller/model/Magasin.model';
import {MagasinService} from 'src/app/controller/service/Magasin.service';
import {StoreDto} from 'src/app/controller/model/Store.model';
import {StoreService} from 'src/app/controller/service/Store.service';

@Component({
  selector: 'app-abonne-edit-admin',
  templateUrl: './abonne-edit-admin.component.html'
})
export class AbonneEditAdminComponent extends AbstractEditController<AbonneDto, AbonneCriteria, AbonneService>   implements OnInit {

    private _storesElement = new StoreDto();

    private _validAbonneCode = true;

    private _validStoresLibelle = true;
    private _validStoresReference = true;



    constructor(private datePipe: DatePipe, private abonneService: AbonneService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  
, private storeService: StoreService
    ) {
        super(datePipe, abonneService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {

}

    public validateStores(){
        this.errorMessages = new Array();
        this.validateStoresLibelle();
        this.validateStoresReference();
    }
    public setValidation(value : boolean){
        this.validAbonneCode = value;
        this.validStoresLibelle = value;
        this.validStoresReference = value;
        }
   public addStores() {
        if( this.item.stores == null )
            this.item.stores = new Array<StoreDto>();
       this.validateStores();
       if (this.errorMessages.length === 0) {
            if(this.storesElement.id == null){
                this.item.stores.push(this.storesElement);
            }else{
                const index = this.item.stores.findIndex(e => e.id == this.storesElement.id);
                this.item.stores[index] = this.storesElement;
            }
          this.storesElement = new StoreDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deleteStore(p: StoreDto) {
        this.item.stores.forEach((element, index) => {
            if (element === p) { this.item.stores.splice(index, 1); }
        });
    }

    public editStore(p: StoreDto) {
        this.storesElement = {... p};
        this.activeTab = 0;
    }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateAbonneCode();
    }
    public validateAbonneCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validAbonneCode = false;
        } else {
            this.validAbonneCode = true;
        }
    }


    private validateStoresLibelle(){
        if (this.storesElement.libelle == null) {
        this.errorMessages.push('Libelle de la store est  invalide');
            this.validStoresLibelle = false;
        } else {
            this.validStoresLibelle = true;
        }
    }
    private validateStoresReference(){
        if (this.storesElement.reference == null) {
        this.errorMessages.push('Reference de la store est  invalide');
            this.validStoresReference = false;
        } else {
            this.validStoresReference = true;
        }
    }



    get storesElement(): StoreDto {
        if( this._storesElement == null )
            this._storesElement = new StoreDto();
         return this._storesElement;
    }

    set storesElement(value: StoreDto) {
        this._storesElement = value;
    }

    get validAbonneCode(): boolean {
        return this._validAbonneCode;
    }
    set validAbonneCode(value: boolean) {
        this._validAbonneCode = value;
    }

    get validStoresLibelle(): boolean {
        return this._validStoresLibelle;
    }
    set validStoresLibelle(value: boolean) {
        this._validStoresLibelle = value;
    }
    get validStoresReference(): boolean {
        return this._validStoresReference;
    }
    set validStoresReference(value: boolean) {
        this._validStoresReference = value;
    }
}
