import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {AchatService} from 'src/app/controller/service/Achat.service';
import {AchatDto} from 'src/app/controller/model/Achat.model';
import {AchatCriteria} from 'src/app/controller/criteria/AchatCriteria.model';

import {ModePaiementDto} from 'src/app/controller/model/ModePaiement.model';
import {ModePaiementService} from 'src/app/controller/service/ModePaiement.service';
import {FournisseurDto} from 'src/app/controller/model/Fournisseur.model';
import {FournisseurService} from 'src/app/controller/service/Fournisseur.service';
import {AvoirAchatDto} from 'src/app/controller/model/AvoirAchat.model';
import {AvoirAchatService} from 'src/app/controller/service/AvoirAchat.service';
import {AvoirAchatItemDto} from 'src/app/controller/model/AvoirAchatItem.model';
import {AvoirAchatItemService} from 'src/app/controller/service/AvoirAchatItem.service';
import {StoreDto} from 'src/app/controller/model/Store.model';
import {StoreService} from 'src/app/controller/service/Store.service';
import {ProduitDto} from 'src/app/controller/model/Produit.model';
import {ProduitService} from 'src/app/controller/service/Produit.service';
import {PaiementAchatDto} from 'src/app/controller/model/PaiementAchat.model';
import {PaiementAchatService} from 'src/app/controller/service/PaiementAchat.service';
import {AchatItemDto} from 'src/app/controller/model/AchatItem.model';
import {AchatItemService} from 'src/app/controller/service/AchatItem.service';
@Component({
  selector: 'app-achat-view-admin',
  templateUrl: './achat-view-admin.component.html'
})
export class AchatViewAdminComponent extends AbstractViewController<AchatDto, AchatCriteria, AchatService> implements OnInit {

    paiementAchats = new PaiementAchatDto();
    paiementAchatss: Array<PaiementAchatDto> = [];
    achatItems = new AchatItemDto();
    achatItemss: Array<AchatItemDto> = [];
    avoirAchats = new AvoirAchatDto();
    avoirAchatss: Array<AvoirAchatDto> = [];

    constructor(private datePipe: DatePipe, private achatService: AchatService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private paiementAchatService: PaiementAchatService, private modePaiementService: ModePaiementService, private fournisseurService: FournisseurService, private avoirAchatService: AvoirAchatService, private achatItemService: AchatItemService, private storeService: StoreService, private produitService: ProduitService
    ){
        super(datePipe, achatService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.paiementAchats.modePaiement = new ModePaiementDto();
        this.modePaiementService.findAll().subscribe((data) => this.modePaiements = data);
        this.achatItems.produit = new ProduitDto();
        this.produitService.findAll().subscribe((data) => this.produits = data);
        this.fournisseur = new FournisseurDto();
        this.fournisseurService.findAll().subscribe((data) => this.fournisseurs = data);
        this.store = new StoreDto();
        this.storeService.findAll().subscribe((data) => this.stores = data);
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
    get modePaiement(): ModePaiementDto {
       return this.modePaiementService.item;
    }
    set modePaiement(value: ModePaiementDto) {
        this.modePaiementService.item = value;
    }
    get modePaiements():Array<ModePaiementDto> {
       return this.modePaiementService.items;
    }
    set modePaiements(value: Array<ModePaiementDto>) {
        this.modePaiementService.items = value;
    }
    get fournisseur(): FournisseurDto {
       return this.fournisseurService.item;
    }
    set fournisseur(value: FournisseurDto) {
        this.fournisseurService.item = value;
    }
    get fournisseurs():Array<FournisseurDto> {
       return this.fournisseurService.items;
    }
    set fournisseurs(value: Array<FournisseurDto>) {
        this.fournisseurService.items = value;
    }


}
