import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {VenteService} from 'src/app/controller/service/Vente.service';
import {VenteDto} from 'src/app/controller/model/Vente.model';
import {VenteCriteria} from 'src/app/controller/criteria/VenteCriteria.model';


import {ModePaiementDto} from 'src/app/controller/model/ModePaiement.model';
import {ModePaiementService} from 'src/app/controller/service/ModePaiement.service';
import {ProduitDto} from 'src/app/controller/model/Produit.model';
import {ProduitService} from 'src/app/controller/service/Produit.service';
import {PaiementVenteDto} from 'src/app/controller/model/PaiementVente.model';
import {PaiementVenteService} from 'src/app/controller/service/PaiementVente.service';
import {VenteItemDto} from 'src/app/controller/model/VenteItem.model';
import {VenteItemService} from 'src/app/controller/service/VenteItem.service';
import {ClientDto} from 'src/app/controller/model/Client.model';
import {ClientService} from 'src/app/controller/service/Client.service';

@Component({
  selector: 'app-vente-edit-admin',
  templateUrl: './vente-edit-admin.component.html'
})
export class VenteEditAdminComponent extends AbstractEditController<VenteDto, VenteCriteria, VenteService>   implements OnInit {

    private _paiementVentesElement = new PaiementVenteDto();
    private _venteItemsElement = new VenteItemDto();

    private _validVenteReference = true;

    private _validClientCin = true;
    private _validClientNom = true;
    private _validPaiementVentesReference = true;



    constructor(private datePipe: DatePipe, private venteService: VenteService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  
, private modePaiementService: ModePaiementService, private paiementVenteService: PaiementVenteService, private venteItemService: VenteItemService, private clientService: ClientService, private produitService: ProduitService
    ) {
        super(datePipe, venteService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.paiementVentesElement.modePaiement = new ModePaiementDto();
        this.modePaiementService.findAll().subscribe((data) => this.modePaiements = data);

        this.venteItemsElement.produit = new ProduitDto();
        this.produitService.findAll().subscribe((data) => this.produits = data);

    this.client = new ClientDto();
    this.clientService.findAll().subscribe((data) => this.clients = data);
}

    public validatePaiementVentes(){
        this.errorMessages = new Array();
        this.validatePaiementVentesReference();
    }
    public validateVenteItems(){
        this.errorMessages = new Array();
    }
    public setValidation(value : boolean){
        this.validVenteReference = value;
        this.validPaiementVentesReference = value;
        }
   public addPaiementVentes() {
        if( this.item.paiementVentes == null )
            this.item.paiementVentes = new Array<PaiementVenteDto>();
       this.validatePaiementVentes();
       if (this.errorMessages.length === 0) {
            if(this.paiementVentesElement.id == null){
                this.item.paiementVentes.push(this.paiementVentesElement);
            }else{
                const index = this.item.paiementVentes.findIndex(e => e.id == this.paiementVentesElement.id);
                this.item.paiementVentes[index] = this.paiementVentesElement;
            }
          this.paiementVentesElement = new PaiementVenteDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deletePaiementVente(p: PaiementVenteDto) {
        this.item.paiementVentes.forEach((element, index) => {
            if (element === p) { this.item.paiementVentes.splice(index, 1); }
        });
    }

    public editPaiementVente(p: PaiementVenteDto) {
        this.paiementVentesElement = {... p};
        this.activeTab = 0;
    }
   public addVenteItems() {
        if( this.item.venteItems == null )
            this.item.venteItems = new Array<VenteItemDto>();
       this.validateVenteItems();
       if (this.errorMessages.length === 0) {
            if(this.venteItemsElement.id == null){
                this.item.venteItems.push(this.venteItemsElement);
            }else{
                const index = this.item.venteItems.findIndex(e => e.id == this.venteItemsElement.id);
                this.item.venteItems[index] = this.venteItemsElement;
            }
          this.venteItemsElement = new VenteItemDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deleteVenteItem(p: VenteItemDto) {
        this.item.venteItems.forEach((element, index) => {
            if (element === p) { this.item.venteItems.splice(index, 1); }
        });
    }

    public editVenteItem(p: VenteItemDto) {
        this.venteItemsElement = {... p};
        this.activeTab = 0;
    }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateVenteReference();
    }
    public validateVenteReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
            this.errorMessages.push('Reference non valide');
            this.validVenteReference = false;
        } else {
            this.validVenteReference = true;
        }
    }


    private validatePaiementVentesReference(){
        if (this.paiementVentesElement.reference == null) {
        this.errorMessages.push('Reference de la paiementVente est  invalide');
            this.validPaiementVentesReference = false;
        } else {
            this.validPaiementVentesReference = true;
        }
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
   public async openCreateClient(client: string) {
        const isPermistted = await this.roleService.isPermitted('Client', 'edit');
        if(isPermistted) {
             this.client = new ClientDto();
             this.createClientDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateModePaiement(modePaiement: string) {
        const isPermistted = await this.roleService.isPermitted('ModePaiement', 'edit');
        if(isPermistted) {
             this.modePaiement = new ModePaiementDto();
             this.createModePaiementDialog = true;
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
   get client(): ClientDto {
       return this.clientService.item;
   }
  set client(value: ClientDto) {
        this.clientService.item = value;
   }
   get clients(): Array<ClientDto> {
        return this.clientService.items;
   }
   set clients(value: Array<ClientDto>) {
        this.clientService.items = value;
   }
   get createClientDialog(): boolean {
       return this.clientService.createDialog;
   }
  set createClientDialog(value: boolean) {
       this.clientService.createDialog= value;
   }
   get modePaiement(): ModePaiementDto {
       return this.modePaiementService.item;
   }
  set modePaiement(value: ModePaiementDto) {
        this.modePaiementService.item = value;
   }
   get modePaiements(): Array<ModePaiementDto> {
        return this.modePaiementService.items;
   }
   set modePaiements(value: Array<ModePaiementDto>) {
        this.modePaiementService.items = value;
   }
   get createModePaiementDialog(): boolean {
       return this.modePaiementService.createDialog;
   }
  set createModePaiementDialog(value: boolean) {
       this.modePaiementService.createDialog= value;
   }

    get paiementVentesElement(): PaiementVenteDto {
        if( this._paiementVentesElement == null )
            this._paiementVentesElement = new PaiementVenteDto();
         return this._paiementVentesElement;
    }

    set paiementVentesElement(value: PaiementVenteDto) {
        this._paiementVentesElement = value;
    }
    get venteItemsElement(): VenteItemDto {
        if( this._venteItemsElement == null )
            this._venteItemsElement = new VenteItemDto();
         return this._venteItemsElement;
    }

    set venteItemsElement(value: VenteItemDto) {
        this._venteItemsElement = value;
    }

    get validVenteReference(): boolean {
        return this._validVenteReference;
    }
    set validVenteReference(value: boolean) {
        this._validVenteReference = value;
    }

    get validClientCin(): boolean {
        return this._validClientCin;
    }
    set validClientCin(value: boolean) {
        this._validClientCin = value;
    }
    get validClientNom(): boolean {
        return this._validClientNom;
    }
    set validClientNom(value: boolean) {
        this._validClientNom = value;
    }
    get validPaiementVentesReference(): boolean {
        return this._validPaiementVentesReference;
    }
    set validPaiementVentesReference(value: boolean) {
        this._validPaiementVentesReference = value;
    }
}
