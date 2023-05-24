import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {StoreService} from 'src/app/controller/service/Store.service';
import {StoreDto} from 'src/app/controller/model/Store.model';
import {StoreCriteria} from 'src/app/controller/criteria/StoreCriteria.model';
import {AbonneDto} from 'src/app/controller/model/Abonne.model';
import {AbonneService} from 'src/app/controller/service/Abonne.service';
import {MagasinDto} from 'src/app/controller/model/Magasin.model';
import {MagasinService} from 'src/app/controller/service/Magasin.service';
@Component({
  selector: 'app-store-create-admin',
  templateUrl: './store-create-admin.component.html'
})
export class StoreCreateAdminComponent extends AbstractCreateController<StoreDto, StoreCriteria, StoreService>  implements OnInit {

    private _magasinsElement = new MagasinDto();


   private _validStoreLibelle = true;
   private _validStoreReference = true;
    private _validAbonneCode = true;

    constructor(private datePipe: DatePipe, private storeService: StoreService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  
, private abonneService: AbonneService, private magasinService: MagasinService
    ) {
        super(datePipe, storeService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    this.abonne = new AbonneDto();
    this.abonneService.findAll().subscribe((data) => this.abonnes = data);
}



    validateMagasins(){
        this.errorMessages = new Array();
    }


    public setValidation(value: boolean){
        this.validStoreLibelle = value;
        this.validStoreReference = value;
    }

    public addMagasins() {
        if( this.item.magasins == null )
            this.item.magasins = new Array<MagasinDto>();
       this.validateMagasins();
       if (this.errorMessages.length === 0) {
              this.item.magasins.push({... this.magasinsElement});
              this.magasinsElement = new MagasinDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deleteMagasin(p: MagasinDto) {
        this.item.magasins.forEach((element, index) => {
            if (element === p) { this.item.magasins.splice(index, 1); }
        });
    }

    public editMagasin(p: MagasinDto) {
        this.magasinsElement = {... p};
        this.activeTab = 0;
    }


    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateStoreLibelle();
        this.validateStoreReference();
    }

    public validateStoreLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validStoreLibelle = false;
        } else {
            this.validStoreLibelle = true;
        }
    }
    public validateStoreReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
        this.errorMessages.push('Reference non valide');
        this.validStoreReference = false;
        } else {
            this.validStoreReference = true;
        }
    }


    public async openCreateAbonne(abonne: string) {
    const isPermistted = await this.roleService.isPermitted('Abonne', 'add');
    if(isPermistted) {
         this.abonne = new AbonneDto();
         this.createAbonneDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get abonne(): AbonneDto {
        return this.abonneService.item;
    }
    set abonne(value: AbonneDto) {
        this.abonneService.item = value;
    }
    get abonnes(): Array<AbonneDto> {
        return this.abonneService.items;
    }
    set abonnes(value: Array<AbonneDto>) {
        this.abonneService.items = value;
    }
    get createAbonneDialog(): boolean {
       return this.abonneService.createDialog;
    }
    set createAbonneDialog(value: boolean) {
        this.abonneService.createDialog= value;
    }



    get validStoreLibelle(): boolean {
        return this._validStoreLibelle;
    }

    set validStoreLibelle(value: boolean) {
         this._validStoreLibelle = value;
    }
    get validStoreReference(): boolean {
        return this._validStoreReference;
    }

    set validStoreReference(value: boolean) {
         this._validStoreReference = value;
    }

    get validAbonneCode(): boolean {
        return this._validAbonneCode;
    }
    set validAbonneCode(value: boolean) {
        this._validAbonneCode = value;
    }

    get magasinsElement(): MagasinDto {
        if( this._magasinsElement == null )
            this._magasinsElement = new MagasinDto();
        return this._magasinsElement;
    }

    set magasinsElement(value: MagasinDto) {
        this._magasinsElement = value;
    }

}
