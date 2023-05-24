import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
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
  selector: 'app-avoir-vente-view-admin',
  templateUrl: './avoir-vente-view-admin.component.html'
})
export class AvoirVenteViewAdminComponent extends AbstractViewController<AvoirVenteDto, AvoirVenteCriteria, AvoirVenteService> implements OnInit {

    avoirVenteItems = new AvoirVenteItemDto();
    avoirVenteItemss: Array<AvoirVenteItemDto> = [];

    constructor(private datePipe: DatePipe, private avoirVenteService: AvoirVenteService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private avoirVenteItemService: AvoirVenteItemService, private venteService: VenteService, private produitService: ProduitService
    ){
        super(datePipe, avoirVenteService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.avoirVenteItems.produit = new ProduitDto();
        this.produitService.findAll().subscribe((data) => this.produits = data);
        this.vente = new VenteDto();
        this.venteService.findAll().subscribe((data) => this.ventes = data);
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
    get vente(): VenteDto {
       return this.venteService.item;
    }
    set vente(value: VenteDto) {
        this.venteService.item = value;
    }
    get ventes():Array<VenteDto> {
       return this.venteService.items;
    }
    set ventes(value: Array<VenteDto>) {
        this.venteService.items = value;
    }


}
