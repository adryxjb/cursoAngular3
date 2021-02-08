import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
//Importar componentes
import { AppComponent } from "./app.component";
import { UnoComponent } from "./components/uno/uno.component";
import { DosComponent } from "./components/dos/dos.component";
import { TresComponent } from "./components/tres/tres.component";

@NgModule({
  declarations: [AppComponent, UnoComponent, DosComponent, TresComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
