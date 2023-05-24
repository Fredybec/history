import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

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
  selector: 'app-produit-edit-admin',
  templateUrl: './produit-edit-admin.component.html'
})
export class ProduitEditAdminComponent extends AbstractEditController<ProduitDto, ProduitCriteria, ProduitService>   implements OnInit {

    private _stockProduitsElement = new StockProduitDto();

    private _validProduitReference = true;
    private _validProduitLibelle = true;

    private _validCategorieProduitReference = true;
    private _validCategorieProduitLibelle = true;
    private _validUniteMesureLibelle = true;
    private _validUniteMesureCode = true;
    private _validMarqueLibelle = true;
    private _validMarqueCode = true;
    private _validStoreLibelle = true;
    private _validStoreReference = true;



    constructor(private datePipe: DatePipe, private produitService: ProduitService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  
, private stockProduitService: StockProduitService, private uniteMesureService: UniteMesureService, private categorieProduitService: CategorieProduitService, private magasinService: MagasinService, private marqueService: MarqueService, private storeService: StoreService
    ) {
        super(datePipe, produitService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.stockProduitsElement.magasin = new MagasinDto();
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

    public validateStockProduits(){
        this.errorMessages = new Array();
    }
    public setValidation(value : boolean){
        this.validProduitReference = value;
        this.validProduitLibelle = value;
        }
   public addStockProduits() {
        if( this.item.stockProduits == null )
            this.item.stockProduits = new Array<StockProduitDto>();
       this.validateStockProduits();
       if (this.errorMessages.length === 0) {
            if(this.stockProduitsElement.id == null){
                this.item.stockProduits.push(this.stockProduitsElement);
            }else{
                const index = this.item.stockProduits.findIndex(e => e.id == this.stockProduitsElement.id);
                this.item.stockProduits[index] = this.stockProduitsElement;
            }
          this.stockProduitsElement = new StockProduitDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deleteStockProduit(p: StockProduitDto) {
        this.item.stockProduits.forEach((element, index) => {
            if (element === p) { this.item.stockProduits.splice(index, 1); }
        });
    }

    public editStockProduit(p: StockProduitDto) {
        this.stockProduitsElement = {... p};
        this.activeTab = 0;
    }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateProduitReference();
        this.validateProduitLibelle();
    }
    public validateProduitReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
            this.errorMessages.push('Reference non valide');
            this.validProduitReference = false;
        } else {
            this.validProduitReference = true;
        }
    }
    public validateProduitLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validProduitLibelle = false;
        } else {
            this.validProduitLibelle = true;
        }
    }



   public async openCreateCategorieProduit(categorieProduit: string) {
        const isPermistted = await this.roleService.isPermitted('CategorieProduit', 'edit');
        if(isPermistted) {
             this.categorieProduit = new CategorieProduitDto();
             this.createCategorieProduitDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateUniteMesure(uniteMesure: string) {
        const isPermistted = await this.roleService.isPermitted('UniteMesure', 'edit');
        if(isPermistted) {
             this.uniteMesure = new UniteMesureDto();
             this.createUniteMesureDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateMarque(marque: string) {
        const isPermistted = await this.roleService.isPermitted('Marque', 'edit');
        if(isPermistted) {
             this.marque = new MarqueDto();
             this.createMarqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateMagasin(magasin: string) {
        const isPermistted = await this.roleService.isPermitted('Magasin', 'edit');
        if(isPermistted) {
             this.magasin = new MagasinDto();
             this.createMagasinDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
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

   get categorieProduit(): CategorieProduitDto {
       return this.categorieProduitService.item;
   }
  set categorieProduit(value: CategorieProduitDto) {
        this.categorieProduitService.item = value;
   }
   get categorieProduits(): Array<CategorieProduitDto> {
        return this.categorieProduitService.items;
   }
   set categorieProduits(value: Array<CategorieProduitDto>) {
        this.categorieProduitService.items = value;
   }
   get createCategorieProduitDialog(): boolean {
       return this.categorieProduitService.createDialog;
   }
  set createCategorieProduitDialog(value: boolean) {
       this.categorieProduitService.createDialog= value;
   }
   get uniteMesure(): UniteMesureDto {
       return this.uniteMesureService.item;
   }
  set uniteMesure(value: UniteMesureDto) {
        this.uniteMesureService.item = value;
   }
   get uniteMesures(): Array<UniteMesureDto> {
        return this.uniteMesureService.items;
   }
   set uniteMesures(value: Array<UniteMesureDto>) {
        this.uniteMesureService.items = value;
   }
   get createUniteMesureDialog(): boolean {
       return this.uniteMesureService.createDialog;
   }
  set createUniteMesureDialog(value: boolean) {
       this.uniteMesureService.createDialog= value;
   }
   get marque(): MarqueDto {
       return this.marqueService.item;
   }
  set marque(value: MarqueDto) {
        this.marqueService.item = value;
   }
   get marques(): Array<MarqueDto> {
        return this.marqueService.items;
   }
   set marques(value: Array<MarqueDto>) {
        this.marqueService.items = value;
   }
   get createMarqueDialog(): boolean {
       return this.marqueService.createDialog;
   }
  set createMarqueDialog(value: boolean) {
       this.marqueService.createDialog= value;
   }
   get magasin(): MagasinDto {
       return this.magasinService.item;
   }
  set magasin(value: MagasinDto) {
        this.magasinService.item = value;
   }
   get magasins(): Array<MagasinDto> {
        return this.magasinService.items;
   }
   set magasins(value: Array<MagasinDto>) {
        this.magasinService.items = value;
   }
   get createMagasinDialog(): boolean {
       return this.magasinService.createDialog;
   }
  set createMagasinDialog(value: boolean) {
       this.magasinService.createDialog= value;
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

    get stockProduitsElement(): StockProduitDto {
        if( this._stockProduitsElement == null )
            this._stockProduitsElement = new StockProduitDto();
         return this._stockProduitsElement;
    }

    set stockProduitsElement(value: StockProduitDto) {
        this._stockProduitsElement = value;
    }

    get validProduitReference(): boolean {
        return this._validProduitReference;
    }
    set validProduitReference(value: boolean) {
        this._validProduitReference = value;
    }
    get validProduitLibelle(): boolean {
        return this._validProduitLibelle;
    }
    set validProduitLibelle(value: boolean) {
        this._validProduitLibelle = value;
    }

    get validCategorieProduitReference(): boolean {
        return this._validCategorieProduitReference;
    }
    set validCategorieProduitReference(value: boolean) {
        this._validCategorieProduitReference = value;
    }
    get validCategorieProduitLibelle(): boolean {
        return this._validCategorieProduitLibelle;
    }
    set validCategorieProduitLibelle(value: boolean) {
        this._validCategorieProduitLibelle = value;
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
    get validMarqueLibelle(): boolean {
        return this._validMarqueLibelle;
    }
    set validMarqueLibelle(value: boolean) {
        this._validMarqueLibelle = value;
    }
    get validMarqueCode(): boolean {
        return this._validMarqueCode;
    }
    set validMarqueCode(value: boolean) {
        this._validMarqueCode = value;
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
