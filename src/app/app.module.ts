import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Router } from "@angular/router";

import { AppComponent } from "./app.component";
import { ProfileComponent } from "./profile/profile.component";
import { EditComponent } from "./edit/edit.component";

const routes = [
  { path: "profile", component: ProfileComponent },
  { path: "edit-profile", component: EditComponent },
  { path: "", redirectTo: "/profile", pathMatch: "full" },
  { path: "**", redirectTo: "" }
];

@NgModule({
  declarations: [AppComponent, ProfileComponent, EditComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
