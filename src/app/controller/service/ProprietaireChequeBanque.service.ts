import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ProprietaireChequeBanqueDto} from '../model/ProprietaireChequeBanque.model';
import {ProprietaireChequeBanqueCriteria} from '../criteria/ProprietaireChequeBanqueCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {ProprietaireChequeDto} from '../model/ProprietaireCheque.model';
import {BanqueDto} from '../model/Banque.model';

@Injectable({
  providedIn: 'root'
})
export class ProprietaireChequeBanqueService extends AbstractService<ProprietaireChequeBanqueDto, ProprietaireChequeBanqueCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/proprietaireChequeBanque/');
    }

    public constrcutDto(): ProprietaireChequeBanqueDto {
        return new ProprietaireChequeBanqueDto();
    }

    public constrcutCriteria(): ProprietaireChequeBanqueCriteria {
        return new ProprietaireChequeBanqueCriteria();
    }
}
