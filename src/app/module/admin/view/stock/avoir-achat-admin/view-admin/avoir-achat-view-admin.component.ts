import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {AvoirAchatService} from 'src/app/controller/service/AvoirAchat.service';
import {AvoirAchatDto} from 'src/app/controller/model/AvoirAchat.model';
import {AvoirAchatCriteria} from 'src/app/controller/criteria/AvoirAchatCriteria.model';

import {AchatDto} from 'src/app/controller/model/Achat.model';
import {AchatService} from 'src/app/controller/service/Achat.service';
import {AvoirAchatItemDto} from 'src/app/controller/model/AvoirAchatItem.model';
import {AvoirAchatItemService} from 'src/app/controller/service/AvoirAchatItem.service';
import {ProduitDto} from 'src/app/controller/model/Produit.model';
import {ProduitService} from 'src/app/controller/service/Produit.service';
@Component({
  selector: 'app-avoir-achat-view-admin',
  templateUrl: './avoir-achat-view-admin.component.html'
})
export class AvoirAchatViewAdminComponent extends AbstractViewController<AvoirAchatDto, AvoirAchatCriteria, AvoirAchatService> implements OnInit {

    avoirAchatItems = new AvoirAchatItemDto();
    avoirAchatItemss: Array<AvoirAchatItemDto> = [];

    constructor(private datePipe: DatePipe, private avoirAchatService: AvoirAchatService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private achatService: AchatService, private avoirAchatItemService: AvoirAchatItemService, private produitService: ProduitService
    ){
        super(datePipe, avoirAchatService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.avoirAchatItems.produit = new ProduitDto();
        this.produitService.findAll().subscribe((data) => this.produits = data);
        this.achat = new AchatDto();
        this.achatService.findAll().subscribe((data) => this.achats = data);
    }


    get produit(): ProduitDto {
       return this.produitService.item;
    }
    set produit(value: ProduitDto) {
        this.produitService.item = value;
    }
    get produits():Array<ProduitDto> {
       return this.produitService.items;
    }
    set produits(value: Array<ProduitDto>) {
        this.produitService.items = value;
    }
    get achat(): AchatDto {
       return this.achatService.item;
    }
    set achat(value: AchatDto) {
        this.achatService.item = value;
    }
    get achats():Array<AchatDto> {
       return this.achatService.items;
    }
    set achats(value: Array<AchatDto>) {
        this.achatService.items = value;
    }


}
