import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DemandeService} from 'src/app/controller/service/Demande.service';
import {DemandeDto} from 'src/app/controller/model/Demande.model';
import {DemandeCriteria} from 'src/app/controller/criteria/DemandeCriteria.model';

import {ModePaiementDto} from 'src/app/controller/model/ModePaiement.model';
import {ModePaiementService} from 'src/app/controller/service/ModePaiement.service';
import {EtatDemandeDto} from 'src/app/controller/model/EtatDemande.model';
import {EtatDemandeService} from 'src/app/controller/service/EtatDemande.service';
import {DemandeItemDto} from 'src/app/controller/model/DemandeItem.model';
import {DemandeItemService} from 'src/app/controller/service/DemandeItem.service';
import {ProduitDto} from 'src/app/controller/model/Produit.model';
import {ProduitService} from 'src/app/controller/service/Produit.service';
import {ClientDto} from 'src/app/controller/model/Client.model';
import {ClientService} from 'src/app/controller/service/Client.service';
import {MagasinDto} from 'src/app/controller/model/Magasin.model';
import {MagasinService} from 'src/app/controller/service/Magasin.service';
import {PaiementDemandeDto} from 'src/app/controller/model/PaiementDemande.model';
import {PaiementDemandeService} from 'src/app/controller/service/PaiementDemande.service';
import {LivraisonDto} from 'src/app/controller/model/Livraison.model';
import {LivraisonService} from 'src/app/controller/service/Livraison.service';
@Component({
  selector: 'app-demande-view-admin',
  templateUrl: './demande-view-admin.component.html'
})
export class DemandeViewAdminComponent extends AbstractViewController<DemandeDto, DemandeCriteria, DemandeService> implements OnInit {

    demandeItems = new DemandeItemDto();
    demandeItemss: Array<DemandeItemDto> = [];
    paiementDemandes = new PaiementDemandeDto();
    paiementDemandess: Array<PaiementDemandeDto> = [];

    constructor(private datePipe: DatePipe, private demandeService: DemandeService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private modePaiementService: ModePaiementService, private etatDemandeService: EtatDemandeService, private clientService: ClientService, private magasinService: MagasinService, private demandeItemService: DemandeItemService, private paiementDemandeService: PaiementDemandeService, private livraisonService: LivraisonService, private produitService: ProduitService
    ){
        super(datePipe, demandeService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.demandeItems.produit = new ProduitDto();
        this.produitService.findAll().subscribe((data) => this.produits = data);
        this.paiementDemandes.modePaiement = new ModePaiementDto();
        this.modePaiementService.findAll().subscribe((data) => this.modePaiements = data);
        this.produit = new ProduitDto();
        this.produitService.findAll().subscribe((data) => this.produits = data);
        this.client = new ClientDto();
        this.clientService.findAll().subscribe((data) => this.clients = data);
        this.livraison = new LivraisonDto();
        this.livraisonService.findAll().subscribe((data) => this.livraisons = data);
        this.magasin = new MagasinDto();
        this.magasinService.findAll().subscribe((data) => this.magasins = data);
        this.etatDemande = new EtatDemandeDto();
        this.etatDemandeService.findAll().subscribe((data) => this.etatDemandes = data);
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
    get livraison(): LivraisonDto {
       return this.livraisonService.item;
    }
    set livraison(value: LivraisonDto) {
        this.livraisonService.item = value;
    }
    get livraisons():Array<LivraisonDto> {
       return this.livraisonService.items;
    }
    set livraisons(value: Array<LivraisonDto>) {
        this.livraisonService.items = value;
    }
    get etatDemande(): EtatDemandeDto {
       return this.etatDemandeService.item;
    }
    set etatDemande(value: EtatDemandeDto) {
        this.etatDemandeService.item = value;
    }
    get etatDemandes():Array<EtatDemandeDto> {
       return this.etatDemandeService.items;
    }
    set etatDemandes(value: Array<EtatDemandeDto>) {
        this.etatDemandeService.items = value;
    }


}
