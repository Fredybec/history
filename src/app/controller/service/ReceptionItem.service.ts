import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ReceptionItemDto} from '../model/ReceptionItem.model';
import {ReceptionItemCriteria} from '../criteria/ReceptionItemCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {MagasinDto} from '../model/Magasin.model';
import {ReceptionDto} from '../model/Reception.model';
import {ProduitDto} from '../model/Produit.model';

@Injectable({
  providedIn: 'root'
})
export class ReceptionItemService extends AbstractService<ReceptionItemDto, ReceptionItemCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/receptionItem/');
    }

    public constrcutDto(): ReceptionItemDto {
        return new ReceptionItemDto();
    }

    public constrcutCriteria(): ReceptionItemCriteria {
        return new ReceptionItemCriteria();
    }
}
