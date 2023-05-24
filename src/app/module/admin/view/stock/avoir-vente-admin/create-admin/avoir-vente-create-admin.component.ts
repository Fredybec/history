import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {AvoirVenteService} from 'src/app/controller/service/AvoirVente.service';
import {AvoirVenteDto} from 'src/app/controller/model/AvoirVente.model';
import {AvoirVenteCriteria} from 'src/app/controller/criteria/AvoirVenteCriteria.model';
import {AvoirVenteItemDto} from 'src/app/controller/model/AvoirVenteItem.model';
import {AvoirVenteItemService} from 'src/app/controller/service/AvoirVenteItem.service';
import {VenteDto} from 'src/app/controller/model/Vente.model';
import {VenteService} from 'src/app/controller/service/Vente.service';
import {ProduitDto} from 'src/app/controller/model/Produit.model';
import {ProduitService} from 'src/app/controller/service/Produit.service';
@Component({
  selector: 'app-avoir-vente-create-admin',
  templateUrl: './avoir-vente-create-admin.component.html'
})
export class AvoirVenteCreateAdminComponent extends AbstractCreateController<AvoirVenteDto, AvoirVenteCriteria, AvoirVenteService>  implements OnInit {

    private _avoirVenteItemsElement = new AvoirVenteItemDto();


    private _validVenteReference = true;

    constructor(private datePipe: DatePipe, private avoirVenteService: AvoirVenteService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  
, private avoirVenteItemService: AvoirVenteItemService, private venteService: VenteService, private produitService: ProduitService
    ) {
        super(datePipe, avoirVenteService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.avoirVenteItemsElement.produit = new ProduitDto();
        this.produitService.findAll().subscribe((data) => this.produits = data);
    this.vente = new VenteDto();
    this.venteService.findAll().subscribe((data) => this.ventes = data);
}



    validateAvoirVenteItems(){
        this.errorMessages = new Array();
    }


    public setValidation(value: boolean){
    }

    public addAvoirVenteItems() {
        if( this.item.avoirVenteItems == null )
            this.item.avoirVenteItems = new Array<AvoirVenteItemDto>();
       this.validateAvoirVenteItems();
       if (this.errorMessages.length === 0) {
              this.item.avoirVenteItems.push({... this.avoirVenteItemsElement});
              this.avoirVenteItemsElement = new AvoirVenteItemDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deleteAvoirVenteItem(p: AvoirVenteItemDto) {
        this.item.avoirVenteItems.forEach((element, index) => {
            if (element === p) { this.item.avoirVenteItems.splice(index, 1); }
        });
    }

    public editAvoirVenteItem(p: AvoirVenteItemDto) {
        this.avoirVenteItemsElement = {... p};
        this.activeTab = 0;
    }


    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }



    public async openCreateProduit(produit: string) {
    const isPermistted = await this.roleService.isPermitted('Produit', 'add');
    if(isPermistted) {
         this.produit = new ProduitDto();
         this.createProduitDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateVente(vente: string) {
    const isPermistted = await this.roleService.isPermitted('Vente', 'add');
    if(isPermistted) {
         this.vente = new VenteDto();
         this.createVenteDialog = true;
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
    get vente(): VenteDto {
        return this.venteService.item;
    }
    set vente(value: VenteDto) {
        this.venteService.item = value;
    }
    get ventes(): Array<VenteDto> {
        return this.venteService.items;
    }
    set ventes(value: Array<VenteDto>) {
        this.venteService.items = value;
    }
    get createVenteDialog(): boolean {
       return this.venteService.createDialog;
    }
    set createVenteDialog(value: boolean) {
        this.venteService.createDialog= value;
    }




    get validVenteReference(): boolean {
        return this._validVenteReference;
    }
    set validVenteReference(value: boolean) {
        this._validVenteReference = value;
    }

    get avoirVenteItemsElement(): AvoirVenteItemDto {
        if( this._avoirVenteItemsElement == null )
            this._avoirVenteItemsElement = new AvoirVenteItemDto();
        return this._avoirVenteItemsElement;
    }

    set avoirVenteItemsElement(value: AvoirVenteItemDto) {
        this._avoirVenteItemsElement = value;
    }

}
