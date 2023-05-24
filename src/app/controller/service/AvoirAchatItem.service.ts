import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {AvoirAchatItemDto} from '../model/AvoirAchatItem.model';
import {AvoirAchatItemCriteria} from '../criteria/AvoirAchatItemCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {AvoirAchatDto} from '../model/AvoirAchat.model';
import {ProduitDto} from '../model/Produit.model';

@Injectable({
  providedIn: 'root'
})
export class AvoirAchatItemService extends AbstractService<AvoirAchatItemDto, AvoirAchatItemCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/avoirAchatItem/');
    }

    public constrcutDto(): AvoirAchatItemDto {
        return new AvoirAchatItemDto();
    }

    public constrcutCriteria(): AvoirAchatItemCriteria {
        return new AvoirAchatItemCriteria();
    }
}
