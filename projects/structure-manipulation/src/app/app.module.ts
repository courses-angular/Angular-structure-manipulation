import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateDirective } from './template.directive';

@NgModule({
    declarations: [
        AppComponent,
        TemplateDirective,
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    exports: [
        TemplateDirective
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
