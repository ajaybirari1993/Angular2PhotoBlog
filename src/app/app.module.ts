import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms'
import { InMemoryWebApiModule} from 'angular-in-memory-web-api';

// Components
import { appComponent } from './app.component';
import { entryListComponent, entryComponent, entryService, entryCommentFromComponent} from './entries';
import { InMemoryEntryService } from './backend';

@NgModule({
  imports : [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryEntryService),
    FormsModule
  ],
  declarations : [
    appComponent,
    entryListComponent,
    entryComponent,
    entryCommentFromComponent
  ],
  providers : [
    entryService
  ],
  bootstrap  : [appComponent]
})
export class AppModule{

}