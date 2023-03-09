import { DataSource } from 'typeorm';
import {
  EventEntity,
} from '@rrhh/entities';

import { DataSourceEnum, RepositoryEnum } from '@shared/enums';

export const rrhhProviders = [
  {
    provide: RepositoryEnum.EVENT_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(EventEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
];
