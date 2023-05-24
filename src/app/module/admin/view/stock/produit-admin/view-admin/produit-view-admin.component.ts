import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {ProduitService} from 'src/app/controller/service/Produit.service';
import {ProduitDto} from 'src/app/controller/model/Produit.model';
import {ProduitCriteria} from 'src/app/controller/criteria/ProduitCriteria.model';

import {StockProduitDto} from 'src/app/controller/model/StockProduit.model';
import {StockProduitService} from 'src/app/controller/service/StockProduit.service';
import {UniteMesureDto} from 'src/app/controller/model/UniteMesure.model';
import {UniteMesureService} from 'src/app/controller/service/UniteMesure.service';
import {CategorieProduitDto} from 'src/app/controller/model/CategorieProduit.model';
import {CategorieProduitService} from 'src/app/controller/service/CategorieProduit.service';
import {MagasinDto} from 'src/app/controller/model/Magasin.model';
import {MagasinService} from 'src/app/controller/service/Magasin.service';
import {MarqueDto} from 'src/app/controller/model/Marque.model';
import {MarqueService} from 'src/app/controller/service/Marque.service';
import {StoreDto} from 'src/app/controller/model/Store.model';
import {StoreService} from 'src/app/controller/service/Store.service';
@Component({
  selector: 'app-produit-view-admin',
  templateUrl: './produit-view-admin.component.html'
})
export class ProduitViewAdminComponent extends AbstractViewController<ProduitDto, ProduitCriteria, ProduitService> implements OnInit {

    stockProduits = new StockProduitDto();
    stockProduitss: Array<StockProduitDto> = [];

    constructor(private datePipe: DatePipe, private produitService: ProduitService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private stockProduitService: StockProduitService, private uniteMesureService: UniteMesureService, private categorieProduitService: CategorieProduitService, private magasinService: MagasinService, private marqueService: MarqueService, private storeService: StoreService
    ){
        super(datePipe, produitService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.stockProduits.magasin = new MagasinDto();
        this.magasinService.findAll().subscribe((data) => this.magasins = data);
        this.categorieProduit = new CategorieProduitDto();
        this.categorieProduitService.findAll().subscribe((data) => this.categorieProduits = data);
        this.uniteMesure = new UniteMesureDto();
        this.uniteMesureService.findAll().subscribe((data) => this.uniteMesures = data);
        this.marque = new MarqueDto();
        this.marqueService.findAll().subscribe((data) => this.marques = data);
        this.store = new StoreDto();
        this.storeService.findAll().subscribe((data) => this.stores = data);
    }


    get categorieProduit(): CategorieProduitDto {
       return this.categorieProduitService.item;
    }
    set categorieProduit(value: CategorieProduitDto) {
        this.categorieProduitService.item = value;
    }
    get categorieProduits():Array<CategorieProduitDto> {
       return this.categorieProduitService.items;
    }
    set categorieProduits(value: Array<CategorieProduitDto>) {
        this.categorieProduitService.items = value;
    }
    get uniteMesure(): UniteMesureDto {
       return this.uniteMesureService.item;
    }
    set uniteMesure(value: UniteMesureDto) {
        this.uniteMesureService.item = value;
    }
    get uniteMesures():Array<UniteMesureDto> {
       return this.uniteMesureService.items;
    }
    set uniteMesures(value: Array<UniteMesureDto>) {
        this.uniteMesureService.items = value;
    }
    get marque(): MarqueDto {
       return this.marqueService.item;
    }
    set marque(value: MarqueDto) {
        this.marqueService.item = value;
    }
    get marques():Array<MarqueDto> {
       return this.marqueService.items;
    }
    set marques(value: Array<MarqueDto>) {
        this.marqueService.items = value;
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
