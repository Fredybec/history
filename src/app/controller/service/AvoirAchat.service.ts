import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {AvoirAchatDto} from '../model/AvoirAchat.model';
import {AvoirAchatCriteria} from '../criteria/AvoirAchatCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {AchatDto} from '../model/Achat.model';
import {AvoirAchatItemDto} from '../model/AvoirAchatItem.model';

@Injectable({
  providedIn: 'root'
})
export class AvoirAchatService extends AbstractService<AvoirAchatDto, AvoirAchatCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/avoirAchat/');
    }

    public constrcutDto(): AvoirAchatDto {
        return new AvoirAchatDto();
    }

    public constrcutCriteria(): AvoirAchatCriteria {
        return new AvoirAchatCriteria();
    }
}
