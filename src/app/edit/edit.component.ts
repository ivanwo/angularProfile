import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../services/profile.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  nameChange: string;
  contactChange: string;
  bioChange: string;

  constructor(private profileService: ProfileService, private router: Router) {}

  onSubmit(): void {
    this.profileService.setUserProfile({
      name: this.nameChange,
      bio: this.bioChange,
      contact: this.contactChange
    });
    this.router.navigate(["/profile"]);
  }
  ngOnInit() {
    this.nameChange = this.profileService.getUserProfile().name;
    this.contactChange = this.profileService.getUserProfile().contact;
    this.bioChange = this.profileService.getUserProfile().bio;
  }
}
