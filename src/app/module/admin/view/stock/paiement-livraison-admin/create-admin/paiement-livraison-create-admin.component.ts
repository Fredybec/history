import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

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
  selector: 'app-paiement-livraison-create-admin',
  templateUrl: './paiement-livraison-create-admin.component.html'
})
export class PaiementLivraisonCreateAdminComponent extends AbstractCreateController<PaiementLivraisonDto, PaiementLivraisonCriteria, PaiementLivraisonService>  implements OnInit {



   private _validPaiementLivraisonReference = true;
    private _validVenteReference = true;
    private _validModePaiementLibelle = true;
    private _validModePaiementCode = true;

    constructor(private datePipe: DatePipe, private paiementLivraisonService: PaiementLivraisonService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  
, private modePaiementService: ModePaiementService, private livraisonService: LivraisonService, private venteService: VenteService
    ) {
        super(datePipe, paiementLivraisonService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    this.livraison = new LivraisonDto();
    this.livraisonService.findAll().subscribe((data) => this.livraisons = data);
    this.vente = new VenteDto();
    this.venteService.findAll().subscribe((data) => this.ventes = data);
    this.modePaiement = new ModePaiementDto();
    this.modePaiementService.findAll().subscribe((data) => this.modePaiements = data);
}





    public setValidation(value: boolean){
        this.validPaiementLivraisonReference = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validatePaiementLivraisonReference();
    }

    public validatePaiementLivraisonReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
        this.errorMessages.push('Reference non valide');
        this.validPaiementLivraisonReference = false;
        } else {
            this.validPaiementLivraisonReference = true;
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
    public async openCreateModePaiement(modePaiement: string) {
    const isPermistted = await this.roleService.isPermitted('ModePaiement', 'add');
    if(isPermistted) {
         this.modePaiement = new ModePaiementDto();
         this.createModePaiementDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateLivraison(livraison: string) {
    const isPermistted = await this.roleService.isPermitted('Livraison', 'add');
    if(isPermistted) {
         this.livraison = new LivraisonDto();
         this.createLivraisonDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
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
    get livraison(): LivraisonDto {
        return this.livraisonService.item;
    }
    set livraison(value: LivraisonDto) {
        this.livraisonService.item = value;
    }
    get livraisons(): Array<LivraisonDto> {
        return this.livraisonService.items;
    }
    set livraisons(value: Array<LivraisonDto>) {
        this.livraisonService.items = value;
    }
    get createLivraisonDialog(): boolean {
       return this.livraisonService.createDialog;
    }
    set createLivraisonDialog(value: boolean) {
        this.livraisonService.createDialog= value;
    }



    get validPaiementLivraisonReference(): boolean {
        return this._validPaiementLivraisonReference;
    }

    set validPaiementLivraisonReference(value: boolean) {
         this._validPaiementLivraisonReference = value;
    }

    get validVenteReference(): boolean {
        return this._validVenteReference;
    }
    set validVenteReference(value: boolean) {
        this._validVenteReference = value;
    }
    get validModePaiementLibelle(): boolean {
        return this._validModePaiementLibelle;
    }
    set validModePaiementLibelle(value: boolean) {
        this._validModePaiementLibelle = value;
    }
    get validModePaiementCode(): boolean {
        return this._validModePaiementCode;
    }
    set validModePaiementCode(value: boolean) {
        this._validModePaiementCode = value;
    }


}
