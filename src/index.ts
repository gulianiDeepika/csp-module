import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CspComponent } from './csp.component';
import { SampleDirective } from './sample.directive';
import { SamplePipe } from './sample.pipe';
import { SampleService } from './sample.service';

export * from './csp.component';
export * from './sample.directive';
export * from './sample.pipe';
export * from './sample.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CspComponent,
    SampleDirective,
    SamplePipe
  ],
  exports: [
    CspComponent,
    SampleDirective,
    SamplePipe
  ]
})
export class CspModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CspModule,
      providers: [SampleService]
    };
  }
}
