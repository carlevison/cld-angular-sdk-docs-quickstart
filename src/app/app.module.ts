import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// 1. Import classes
//===================

// Import the CloudinaryModule.
import { CloudinaryModule } from "@cloudinary/ng";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CloudinaryModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
