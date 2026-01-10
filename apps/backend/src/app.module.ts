import { Module } from '@nestjs/common';

@Module({
  imports: [],
})
export class AppModule {
  constructor() {
    console.log('Hello World');
  }
}
