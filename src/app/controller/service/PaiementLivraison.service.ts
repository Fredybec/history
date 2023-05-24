import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {PaiementLivraisonDto} from '../model/PaiementLivraison.model';
import {PaiementLivraisonCriteria} from '../criteria/PaiementLivraisonCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {VenteDto} from '../model/Vente.model';
import {LivraisonDto} from '../model/Livraison.model';
import {ModePaiementDto} from '../model/ModePaiement.model';

@Injectable({
  providedIn: 'root'
})
export class PaiementLivraisonService extends AbstractService<PaiementLivraisonDto, PaiementLivraisonCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/paiementLivraison/');
    }

    public constrcutDto(): PaiementLivraisonDto {
        return new PaiementLivraisonDto();
    }

    public constrcutCriteria(): PaiementLivraisonCriteria {
        return new PaiementLivraisonCriteria();
    }
}
