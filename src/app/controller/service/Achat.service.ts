import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {AchatDto} from '../model/Achat.model';
import {AchatCriteria} from '../criteria/AchatCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {FournisseurDto} from '../model/Fournisseur.model';
import {AchatItemDto} from '../model/AchatItem.model';
import {StoreDto} from '../model/Store.model';
import {PaiementAchatDto} from '../model/PaiementAchat.model';
import {AvoirAchatDto} from '../model/AvoirAchat.model';

@Injectable({
  providedIn: 'root'
})
export class AchatService extends AbstractService<AchatDto, AchatCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/achat/');
    }

    public constrcutDto(): AchatDto {
        return new AchatDto();
    }

    public constrcutCriteria(): AchatCriteria {
        return new AchatCriteria();
    }
}
