import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {LivraisonService} from 'src/app/controller/service/Livraison.service';
import {LivraisonDto} from 'src/app/controller/model/Livraison.model';
import {LivraisonCriteria} from 'src/app/controller/criteria/LivraisonCriteria.model';

import {EtatLivraisonDto} from 'src/app/controller/model/EtatLivraison.model';
import {EtatLivraisonService} from 'src/app/controller/service/EtatLivraison.service';
import {DemandeDto} from 'src/app/controller/model/Demande.model';
import {DemandeService} from 'src/app/controller/service/Demande.service';
import {LivraisonItemDto} from 'src/app/controller/model/LivraisonItem.model';
import {LivraisonItemService} from 'src/app/controller/service/LivraisonItem.service';
import {ClientDto} from 'src/app/controller/model/Client.model';
import {ClientService} from 'src/app/controller/service/Client.service';
import {ProduitDto} from 'src/app/controller/model/Produit.model';
import {ProduitService} from 'src/app/controller/service/Produit.service';
@Component({
  selector: 'app-livraison-view-admin',
  templateUrl: './livraison-view-admin.component.html'
})
export class LivraisonViewAdminComponent extends AbstractViewController<LivraisonDto, LivraisonCriteria, LivraisonService> implements OnInit {

    livraisonItems = new LivraisonItemDto();
    livraisonItemss: Array<LivraisonItemDto> = [];

    constructor(private datePipe: DatePipe, private livraisonService: LivraisonService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private etatLivraisonService: EtatLivraisonService, private demandeService: DemandeService, private livraisonItemService: LivraisonItemService, private clientService: ClientService, private produitService: ProduitService
    ){
        super(datePipe, livraisonService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.livraisonItems.produit = new ProduitDto();
        this.produitService.findAll().subscribe((data) => this.produits = data);
        this.demande = new DemandeDto();
        this.demandeService.findAll().subscribe((data) => this.demandes = data);
        this.etatLivraison = new EtatLivraisonDto();
        this.etatLivraisonService.findAll().subscribe((data) => this.etatLivraisons = data);
        this.client = new ClientDto();
        this.clientService.findAll().subscribe((data) => this.clients = data);
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
    get client(): ClientDto {
       return this.clientService.item;
    }
    set client(value: ClientDto) {
        this.clientService.item = value;
    }
    get clients():Array<ClientDto> {
       return this.clientService.items;
    }
    set clients(value: Array<ClientDto>) {
        this.clientService.items = value;
    }
    get demande(): DemandeDto {
       return this.demandeService.item;
    }
    set demande(value: DemandeDto) {
        this.demandeService.item = value;
    }
    get demandes():Array<DemandeDto> {
       return this.demandeService.items;
    }
    set demandes(value: Array<DemandeDto>) {
        this.demandeService.items = value;
    }
    get etatLivraison(): EtatLivraisonDto {
       return this.etatLivraisonService.item;
    }
    set etatLivraison(value: EtatLivraisonDto) {
        this.etatLivraisonService.item = value;
    }
    get etatLivraisons():Array<EtatLivraisonDto> {
       return this.etatLivraisonService.items;
    }
    set etatLivraisons(value: Array<EtatLivraisonDto>) {
        this.etatLivraisonService.items = value;
    }


}
