import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {PaiementLivraisonService} from 'src/app/controller/service/PaiementLivraison.service';
import {PaiementLivraisonDto} from 'src/app/controller/model/PaiementLivraison.model';
import {PaiementLivraisonCriteria} from 'src/app/controller/criteria/PaiementLivraisonCriteria.model';

import {ModePaiementDto} from 'src/app/controller/model/ModePaiement.model';
import {ModePaiementService} from 'src/app/controller/service/ModePaiement.service';
import {LivraisonDto} from 'src/app/controller/model/Livraison.model';
import {LivraisonService} from 'src/app/controller/service/Livraison.service';
import {VenteDto} from 'src/app/controller/model/Vente.model';
import {VenteService} from 'src/app/controller/service/Vente.service';
@Component({
  selector: 'app-paiement-livraison-view-admin',
  templateUrl: './paiement-livraison-view-admin.component.html'
})
export class PaiementLivraisonViewAdminComponent extends AbstractViewController<PaiementLivraisonDto, PaiementLivraisonCriteria, PaiementLivraisonService> implements OnInit {


    constructor(private datePipe: DatePipe, private paiementLivraisonService: PaiementLivraisonService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private modePaiementService: ModePaiementService, private livraisonService: LivraisonService, private venteService: VenteService
    ){
        super(datePipe, paiementLivraisonService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.livraison = new LivraisonDto();
        this.livraisonService.findAll().subscribe((data) => this.livraisons = data);
        this.vente = new VenteDto();
        this.venteService.findAll().subscribe((data) => this.ventes = data);
        this.modePaiement = new ModePaiementDto();
        this.modePaiementService.findAll().subscribe((data) => this.modePaiements = data);
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


}
