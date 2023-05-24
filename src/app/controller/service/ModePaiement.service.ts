import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ModePaiementDto} from '../model/ModePaiement.model';
import {ModePaiementCriteria} from '../criteria/ModePaiementCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class ModePaiementService extends AbstractService<ModePaiementDto, ModePaiementCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/modePaiement/');
    }

    public constrcutDto(): ModePaiementDto {
        return new ModePaiementDto();
    }

    public constrcutCriteria(): ModePaiementCriteria {
        return new ModePaiementCriteria();
    }
}
