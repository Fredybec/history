import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {DemandeDto} from '../model/Demande.model';
import {DemandeCriteria} from '../criteria/DemandeCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {MagasinDto} from '../model/Magasin.model';
import {EtatDemandeDto} from '../model/EtatDemande.model';
import {PaiementDemandeDto} from '../model/PaiementDemande.model';
import {LivraisonDto} from '../model/Livraison.model';
import {ClientDto} from '../model/Client.model';
import {ProduitDto} from '../model/Produit.model';
import {DemandeItemDto} from '../model/DemandeItem.model';

@Injectable({
  providedIn: 'root'
})
export class DemandeService extends AbstractService<DemandeDto, DemandeCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/demande/');
    }

    public constrcutDto(): DemandeDto {
        return new DemandeDto();
    }

    public constrcutCriteria(): DemandeCriteria {
        return new DemandeCriteria();
    }
}
