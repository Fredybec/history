import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import {TranslateModule} from '@ngx-translate/core';

import { PaiementCommandeCreateAdminComponent } from './paiement-commande-admin/create-admin/paiement-commande-create-admin.component';
import { PaiementCommandeEditAdminComponent } from './paiement-commande-admin/edit-admin/paiement-commande-edit-admin.component';
import { PaiementCommandeViewAdminComponent } from './paiement-commande-admin/view-admin/paiement-commande-view-admin.component';
import { PaiementCommandeListAdminComponent } from './paiement-commande-admin/list-admin/paiement-commande-list-admin.component';
import { CategorieProduitCreateAdminComponent } from './categorie-produit-admin/create-admin/categorie-produit-create-admin.component';
import { CategorieProduitEditAdminComponent } from './categorie-produit-admin/edit-admin/categorie-produit-edit-admin.component';
import { CategorieProduitViewAdminComponent } from './categorie-produit-admin/view-admin/categorie-produit-view-admin.component';
import { CategorieProduitListAdminComponent } from './categorie-produit-admin/list-admin/categorie-produit-list-admin.component';
import { DemandeCreateAdminComponent } from './demande-admin/create-admin/demande-create-admin.component';
import { DemandeEditAdminComponent } from './demande-admin/edit-admin/demande-edit-admin.component';
import { DemandeViewAdminComponent } from './demande-admin/view-admin/demande-view-admin.component';
import { DemandeListAdminComponent } from './demande-admin/list-admin/demande-list-admin.component';
import { FournisseurCreateAdminComponent } from './fournisseur-admin/create-admin/fournisseur-create-admin.component';
import { FournisseurEditAdminComponent } from './fournisseur-admin/edit-admin/fournisseur-edit-admin.component';
import { FournisseurViewAdminComponent } from './fournisseur-admin/view-admin/fournisseur-view-admin.component';
import { FournisseurListAdminComponent } from './fournisseur-admin/list-admin/fournisseur-list-admin.component';
import { MarqueCreateAdminComponent } from './marque-admin/create-admin/marque-create-admin.component';
import { MarqueEditAdminComponent } from './marque-admin/edit-admin/marque-edit-admin.component';
import { MarqueViewAdminComponent } from './marque-admin/view-admin/marque-view-admin.component';
import { MarqueListAdminComponent } from './marque-admin/list-admin/marque-list-admin.component';
import { StoreCreateAdminComponent } from './store-admin/create-admin/store-create-admin.component';
import { StoreEditAdminComponent } from './store-admin/edit-admin/store-edit-admin.component';
import { StoreViewAdminComponent } from './store-admin/view-admin/store-view-admin.component';
import { StoreListAdminComponent } from './store-admin/list-admin/store-list-admin.component';
import { VenteCreateAdminComponent } from './vente-admin/create-admin/vente-create-admin.component';
import { VenteEditAdminComponent } from './vente-admin/edit-admin/vente-edit-admin.component';
import { VenteViewAdminComponent } from './vente-admin/view-admin/vente-view-admin.component';
import { VenteListAdminComponent } from './vente-admin/list-admin/vente-list-admin.component';
import { MagasinCreateAdminComponent } from './magasin-admin/create-admin/magasin-create-admin.component';
import { MagasinEditAdminComponent } from './magasin-admin/edit-admin/magasin-edit-admin.component';
import { MagasinViewAdminComponent } from './magasin-admin/view-admin/magasin-view-admin.component';
import { MagasinListAdminComponent } from './magasin-admin/list-admin/magasin-list-admin.component';
import { EtatLivraisonCreateAdminComponent } from './etat-livraison-admin/create-admin/etat-livraison-create-admin.component';
import { EtatLivraisonEditAdminComponent } from './etat-livraison-admin/edit-admin/etat-livraison-edit-admin.component';
import { EtatLivraisonViewAdminComponent } from './etat-livraison-admin/view-admin/etat-livraison-view-admin.component';
import { EtatLivraisonListAdminComponent } from './etat-livraison-admin/list-admin/etat-livraison-list-admin.component';
import { ProduitCreateAdminComponent } from './produit-admin/create-admin/produit-create-admin.component';
import { ProduitEditAdminComponent } from './produit-admin/edit-admin/produit-edit-admin.component';
import { ProduitViewAdminComponent } from './produit-admin/view-admin/produit-view-admin.component';
import { ProduitListAdminComponent } from './produit-admin/list-admin/produit-list-admin.component';
import { EtatPaiementCreateAdminComponent } from './etat-paiement-admin/create-admin/etat-paiement-create-admin.component';
import { EtatPaiementEditAdminComponent } from './etat-paiement-admin/edit-admin/etat-paiement-edit-admin.component';
import { EtatPaiementViewAdminComponent } from './etat-paiement-admin/view-admin/etat-paiement-view-admin.component';
import { EtatPaiementListAdminComponent } from './etat-paiement-admin/list-admin/etat-paiement-list-admin.component';
import { LivraisonCreateAdminComponent } from './livraison-admin/create-admin/livraison-create-admin.component';
import { LivraisonEditAdminComponent } from './livraison-admin/edit-admin/livraison-edit-admin.component';
import { LivraisonViewAdminComponent } from './livraison-admin/view-admin/livraison-view-admin.component';
import { LivraisonListAdminComponent } from './livraison-admin/list-admin/livraison-list-admin.component';
import { AbonneCreateAdminComponent } from './abonne-admin/create-admin/abonne-create-admin.component';
import { AbonneEditAdminComponent } from './abonne-admin/edit-admin/abonne-edit-admin.component';
import { AbonneViewAdminComponent } from './abonne-admin/view-admin/abonne-view-admin.component';
import { AbonneListAdminComponent } from './abonne-admin/list-admin/abonne-list-admin.component';
import { ReceptionCreateAdminComponent } from './reception-admin/create-admin/reception-create-admin.component';
import { ReceptionEditAdminComponent } from './reception-admin/edit-admin/reception-edit-admin.component';
import { ReceptionViewAdminComponent } from './reception-admin/view-admin/reception-view-admin.component';
import { ReceptionListAdminComponent } from './reception-admin/list-admin/reception-list-admin.component';
import { EtatDemandeCreateAdminComponent } from './etat-demande-admin/create-admin/etat-demande-create-admin.component';
import { EtatDemandeEditAdminComponent } from './etat-demande-admin/edit-admin/etat-demande-edit-admin.component';
import { EtatDemandeViewAdminComponent } from './etat-demande-admin/view-admin/etat-demande-view-admin.component';
import { EtatDemandeListAdminComponent } from './etat-demande-admin/list-admin/etat-demande-list-admin.component';
import { ProprietaireChequeBanqueCreateAdminComponent } from './proprietaire-cheque-banque-admin/create-admin/proprietaire-cheque-banque-create-admin.component';
import { ProprietaireChequeBanqueEditAdminComponent } from './proprietaire-cheque-banque-admin/edit-admin/proprietaire-cheque-banque-edit-admin.component';
import { ProprietaireChequeBanqueViewAdminComponent } from './proprietaire-cheque-banque-admin/view-admin/proprietaire-cheque-banque-view-admin.component';
import { ProprietaireChequeBanqueListAdminComponent } from './proprietaire-cheque-banque-admin/list-admin/proprietaire-cheque-banque-list-admin.component';
import { StockProduitCreateAdminComponent } from './stock-produit-admin/create-admin/stock-produit-create-admin.component';
import { StockProduitEditAdminComponent } from './stock-produit-admin/edit-admin/stock-produit-edit-admin.component';
import { StockProduitViewAdminComponent } from './stock-produit-admin/view-admin/stock-produit-view-admin.component';
import { StockProduitListAdminComponent } from './stock-produit-admin/list-admin/stock-produit-list-admin.component';
import { EtatReceptionCreateAdminComponent } from './etat-reception-admin/create-admin/etat-reception-create-admin.component';
import { EtatReceptionEditAdminComponent } from './etat-reception-admin/edit-admin/etat-reception-edit-admin.component';
import { EtatReceptionViewAdminComponent } from './etat-reception-admin/view-admin/etat-reception-view-admin.component';
import { EtatReceptionListAdminComponent } from './etat-reception-admin/list-admin/etat-reception-list-admin.component';
import { UniteMesureCreateAdminComponent } from './unite-mesure-admin/create-admin/unite-mesure-create-admin.component';
import { UniteMesureEditAdminComponent } from './unite-mesure-admin/edit-admin/unite-mesure-edit-admin.component';
import { UniteMesureViewAdminComponent } from './unite-mesure-admin/view-admin/unite-mesure-view-admin.component';
import { UniteMesureListAdminComponent } from './unite-mesure-admin/list-admin/unite-mesure-list-admin.component';
import { AvoirVenteCreateAdminComponent } from './avoir-vente-admin/create-admin/avoir-vente-create-admin.component';
import { AvoirVenteEditAdminComponent } from './avoir-vente-admin/edit-admin/avoir-vente-edit-admin.component';
import { AvoirVenteViewAdminComponent } from './avoir-vente-admin/view-admin/avoir-vente-view-admin.component';
import { AvoirVenteListAdminComponent } from './avoir-vente-admin/list-admin/avoir-vente-list-admin.component';
import { PaiementVenteCreateAdminComponent } from './paiement-vente-admin/create-admin/paiement-vente-create-admin.component';
import { PaiementVenteEditAdminComponent } from './paiement-vente-admin/edit-admin/paiement-vente-edit-admin.component';
import { PaiementVenteViewAdminComponent } from './paiement-vente-admin/view-admin/paiement-vente-view-admin.component';
import { PaiementVenteListAdminComponent } from './paiement-vente-admin/list-admin/paiement-vente-list-admin.component';
import { PaiementDemandeCreateAdminComponent } from './paiement-demande-admin/create-admin/paiement-demande-create-admin.component';
import { PaiementDemandeEditAdminComponent } from './paiement-demande-admin/edit-admin/paiement-demande-edit-admin.component';
import { PaiementDemandeViewAdminComponent } from './paiement-demande-admin/view-admin/paiement-demande-view-admin.component';
import { PaiementDemandeListAdminComponent } from './paiement-demande-admin/list-admin/paiement-demande-list-admin.component';
import { ProprietaireChequeCreateAdminComponent } from './proprietaire-cheque-admin/create-admin/proprietaire-cheque-create-admin.component';
import { ProprietaireChequeEditAdminComponent } from './proprietaire-cheque-admin/edit-admin/proprietaire-cheque-edit-admin.component';
import { ProprietaireChequeViewAdminComponent } from './proprietaire-cheque-admin/view-admin/proprietaire-cheque-view-admin.component';
import { ProprietaireChequeListAdminComponent } from './proprietaire-cheque-admin/list-admin/proprietaire-cheque-list-admin.component';
import { AvoirAchatCreateAdminComponent } from './avoir-achat-admin/create-admin/avoir-achat-create-admin.component';
import { AvoirAchatEditAdminComponent } from './avoir-achat-admin/edit-admin/avoir-achat-edit-admin.component';
import { AvoirAchatViewAdminComponent } from './avoir-achat-admin/view-admin/avoir-achat-view-admin.component';
import { AvoirAchatListAdminComponent } from './avoir-achat-admin/list-admin/avoir-achat-list-admin.component';
import { PaiementAchatCreateAdminComponent } from './paiement-achat-admin/create-admin/paiement-achat-create-admin.component';
import { PaiementAchatEditAdminComponent } from './paiement-achat-admin/edit-admin/paiement-achat-edit-admin.component';
import { PaiementAchatViewAdminComponent } from './paiement-achat-admin/view-admin/paiement-achat-view-admin.component';
import { PaiementAchatListAdminComponent } from './paiement-achat-admin/list-admin/paiement-achat-list-admin.component';
import { EtatCommandeCreateAdminComponent } from './etat-commande-admin/create-admin/etat-commande-create-admin.component';
import { EtatCommandeEditAdminComponent } from './etat-commande-admin/edit-admin/etat-commande-edit-admin.component';
import { EtatCommandeViewAdminComponent } from './etat-commande-admin/view-admin/etat-commande-view-admin.component';
import { EtatCommandeListAdminComponent } from './etat-commande-admin/list-admin/etat-commande-list-admin.component';
import { ModePaiementCreateAdminComponent } from './mode-paiement-admin/create-admin/mode-paiement-create-admin.component';
import { ModePaiementEditAdminComponent } from './mode-paiement-admin/edit-admin/mode-paiement-edit-admin.component';
import { ModePaiementViewAdminComponent } from './mode-paiement-admin/view-admin/mode-paiement-view-admin.component';
import { ModePaiementListAdminComponent } from './mode-paiement-admin/list-admin/mode-paiement-list-admin.component';
import { BanqueCreateAdminComponent } from './banque-admin/create-admin/banque-create-admin.component';
import { BanqueEditAdminComponent } from './banque-admin/edit-admin/banque-edit-admin.component';
import { BanqueViewAdminComponent } from './banque-admin/view-admin/banque-view-admin.component';
import { BanqueListAdminComponent } from './banque-admin/list-admin/banque-list-admin.component';
import { ClientCreateAdminComponent } from './client-admin/create-admin/client-create-admin.component';
import { ClientEditAdminComponent } from './client-admin/edit-admin/client-edit-admin.component';
import { ClientViewAdminComponent } from './client-admin/view-admin/client-view-admin.component';
import { ClientListAdminComponent } from './client-admin/list-admin/client-list-admin.component';
import { AchatCreateAdminComponent } from './achat-admin/create-admin/achat-create-admin.component';
import { AchatEditAdminComponent } from './achat-admin/edit-admin/achat-edit-admin.component';
import { AchatViewAdminComponent } from './achat-admin/view-admin/achat-view-admin.component';
import { AchatListAdminComponent } from './achat-admin/list-admin/achat-list-admin.component';
import { CommandeCreateAdminComponent } from './commande-admin/create-admin/commande-create-admin.component';
import { CommandeEditAdminComponent } from './commande-admin/edit-admin/commande-edit-admin.component';
import { CommandeViewAdminComponent } from './commande-admin/view-admin/commande-view-admin.component';
import { CommandeListAdminComponent } from './commande-admin/list-admin/commande-list-admin.component';
import { PaiementLivraisonCreateAdminComponent } from './paiement-livraison-admin/create-admin/paiement-livraison-create-admin.component';
import { PaiementLivraisonEditAdminComponent } from './paiement-livraison-admin/edit-admin/paiement-livraison-edit-admin.component';
import { PaiementLivraisonViewAdminComponent } from './paiement-livraison-admin/view-admin/paiement-livraison-view-admin.component';
import { PaiementLivraisonListAdminComponent } from './paiement-livraison-admin/list-admin/paiement-livraison-list-admin.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {PaginatorModule} from 'primeng/paginator';
import {AchatListHistoryAdminComponent} from "./achat-admin/list-history-admin/achat-list-history-admin.component";
import {AchatViewHistoryAdminComponent} from "./achat-admin/view-history-admin/achat-view-history-admin.component";



@NgModule({
  declarations: [
    AchatViewHistoryAdminComponent,
    AchatListHistoryAdminComponent,
    PaiementCommandeCreateAdminComponent,
    PaiementCommandeListAdminComponent,
    PaiementCommandeViewAdminComponent,
    PaiementCommandeEditAdminComponent,
    CategorieProduitCreateAdminComponent,
    CategorieProduitListAdminComponent,
    CategorieProduitViewAdminComponent,
    CategorieProduitEditAdminComponent,
    DemandeCreateAdminComponent,
    DemandeListAdminComponent,
    DemandeViewAdminComponent,
    DemandeEditAdminComponent,
    FournisseurCreateAdminComponent,
    FournisseurListAdminComponent,
    FournisseurViewAdminComponent,
    FournisseurEditAdminComponent,
    MarqueCreateAdminComponent,
    MarqueListAdminComponent,
    MarqueViewAdminComponent,
    MarqueEditAdminComponent,
    StoreCreateAdminComponent,
    StoreListAdminComponent,
    StoreViewAdminComponent,
    StoreEditAdminComponent,
    VenteCreateAdminComponent,
    VenteListAdminComponent,
    VenteViewAdminComponent,
    VenteEditAdminComponent,
    MagasinCreateAdminComponent,
    MagasinListAdminComponent,
    MagasinViewAdminComponent,
    MagasinEditAdminComponent,
    EtatLivraisonCreateAdminComponent,
    EtatLivraisonListAdminComponent,
    EtatLivraisonViewAdminComponent,
    EtatLivraisonEditAdminComponent,
    ProduitCreateAdminComponent,
    ProduitListAdminComponent,
    ProduitViewAdminComponent,
    ProduitEditAdminComponent,
    EtatPaiementCreateAdminComponent,
    EtatPaiementListAdminComponent,
    EtatPaiementViewAdminComponent,
    EtatPaiementEditAdminComponent,
    LivraisonCreateAdminComponent,
    LivraisonListAdminComponent,
    LivraisonViewAdminComponent,
    LivraisonEditAdminComponent,
    AbonneCreateAdminComponent,
    AbonneListAdminComponent,
    AbonneViewAdminComponent,
    AbonneEditAdminComponent,
    ReceptionCreateAdminComponent,
    ReceptionListAdminComponent,
    ReceptionViewAdminComponent,
    ReceptionEditAdminComponent,
    EtatDemandeCreateAdminComponent,
    EtatDemandeListAdminComponent,
    EtatDemandeViewAdminComponent,
    EtatDemandeEditAdminComponent,
    ProprietaireChequeBanqueCreateAdminComponent,
    ProprietaireChequeBanqueListAdminComponent,
    ProprietaireChequeBanqueViewAdminComponent,
    ProprietaireChequeBanqueEditAdminComponent,
    StockProduitCreateAdminComponent,
    StockProduitListAdminComponent,
    StockProduitViewAdminComponent,
    StockProduitEditAdminComponent,
    EtatReceptionCreateAdminComponent,
    EtatReceptionListAdminComponent,
    EtatReceptionViewAdminComponent,
    EtatReceptionEditAdminComponent,
    UniteMesureCreateAdminComponent,
    UniteMesureListAdminComponent,
    UniteMesureViewAdminComponent,
    UniteMesureEditAdminComponent,
    AvoirVenteCreateAdminComponent,
    AvoirVenteListAdminComponent,
    AvoirVenteViewAdminComponent,
    AvoirVenteEditAdminComponent,
    PaiementVenteCreateAdminComponent,
    PaiementVenteListAdminComponent,
    PaiementVenteViewAdminComponent,
    PaiementVenteEditAdminComponent,
    PaiementDemandeCreateAdminComponent,
    PaiementDemandeListAdminComponent,
    PaiementDemandeViewAdminComponent,
    PaiementDemandeEditAdminComponent,
    ProprietaireChequeCreateAdminComponent,
    ProprietaireChequeListAdminComponent,
    ProprietaireChequeViewAdminComponent,
    ProprietaireChequeEditAdminComponent,
    AvoirAchatCreateAdminComponent,
    AvoirAchatListAdminComponent,
    AvoirAchatViewAdminComponent,
    AvoirAchatEditAdminComponent,
    PaiementAchatCreateAdminComponent,
    PaiementAchatListAdminComponent,
    PaiementAchatViewAdminComponent,
    PaiementAchatEditAdminComponent,
    EtatCommandeCreateAdminComponent,
    EtatCommandeListAdminComponent,
    EtatCommandeViewAdminComponent,
    EtatCommandeEditAdminComponent,
    ModePaiementCreateAdminComponent,
    ModePaiementListAdminComponent,
    ModePaiementViewAdminComponent,
    ModePaiementEditAdminComponent,
    BanqueCreateAdminComponent,
    BanqueListAdminComponent,
    BanqueViewAdminComponent,
    BanqueEditAdminComponent,
    ClientCreateAdminComponent,
    ClientListAdminComponent,
    ClientViewAdminComponent,
    ClientEditAdminComponent,
    AchatCreateAdminComponent,
    AchatListAdminComponent,
    AchatViewAdminComponent,
    AchatEditAdminComponent,
    CommandeCreateAdminComponent,
    CommandeListAdminComponent,
    CommandeViewAdminComponent,
    CommandeEditAdminComponent,
    PaiementLivraisonCreateAdminComponent,
    PaiementLivraisonListAdminComponent,
    PaiementLivraisonViewAdminComponent,
    PaiementLivraisonEditAdminComponent,
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule,
    PaginatorModule,
    TranslateModule,
  ],
  exports: [
  PaiementCommandeCreateAdminComponent,
  PaiementCommandeListAdminComponent,
  PaiementCommandeViewAdminComponent,
  PaiementCommandeEditAdminComponent,
  CategorieProduitCreateAdminComponent,
  CategorieProduitListAdminComponent,
  CategorieProduitViewAdminComponent,
  CategorieProduitEditAdminComponent,
  DemandeCreateAdminComponent,
  DemandeListAdminComponent,
  DemandeViewAdminComponent,
  DemandeEditAdminComponent,
  FournisseurCreateAdminComponent,
  FournisseurListAdminComponent,
  FournisseurViewAdminComponent,
  FournisseurEditAdminComponent,
  MarqueCreateAdminComponent,
  MarqueListAdminComponent,
  MarqueViewAdminComponent,
  MarqueEditAdminComponent,
  StoreCreateAdminComponent,
  StoreListAdminComponent,
  StoreViewAdminComponent,
  StoreEditAdminComponent,
  VenteCreateAdminComponent,
  VenteListAdminComponent,
  VenteViewAdminComponent,
  VenteEditAdminComponent,
  MagasinCreateAdminComponent,
  MagasinListAdminComponent,
  MagasinViewAdminComponent,
  MagasinEditAdminComponent,
  EtatLivraisonCreateAdminComponent,
  EtatLivraisonListAdminComponent,
  EtatLivraisonViewAdminComponent,
  EtatLivraisonEditAdminComponent,
  ProduitCreateAdminComponent,
  ProduitListAdminComponent,
  ProduitViewAdminComponent,
  ProduitEditAdminComponent,
  EtatPaiementCreateAdminComponent,
  EtatPaiementListAdminComponent,
  EtatPaiementViewAdminComponent,
  EtatPaiementEditAdminComponent,
  LivraisonCreateAdminComponent,
  LivraisonListAdminComponent,
  LivraisonViewAdminComponent,
  LivraisonEditAdminComponent,
  AbonneCreateAdminComponent,
  AbonneListAdminComponent,
  AbonneViewAdminComponent,
  AbonneEditAdminComponent,
  ReceptionCreateAdminComponent,
  ReceptionListAdminComponent,
  ReceptionViewAdminComponent,
  ReceptionEditAdminComponent,
  EtatDemandeCreateAdminComponent,
  EtatDemandeListAdminComponent,
  EtatDemandeViewAdminComponent,
  EtatDemandeEditAdminComponent,
  ProprietaireChequeBanqueCreateAdminComponent,
  ProprietaireChequeBanqueListAdminComponent,
  ProprietaireChequeBanqueViewAdminComponent,
  ProprietaireChequeBanqueEditAdminComponent,
  StockProduitCreateAdminComponent,
  StockProduitListAdminComponent,
  StockProduitViewAdminComponent,
  StockProduitEditAdminComponent,
  EtatReceptionCreateAdminComponent,
  EtatReceptionListAdminComponent,
  EtatReceptionViewAdminComponent,
  EtatReceptionEditAdminComponent,
  UniteMesureCreateAdminComponent,
  UniteMesureListAdminComponent,
  UniteMesureViewAdminComponent,
  UniteMesureEditAdminComponent,
  AvoirVenteCreateAdminComponent,
  AvoirVenteListAdminComponent,
  AvoirVenteViewAdminComponent,
  AvoirVenteEditAdminComponent,
  PaiementVenteCreateAdminComponent,
  PaiementVenteListAdminComponent,
  PaiementVenteViewAdminComponent,
  PaiementVenteEditAdminComponent,
  PaiementDemandeCreateAdminComponent,
  PaiementDemandeListAdminComponent,
  PaiementDemandeViewAdminComponent,
  PaiementDemandeEditAdminComponent,
  ProprietaireChequeCreateAdminComponent,
  ProprietaireChequeListAdminComponent,
  ProprietaireChequeViewAdminComponent,
  ProprietaireChequeEditAdminComponent,
  AvoirAchatCreateAdminComponent,
  AvoirAchatListAdminComponent,
  AvoirAchatViewAdminComponent,
  AvoirAchatEditAdminComponent,
  PaiementAchatCreateAdminComponent,
  PaiementAchatListAdminComponent,
  PaiementAchatViewAdminComponent,
  PaiementAchatEditAdminComponent,
  EtatCommandeCreateAdminComponent,
  EtatCommandeListAdminComponent,
  EtatCommandeViewAdminComponent,
  EtatCommandeEditAdminComponent,
  ModePaiementCreateAdminComponent,
  ModePaiementListAdminComponent,
  ModePaiementViewAdminComponent,
  ModePaiementEditAdminComponent,
  BanqueCreateAdminComponent,
  BanqueListAdminComponent,
  BanqueViewAdminComponent,
  BanqueEditAdminComponent,
  ClientCreateAdminComponent,
  ClientListAdminComponent,
  ClientViewAdminComponent,
  ClientEditAdminComponent,
  AchatCreateAdminComponent,
  AchatListAdminComponent,
  AchatViewAdminComponent,
  AchatEditAdminComponent,
  CommandeCreateAdminComponent,
  CommandeListAdminComponent,
  CommandeViewAdminComponent,
  CommandeEditAdminComponent,
  PaiementLivraisonCreateAdminComponent,
  PaiementLivraisonListAdminComponent,
  PaiementLivraisonViewAdminComponent,
  PaiementLivraisonEditAdminComponent,
  ],
  entryComponents: [],
})
export class StockAdminModule { }
