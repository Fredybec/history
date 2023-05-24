import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {MagasinService} from 'src/app/controller/service/Magasin.service';
import {MagasinDto} from 'src/app/controller/model/Magasin.model';
import {MagasinCriteria} from 'src/app/controller/criteria/MagasinCriteria.model';

import {StoreDto} from 'src/app/controller/model/Store.model';
import {StoreService} from 'src/app/controller/service/Store.service';
@Component({
  selector: 'app-magasin-view-admin',
  templateUrl: './magasin-view-admin.component.html'
})
export class MagasinViewAdminComponent extends AbstractViewController<MagasinDto, MagasinCriteria, MagasinService> implements OnInit {


    constructor(private datePipe: DatePipe, private magasinService: MagasinService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private storeService: StoreService
    ){
        super(datePipe, magasinService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.store = new StoreDto();
        this.storeService.findAll().subscribe((data) => this.stores = data);
    }


    get store(): StoreDto {
       return this.storeService.item;
    }
    set store(value: StoreDto) {
        this.storeService.item = value;
    }
    get stores():Array<StoreDto> {
       return this.storeService.items;
    }
    set stores(value: Array<StoreDto>) {
        this.storeService.items = value;
    }


}
