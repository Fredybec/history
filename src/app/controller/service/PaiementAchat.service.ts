import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {PaiementAchatDto} from '../model/PaiementAchat.model';
import {PaiementAchatCriteria} from '../criteria/PaiementAchatCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {AchatDto} from '../model/Achat.model';
import {ModePaiementDto} from '../model/ModePaiement.model';

@Injectable({
  providedIn: 'root'
})
export class PaiementAchatService extends AbstractService<PaiementAchatDto, PaiementAchatCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/paiementAchat/');
    }

    public constrcutDto(): PaiementAchatDto {
        return new PaiementAchatDto();
    }

    public constrcutCriteria(): PaiementAchatCriteria {
        return new PaiementAchatCriteria();
    }
}
