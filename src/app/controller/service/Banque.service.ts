import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {BanqueDto} from '../model/Banque.model';
import {BanqueCriteria} from '../criteria/BanqueCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class BanqueService extends AbstractService<BanqueDto, BanqueCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/banque/');
    }

    public constrcutDto(): BanqueDto {
        return new BanqueDto();
    }

    public constrcutCriteria(): BanqueCriteria {
        return new BanqueCriteria();
    }
}
