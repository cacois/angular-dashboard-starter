import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { TodoService } from './services/todo.service';
import { HttpClientModule } from '@angular/common/http';
import { FrameComponent } from './frame/frame.component';
import { BsDropdownConfig, BsDropdownModule } from 'ngx-bootstrap';
import { VerticalNavigationModule, ListModule, ActionModule, CardModule } from 'patternfly-ng';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    FrameComponent
  ],
  imports: [
    VerticalNavigationModule,
    ListModule,
    ActionModule,
    CardModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BsDropdownModule.forRoot()
  ],
  providers: [TodoService, BsDropdownConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
