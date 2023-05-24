import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {ReceptionService} from 'src/app/controller/service/Reception.service';
import {ReceptionDto} from 'src/app/controller/model/Reception.model';
import {ReceptionCriteria} from 'src/app/controller/criteria/ReceptionCriteria.model';

import {CommandeDto} from 'src/app/controller/model/Commande.model';
import {CommandeService} from 'src/app/controller/service/Commande.service';
import {MagasinDto} from 'src/app/controller/model/Magasin.model';
import {MagasinService} from 'src/app/controller/service/Magasin.service';
import {ReceptionItemDto} from 'src/app/controller/model/ReceptionItem.model';
import {ReceptionItemService} from 'src/app/controller/service/ReceptionItem.service';
import {EtatReceptionDto} from 'src/app/controller/model/EtatReception.model';
import {EtatReceptionService} from 'src/app/controller/service/EtatReception.service';
import {ProduitDto} from 'src/app/controller/model/Produit.model';
import {ProduitService} from 'src/app/controller/service/Produit.service';
@Component({
  selector: 'app-reception-view-admin',
  templateUrl: './reception-view-admin.component.html'
})
export class ReceptionViewAdminComponent extends AbstractViewController<ReceptionDto, ReceptionCriteria, ReceptionService> implements OnInit {

    receptionItems = new ReceptionItemDto();
    receptionItemss: Array<ReceptionItemDto> = [];

    constructor(private datePipe: DatePipe, private receptionService: ReceptionService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private commandeService: CommandeService, private magasinService: MagasinService, private receptionItemService: ReceptionItemService, private etatReceptionService: EtatReceptionService, private produitService: ProduitService
    ){
        super(datePipe, receptionService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.receptionItems.produit = new ProduitDto();
        this.produitService.findAll().subscribe((data) => this.produits = data);
        this.receptionItems.magasin = new MagasinDto();
        this.magasinService.findAll().subscribe((data) => this.magasins = data);
        this.commande = new CommandeDto();
        this.commandeService.findAll().subscribe((data) => this.commandes = data);
        this.etatReception = new EtatReceptionDto();
        this.etatReceptionService.findAll().subscribe((data) => this.etatReceptions = data);
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
    get etatReception(): EtatReceptionDto {
       return this.etatReceptionService.item;
    }
    set etatReception(value: EtatReceptionDto) {
        this.etatReceptionService.item = value;
    }
    get etatReceptions():Array<EtatReceptionDto> {
       return this.etatReceptionService.items;
    }
    set etatReceptions(value: Array<EtatReceptionDto>) {
        this.etatReceptionService.items = value;
    }
    get commande(): CommandeDto {
       return this.commandeService.item;
    }
    set commande(value: CommandeDto) {
        this.commandeService.item = value;
    }
    get commandes():Array<CommandeDto> {
       return this.commandeService.items;
    }
    set commandes(value: Array<CommandeDto>) {
        this.commandeService.items = value;
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
