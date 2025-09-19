import { Test, type TestingModule } from '@nestjs/testing'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'

describe('AppController', () => {
    let appController: AppController

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            imports: [
                ConfigModule.forRoot({
                    isGlobal: true
                })
            ],
            controllers: [AppController],
            providers: [AppService]
        }).compile()

        appController = app.get<AppController>(AppController)
    })

    describe('root', () => {
        it('should return the name of the application', () => {
            expect(appController.getHello()).toBe('Application: Modular ERP')
        })
    })
})
