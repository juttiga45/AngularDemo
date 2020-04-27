import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NestedComponent } from "./components/nested/nested.component";
import { FormsModule } from "@angular/forms";
import { ChildComponent } from './child/child/child.component';

@NgModule({
  declarations: [AppComponent, NestedComponent, ChildComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
