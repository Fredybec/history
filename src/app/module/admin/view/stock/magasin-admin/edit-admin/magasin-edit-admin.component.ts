import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MagasinService} from 'src/app/controller/service/Magasin.service';
import {MagasinDto} from 'src/app/controller/model/Magasin.model';
import {MagasinCriteria} from 'src/app/controller/criteria/MagasinCriteria.model';


import {StoreDto} from 'src/app/controller/model/Store.model';
import {StoreService} from 'src/app/controller/service/Store.service';

@Component({
  selector: 'app-magasin-edit-admin',
  templateUrl: './magasin-edit-admin.component.html'
})
export class MagasinEditAdminComponent extends AbstractEditController<MagasinDto, MagasinCriteria, MagasinService>   implements OnInit {



    private _validStoreLibelle = true;
    private _validStoreReference = true;



    constructor(private datePipe: DatePipe, private magasinService: MagasinService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  
, private storeService: StoreService
    ) {
        super(datePipe, magasinService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    this.store = new StoreDto();
    this.storeService.findAll().subscribe((data) => this.stores = data);
}

    public setValidation(value : boolean){
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }



   public async openCreateStore(store: string) {
        const isPermistted = await this.roleService.isPermitted('Store', 'edit');
        if(isPermistted) {
             this.store = new StoreDto();
             this.createStoreDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get store(): StoreDto {
       return this.storeService.item;
   }
  set store(value: StoreDto) {
        this.storeService.item = value;
   }
   get stores(): Array<StoreDto> {
        return this.storeService.items;
   }
   set stores(value: Array<StoreDto>) {
        this.storeService.items = value;
   }
   get createStoreDialog(): boolean {
       return this.storeService.createDialog;
   }
  set createStoreDialog(value: boolean) {
       this.storeService.createDialog= value;
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
}
