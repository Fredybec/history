import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {StockProduitService} from 'src/app/controller/service/StockProduit.service';
import {StockProduitDto} from 'src/app/controller/model/StockProduit.model';
import {StockProduitCriteria} from 'src/app/controller/criteria/StockProduitCriteria.model';


import {MagasinDto} from 'src/app/controller/model/Magasin.model';
import {MagasinService} from 'src/app/controller/service/Magasin.service';
import {ProduitDto} from 'src/app/controller/model/Produit.model';
import {ProduitService} from 'src/app/controller/service/Produit.service';

@Component({
  selector: 'app-stock-produit-edit-admin',
  templateUrl: './stock-produit-edit-admin.component.html'
})
export class StockProduitEditAdminComponent extends AbstractEditController<StockProduitDto, StockProduitCriteria, StockProduitService>   implements OnInit {



    private _validProduitReference = true;
    private _validProduitLibelle = true;



    constructor(private datePipe: DatePipe, private stockProduitService: StockProduitService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  
, private magasinService: MagasinService, private produitService: ProduitService
    ) {
        super(datePipe, stockProduitService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    this.magasin = new MagasinDto();
    this.magasinService.findAll().subscribe((data) => this.magasins = data);
    this.produit = new ProduitDto();
    this.produitService.findAll().subscribe((data) => this.produits = data);
}

    public setValidation(value : boolean){
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }



   public async openCreateProduit(produit: string) {
        const isPermistted = await this.roleService.isPermitted('Produit', 'edit');
        if(isPermistted) {
             this.produit = new ProduitDto();
             this.createProduitDialog = true;
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

   get produit(): ProduitDto {
       return this.produitService.item;
   }
  set produit(value: ProduitDto) {
        this.produitService.item = value;
   }
   get produits(): Array<ProduitDto> {
        return this.produitService.items;
   }
   set produits(value: Array<ProduitDto>) {
        this.produitService.items = value;
   }
   get createProduitDialog(): boolean {
       return this.produitService.createDialog;
   }
  set createProduitDialog(value: boolean) {
       this.produitService.createDialog= value;
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
}
