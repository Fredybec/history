import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {StoreService} from 'src/app/controller/service/Store.service';
import {StoreDto} from 'src/app/controller/model/Store.model';
import {StoreCriteria} from 'src/app/controller/criteria/StoreCriteria.model';

import {AbonneDto} from 'src/app/controller/model/Abonne.model';
import {AbonneService} from 'src/app/controller/service/Abonne.service';
import {MagasinDto} from 'src/app/controller/model/Magasin.model';
import {MagasinService} from 'src/app/controller/service/Magasin.service';
@Component({
  selector: 'app-store-view-admin',
  templateUrl: './store-view-admin.component.html'
})
export class StoreViewAdminComponent extends AbstractViewController<StoreDto, StoreCriteria, StoreService> implements OnInit {

    magasins = new MagasinDto();
    magasinss: Array<MagasinDto> = [];

    constructor(private datePipe: DatePipe, private storeService: StoreService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private abonneService: AbonneService, private magasinService: MagasinService
    ){
        super(datePipe, storeService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.abonne = new AbonneDto();
        this.abonneService.findAll().subscribe((data) => this.abonnes = data);
    }


    get abonne(): AbonneDto {
       return this.abonneService.item;
    }
    set abonne(value: AbonneDto) {
        this.abonneService.item = value;
    }
    get abonnes():Array<AbonneDto> {
       return this.abonneService.items;
    }
    set abonnes(value: Array<AbonneDto>) {
        this.abonneService.items = value;
    }


}
