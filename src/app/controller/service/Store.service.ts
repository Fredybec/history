import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {StoreDto} from '../model/Store.model';
import {StoreCriteria} from '../criteria/StoreCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {AbonneDto} from '../model/Abonne.model';
import {MagasinDto} from '../model/Magasin.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService extends AbstractService<StoreDto, StoreCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/store/');
    }

    public constrcutDto(): StoreDto {
        return new StoreDto();
    }

    public constrcutCriteria(): StoreCriteria {
        return new StoreCriteria();
    }
}
