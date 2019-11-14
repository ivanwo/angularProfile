import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../services/profile.service";
import { UserProfile } from "../user-profile";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  constructor(private profileService: ProfileService) {}
  userProfile: UserProfile;
  ngOnInit() {
    this.userProfile = this.profileService.getUserProfile();
    // alert(this.userProfile.name);
  }
}
