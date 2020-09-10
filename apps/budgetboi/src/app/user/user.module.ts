import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolvers';
import { UsersService } from './user.service';
import { DbModule } from '../db/db.module';

@Module({
    imports: [DbModule],
    providers: [
        UserResolver, UsersService
    ]
})
export class UserModule {}
