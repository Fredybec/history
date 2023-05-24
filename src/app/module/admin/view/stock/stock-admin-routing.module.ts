
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { PaiementCommandeListAdminComponent } from './paiement-commande-admin/list-admin/paiement-commande-list-admin.component';
import { CategorieProduitListAdminComponent } from './categorie-produit-admin/list-admin/categorie-produit-list-admin.component';
import { DemandeListAdminComponent } from './demande-admin/list-admin/demande-list-admin.component';
import { FournisseurListAdminComponent } from './fournisseur-admin/list-admin/fournisseur-list-admin.component';
import { MarqueListAdminComponent } from './marque-admin/list-admin/marque-list-admin.component';
import { StoreListAdminComponent } from './store-admin/list-admin/store-list-admin.component';
import { VenteListAdminComponent } from './vente-admin/list-admin/vente-list-admin.component';
import { MagasinListAdminComponent } from './magasin-admin/list-admin/magasin-list-admin.component';
import { EtatLivraisonListAdminComponent } from './etat-livraison-admin/list-admin/etat-livraison-list-admin.component';
import { ProduitListAdminComponent } from './produit-admin/list-admin/produit-list-admin.component';
import { EtatPaiementListAdminComponent } from './etat-paiement-admin/list-admin/etat-paiement-list-admin.component';
import { LivraisonListAdminComponent } from './livraison-admin/list-admin/livraison-list-admin.component';
import { AbonneListAdminComponent } from './abonne-admin/list-admin/abonne-list-admin.component';
import { ReceptionListAdminComponent } from './reception-admin/list-admin/reception-list-admin.component';
import { EtatDemandeListAdminComponent } from './etat-demande-admin/list-admin/etat-demande-list-admin.component';
import { ProprietaireChequeBanqueListAdminComponent } from './proprietaire-cheque-banque-admin/list-admin/proprietaire-cheque-banque-list-admin.component';
import { StockProduitListAdminComponent } from './stock-produit-admin/list-admin/stock-produit-list-admin.component';
import { EtatReceptionListAdminComponent } from './etat-reception-admin/list-admin/etat-reception-list-admin.component';
import { UniteMesureListAdminComponent } from './unite-mesure-admin/list-admin/unite-mesure-list-admin.component';
import { AvoirVenteListAdminComponent } from './avoir-vente-admin/list-admin/avoir-vente-list-admin.component';
import { PaiementVenteListAdminComponent } from './paiement-vente-admin/list-admin/paiement-vente-list-admin.component';
import { PaiementDemandeListAdminComponent } from './paiement-demande-admin/list-admin/paiement-demande-list-admin.component';
import { ProprietaireChequeListAdminComponent } from './proprietaire-cheque-admin/list-admin/proprietaire-cheque-list-admin.component';
import { AvoirAchatListAdminComponent } from './avoir-achat-admin/list-admin/avoir-achat-list-admin.component';
import { PaiementAchatListAdminComponent } from './paiement-achat-admin/list-admin/paiement-achat-list-admin.component';
import { EtatCommandeListAdminComponent } from './etat-commande-admin/list-admin/etat-commande-list-admin.component';
import { ModePaiementListAdminComponent } from './mode-paiement-admin/list-admin/mode-paiement-list-admin.component';
import { BanqueListAdminComponent } from './banque-admin/list-admin/banque-list-admin.component';
import { ClientListAdminComponent } from './client-admin/list-admin/client-list-admin.component';
import { AchatListAdminComponent } from './achat-admin/list-admin/achat-list-admin.component';
import { CommandeListAdminComponent } from './commande-admin/list-admin/commande-list-admin.component';
import { PaiementLivraisonListAdminComponent } from './paiement-livraison-admin/list-admin/paiement-livraison-list-admin.component';
import {AchatListHistoryAdminComponent} from "./achat-admin/list-history-admin/achat-list-history-admin.component";
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'paiement-commande',
                            children: [
                                {
                                    path: 'list',
                                    component: PaiementCommandeListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'categorie-produit',
                            children: [
                                {
                                    path: 'list',
                                    component: CategorieProduitListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'demande',
                            children: [
                                {
                                    path: 'list',
                                    component: DemandeListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'fournisseur',
                            children: [
                                {
                                    path: 'list',
                                    component: FournisseurListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'marque',
                            children: [
                                {
                                    path: 'list',
                                    component: MarqueListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'store',
                            children: [
                                {
                                    path: 'list',
                                    component: StoreListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'vente',
                            children: [
                                {
                                    path: 'list',
                                    component: VenteListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'magasin',
                            children: [
                                {
                                    path: 'list',
                                    component: MagasinListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etat-livraison',
                            children: [
                                {
                                    path: 'list',
                                    component: EtatLivraisonListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'produit',
                            children: [
                                {
                                    path: 'list',
                                    component: ProduitListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etat-paiement',
                            children: [
                                {
                                    path: 'list',
                                    component: EtatPaiementListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'livraison',
                            children: [
                                {
                                    path: 'list',
                                    component: LivraisonListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'abonne',
                            children: [
                                {
                                    path: 'list',
                                    component: AbonneListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'reception',
                            children: [
                                {
                                    path: 'list',
                                    component: ReceptionListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etat-demande',
                            children: [
                                {
                                    path: 'list',
                                    component: EtatDemandeListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'proprietaire-cheque-banque',
                            children: [
                                {
                                    path: 'list',
                                    component: ProprietaireChequeBanqueListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'stock-produit',
                            children: [
                                {
                                    path: 'list',
                                    component: StockProduitListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etat-reception',
                            children: [
                                {
                                    path: 'list',
                                    component: EtatReceptionListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'unite-mesure',
                            children: [
                                {
                                    path: 'list',
                                    component: UniteMesureListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'avoir-vente',
                            children: [
                                {
                                    path: 'list',
                                    component: AvoirVenteListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'paiement-vente',
                            children: [
                                {
                                    path: 'list',
                                    component: PaiementVenteListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'paiement-demande',
                            children: [
                                {
                                    path: 'list',
                                    component: PaiementDemandeListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'proprietaire-cheque',
                            children: [
                                {
                                    path: 'list',
                                    component: ProprietaireChequeListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'avoir-achat',
                            children: [
                                {
                                    path: 'list',
                                    component: AvoirAchatListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'paiement-achat',
                            children: [
                                {
                                    path: 'list',
                                    component: PaiementAchatListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etat-commande',
                            children: [
                                {
                                    path: 'list',
                                    component: EtatCommandeListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'mode-paiement',
                            children: [
                                {
                                    path: 'list',
                                    component: ModePaiementListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'banque',
                            children: [
                                {
                                    path: 'list',
                                    component: BanqueListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'client',
                            children: [
                                {
                                    path: 'list',
                                    component: ClientListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'achat',
                            children: [
                                {
                                    path: 'list',
                                    component: AchatListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'achat',
                            children: [
                                {
                                    path: 'list-history',
                                    component: AchatListHistoryAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'commande',
                            children: [
                                {
                                    path: 'list',
                                    component: CommandeListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'paiement-livraison',
                            children: [
                                {
                                    path: 'list',
                                    component: PaiementLivraisonListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class StockAdminRoutingModule { }
