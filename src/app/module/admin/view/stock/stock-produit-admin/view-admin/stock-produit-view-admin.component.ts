import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {StockProduitService} from 'src/app/controller/service/StockProduit.service';
import {StockProduitDto} from 'src/app/controller/model/StockProduit.model';
import {StockProduitCriteria} from 'src/app/controller/criteria/StockProduitCriteria.model';

import {MagasinDto} from 'src/app/controller/model/Magasin.model';
import {MagasinService} from 'src/app/controller/service/Magasin.service';
import {ProduitDto} from 'src/app/controller/model/Produit.model';
import {ProduitService} from 'src/app/controller/service/Produit.service';
@Component({
  selector: 'app-stock-produit-view-admin',
  templateUrl: './stock-produit-view-admin.component.html'
})
export class StockProduitViewAdminComponent extends AbstractViewController<StockProduitDto, StockProduitCriteria, StockProduitService> implements OnInit {


    constructor(private datePipe: DatePipe, private stockProduitService: StockProduitService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private magasinService: MagasinService, private produitService: ProduitService
    ){
        super(datePipe, stockProduitService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.magasin = new MagasinDto();
        this.magasinService.findAll().subscribe((data) => this.magasins = data);
        this.produit = new ProduitDto();
        this.produitService.findAll().subscribe((data) => this.produits = data);
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
    get magasin(): MagasinDto {
       return this.magasinService.item;
    }
    set magasin(value: MagasinDto) {
        this.magasinService.item = value;
    }
    get magasins():Array<MagasinDto> {
       return this.magasinService.items;
    }
    set magasins(value: Array<MagasinDto>) {
        this.magasinService.items = value;
    }


}
