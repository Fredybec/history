import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {PaiementDemandeDto} from '../model/PaiementDemande.model';
import {PaiementDemandeCriteria} from '../criteria/PaiementDemandeCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {DemandeDto} from '../model/Demande.model';
import {ModePaiementDto} from '../model/ModePaiement.model';

@Injectable({
  providedIn: 'root'
})
export class PaiementDemandeService extends AbstractService<PaiementDemandeDto, PaiementDemandeCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/paiementDemande/');
    }

    public constrcutDto(): PaiementDemandeDto {
        return new PaiementDemandeDto();
    }

    public constrcutCriteria(): PaiementDemandeCriteria {
        return new PaiementDemandeCriteria();
    }
}
